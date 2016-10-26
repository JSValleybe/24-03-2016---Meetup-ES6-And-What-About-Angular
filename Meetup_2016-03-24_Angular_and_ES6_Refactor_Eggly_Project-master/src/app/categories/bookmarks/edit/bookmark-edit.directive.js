import { BookmarksEditController as controller } from './bookmark-edit.controller';
import template from './bookmark-edit.tmpl.html';

const bookmarkEditDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'editBookmarkCtrl',
    restrict: 'E',
    replace: true,
    scope: {}
  };
};

export default bookmarkEditDirective;
