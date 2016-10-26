import { BookmarksCreateController as controller } from './bookmark-create.controller';
import template from './bookmark-create.tmpl.html';

const bookmarkCreateDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'createBookmarkCtrl',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};

export default bookmarkCreateDirective;
