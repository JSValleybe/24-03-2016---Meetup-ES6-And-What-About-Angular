import { BookmarksController as controller } from './bookmarks.controller';
import template from './bookmarks.tmpl.html';

// Import styles
import './bookmarks.css';

const bookmarksDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'bookmarksListCtrl',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};

export default bookmarksDirective;
