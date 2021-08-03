import Menu from './view/menu';
import PointForm from './view/point-form';
import PointList from './view/point-list';
import Cost from './view/cost';
import Filter from './view/filter';
import { createInfoTemplate } from './view/info';
import Sort from './view/sort';
import { generatePoint } from './mock/point';
import { range, renderTemplate, renderElement } from './utils';

const POINT_COUNT = 20;
const points = range(1, POINT_COUNT).map(() => generatePoint());

const menuElement = document.querySelector('.js-menu');
renderElement(menuElement, new Menu().getElement());

const contentElement = document.querySelector('.js-content');
renderElement(contentElement, new PointForm(points[0]).getElement());
renderElement(contentElement, new PointForm().getElement());

points.map((el, index) => renderElement(contentElement, new PointList(points[index]).getElement()));

const tripElement = document.querySelector('.js-trip');
renderTemplate(tripElement, createInfoTemplate(points));

const costElement = document.querySelector('.js-cost');
renderElement(costElement, new Cost(points).getElement());

const filterElement = document.querySelector('.js-filter');
renderElement(filterElement, new Filter().getElement());

const sortElement = document.querySelector('.js-sort');
renderElement(sortElement, new Sort().getElement());
