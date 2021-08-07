import Menu from './view/menu';
import PointForm from './view/point-form';
import PointList from './view/point-list';
import Cost from './view/cost';
import Filter from './view/filter';
import Info from './view/info';
import Sort from './view/sort';
import { generatePoint } from './mock/point';
import { range, render } from './utils';

const POINT_COUNT = 20;
const points = range(1, POINT_COUNT).map(() => generatePoint());

const menuElement = document.querySelector('.js-menu');
render(menuElement, new Menu().getElement());

points.map((el, index) => render(contentElement, new PointList(points[index]).getElement()));

const tripElement = document.querySelector('.js-trip');
render(tripElement, new Info(points).getElement());

const costElement = document.querySelector('.js-cost');
render(costElement, new Cost(points).getElement());

const filterElement = document.querySelector('.js-filter');
render(filterElement, new Filter().getElement());

const sortElement = document.querySelector('.js-sort');
render(sortElement, new Sort().getElement());
