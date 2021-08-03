import Menu from './view/menu';
import { createPointFormTemplate } from './view/point-form';
import { createPointListTemplate } from './view/point-list';
import { createCostTemplate } from './view/cost';
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
renderTemplate(contentElement, createPointFormTemplate(points[0]));
renderTemplate(contentElement, createPointFormTemplate());

points.map((el, index) => renderTemplate(contentElement, createPointListTemplate(points[index])));

const tripElement = document.querySelector('.js-trip');
renderTemplate(tripElement, createInfoTemplate(points));

const costElement = document.querySelector('.js-cost');
renderTemplate(costElement, createCostTemplate(points));

const filterElement = document.querySelector('.js-filter');
renderElement(filterElement, new Filter().getElement());

const sortElement = document.querySelector('.js-sort');
renderElement(sortElement, new Sort().getElement());
