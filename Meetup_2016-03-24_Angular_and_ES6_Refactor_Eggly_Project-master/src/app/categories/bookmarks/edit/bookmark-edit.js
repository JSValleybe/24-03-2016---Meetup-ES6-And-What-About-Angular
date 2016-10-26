import angular from 'angular';
import './bookmark-edit.tmpl.html';
import bookmarksEditTmpl from './bookmark-edit.tmpl.html';
import { BookmarksEditController } from './bookmark-edit.controller';
import BookmarkEditDirective from './bookmark-edit.directive';


export const bookmarksEdit = angular.module('categories.bookmarks.edit', [])
    .config(function ($stateProvider) {
        $stateProvider
            .state('eggly.categories.bookmarks.edit', {
                url: '/bookmarks/:bookmarkId/edit',
                template: '<editbookmark></editbookmark>',
            })
        ;
    })
    .directive('editbookmark', BookmarkEditDirective);
