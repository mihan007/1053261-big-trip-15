import Menu from './view/menu';
import PointForm from './view/point-form';
import Point from './view/point-list';
import Cost from './view/cost';
import Filter from './view/filter';
import Info from './view/info';
import Sort from './view/sort';
import { generatePoint } from './mock/point';
import { range, render } from './utils';

const POINT_COUNT = 20;
const points = range(0, POINT_COUNT).map(() => generatePoint());

const menuElement = document.querySelector('.js-menu');
render(menuElement, new Menu().getElement());

const renderPoint = (pointListElement, point) => {
  const pointComponent = new Point(point);
  const pointFormComponent = new PointForm(point);

  const replaceCardToForm = () => {
    pointListElement.replaceChild(pointFormComponent.getElement(), pointComponent.getElement());
  };

  const replaceFormToCard = () => {
    pointListElement.replaceChild(pointComponent.getElement(), pointFormComponent.getElement());
  };

  pointComponent.getElement().querySelector('.js-open-edit-form').addEventListener('click', () => {
    replaceCardToForm();
  });

  pointFormComponent.getElement().querySelector('form').addEventListener('submit', (evt) => {
    evt.preventDefault();
    replaceFormToCard();
  });

  render(pointListElement, pointComponent.getElement());
};

const contentElement = document.querySelector('.js-content');
points.map((point) => renderPoint(contentElement, point));

const tripElement = document.querySelector('.js-trip');
render(tripElement, new Info(points).getElement());

const costElement = document.querySelector('.js-cost');
render(costElement, new Cost(points).getElement());

const filterElement = document.querySelector('.js-filter');
render(filterElement, new Filter().getElement());

const sortElement = document.querySelector('.js-sort');
render(sortElement, new Sort().getElement());
