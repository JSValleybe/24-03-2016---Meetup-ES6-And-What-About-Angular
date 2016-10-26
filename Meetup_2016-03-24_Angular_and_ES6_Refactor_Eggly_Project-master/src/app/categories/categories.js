import angular from 'angular';
import categoriesTmpl from './categories.tmpl.html';
import bookmarksTmpl from './bookmarks/bookmarks.tmpl.html';
import { CategoriesController } from './categories.controller';
import { BookmarksController } from './bookmarks/bookmarks.controller';
import categoriesDirective from './categories.directive';

export const categories = angular.module('categories', [])
    .config(function ($stateProvider) {
        $stateProvider
            .state('eggly.categories', {
                url: '/',
                views: {
                    'categories@': {
                        template: '<categories></categories>'
                    },
                    'bookmarks@': {
                        template: '<bookmarks></bookmarks>'
                    }
                }
            })
        ;
    })
    .directive('categories', categoriesDirective);
