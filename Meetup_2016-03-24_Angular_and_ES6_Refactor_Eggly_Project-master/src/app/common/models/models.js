import BookmarksModel from './bookmarks-model';
import CategoriesModel from './categories-model';
import angular from 'angular';

export const models = angular.module('eggly.models', [])
  .factory('BookmarksModel', BookmarksModel)
  .factory('CategoriesModel', CategoriesModel);
