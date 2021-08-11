import Menu from './view/menu';
import PointForm from './view/point-form';
import Point from './view/point';
import PointList from './view/point-list';
import Cost from './view/cost';
import Filter from './view/filter';
import Info from './view/info';
import Sort from './view/sort';
import EmptyList from './view/empty-list';
import { generatePoint } from './mock/point';
import { range, render, RenderPosition } from './utils';

const POINT_COUNT = 2;
const points = range(0, POINT_COUNT).map(generatePoint);

const menuElement = document.querySelector('.js-menu');
render(menuElement, new Menu().getElement());

const handleFormToCardAction = (replaceFormToCard, onEscKeyDown) => {
  replaceFormToCard();
  document.removeEventListener('keydown', onEscKeyDown);
};

const renderPoint = (pointListElement, point) => {
  const pointComponent = new Point(point);
  const pointFormComponent = new PointForm(point);

  const replaceCardToForm = () => {
    pointListElement.replaceChild(pointFormComponent.getElement(), pointComponent.getElement());
  };

  const replaceFormToCard = () => {
    pointListElement.replaceChild(pointComponent.getElement(), pointFormComponent.getElement());
  };

  pointComponent.getElement('.js-open-edit-form').addEventListener('click', () => {
    replaceCardToForm();
    document.addEventListener('keydown', onEscKeyDown);
  });

  pointFormComponent.getElement('form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    handleFormToCardAction(replaceFormToCard, onEscKeyDown);
  });

  pointFormComponent.getElement('.js-close-edit-form').addEventListener('click', () => {
    handleFormToCardAction(replaceFormToCard, onEscKeyDown);
  });

  const onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      handleFormToCardAction(replaceFormToCard, onEscKeyDown);
    }
  };

  render(pointListElement, pointComponent.getElement());
};

if (points.length) {
  const costElement = document.querySelector('.js-cost');
  const costComponentElement = new Cost(points).getElement();
  render(costElement, costComponentElement, RenderPosition.AFTERBEGIN);
  render(costComponentElement, new Info(points).getElement(), RenderPosition.AFTERBEGIN);
}

const filterElement = document.querySelector('.js-filter');
render(filterElement, new Filter().getElement(), RenderPosition.AFTERBEGIN);

const containerElement = document.querySelector('.js-trip-events-container');
if (points.length) {
  const pointListComponent = new PointList().getElement();
  render(containerElement, new Sort().getElement());
  render(containerElement, pointListComponent);

  points.forEach((point) => renderPoint(pointListComponent, point));
} else {
  render(containerElement, new EmptyList().getElement());
}

