import { CategoriesController as controller } from './categories.controller';
import template from './categories.tmpl.html';

// Import styles
import './categories.css';

const categoriesDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'categoriesListCtrl',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};

export default categoriesDirective;
