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
import { render, RenderPosition, replace } from './utils/render';
import { range } from './utils/common';

const POINT_COUNT = 2;
const points = range(0, POINT_COUNT).map(generatePoint);

const menuElement = document.querySelector('.js-menu');
render(menuElement, new Menu());

const handleFormToCardAction = (replaceFormToCard, onEscKeyDown) => {
  replaceFormToCard();
  document.removeEventListener('keydown', onEscKeyDown);
};

const renderPoint = (pointListElement, point) => {
  const pointComponent = new Point(point);
  const pointFormComponent = new PointForm(point);

  const replaceCardToForm = () => {
    replace(pointFormComponent, pointComponent);
  };

  const replaceFormToCard = () => {
    replace(pointComponent, pointFormComponent);
  };

  pointComponent.setClickHandler(() => {
    replaceCardToForm();
    document.addEventListener('keydown', onEscKeyDown);
  });

  pointFormComponent.setSubmitHandler(() => {
    handleFormToCardAction(replaceFormToCard, onEscKeyDown);
  });

  pointFormComponent.setClickHandler(() => {
    handleFormToCardAction(replaceFormToCard, onEscKeyDown);
  });

  const onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      handleFormToCardAction(replaceFormToCard, onEscKeyDown);
    }
  };

  render(pointListElement, pointComponent);
};

if (points.length) {
  const costElement = document.querySelector('.js-cost');
  const costComponentElement = new Cost(points);
  render(costElement, costComponentElement, RenderPosition.AFTERBEGIN);
  render(costComponentElement, new Info(points), RenderPosition.AFTERBEGIN);
}

const filterElement = document.querySelector('.js-filter');
render(filterElement, new Filter(), RenderPosition.AFTERBEGIN);

const containerElement = document.querySelector('.js-trip-events-container');
if (points.length) {
  const pointListComponent = new PointList();
  render(containerElement, new Sort());
  render(containerElement, pointListComponent);

  points.forEach((point) => renderPoint(pointListComponent, point));
} else {
  render(containerElement, new EmptyList());
}

