// Import vendor modules
import angular from 'angular';
import 'angular-ui-router';

// Import components
import { categories } from './categories/categories';
import { bookmarks } from './categories/bookmarks/bookmarks';

// Import service models
import { models } from './common/models/models';

//Import css
import '../assets/css/normalize.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../assets/css/animations.css';
import '../assets/css/eggly.css';

angular.module('Eggly', [
    'ui.router',
    categories.name,
    bookmarks.name,
    models.name,
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            //abstract state serves as a PLACEHOLDER or NAMESPACE for application states
            .state('eggly', {
                url: '',
                abstract: true
            })
        ;

        $urlRouterProvider.otherwise('/');
    })
;
