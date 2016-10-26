import angular from 'angular';
import './bookmark-create.tmpl.html';
import bookmarksCreateTmpl from './bookmark-create.tmpl.html';
import { BookmarksCreateController } from './bookmark-create.controller';
import BookmarkCreateDirective from './bookmark-create.directive';

export const bookmarksCreate = angular.module('categories.bookmarks.create', [])
    .config(function ($stateProvider) {
        $stateProvider
            .state('eggly.categories.bookmarks.create', {
                url: '/bookmarks/create',
                template: '<createbookmark></createbookmark>'
            })
        ;
    })
    .directive('createbookmark', BookmarkCreateDirective);
