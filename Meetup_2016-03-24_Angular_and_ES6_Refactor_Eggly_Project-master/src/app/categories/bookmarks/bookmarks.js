import angular from 'angular';
import './bookmarks.tmpl.html';
import bookmarksTmpl from './bookmarks.tmpl.html';
import { bookmarksCreate } from './create/bookmark-create';
import { bookmarksEdit } from './edit/bookmark-edit';
import { BookmarksController } from './bookmarks.controller';
import BookmarksDirective from './bookmarks.directive';

export const bookmarks = angular.module('categories.bookmarks', [
    bookmarksCreate.name,
    bookmarksEdit.name,
])
    .config(function ($stateProvider) {
        $stateProvider
            .state('eggly.categories.bookmarks', {
                url: 'categories/:category',
                views: {
                    'bookmarks@': {
                        template: '<bookmarks></bookmarks>',
                    }
                }
            })
        ;
    })
    .directive('bookmarks', BookmarksDirective);
