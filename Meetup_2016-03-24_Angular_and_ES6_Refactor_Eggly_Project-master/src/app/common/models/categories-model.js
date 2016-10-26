import _ from 'lodash';

const categories = function ($http, $q) {
    const URLS = { FETCH: 'data/categories.json' };
    let categories;
    let currentCategory;

    // Internal private methods
    const _extract = (result) => {
        return result.data;
    };

    const _cacheCategories = (result) => {
        categories = _extract(result);
        return categories;
    };

    // Public methods
    const getCategories = () => {
        return (categories) ? $q.when(categories) : $http.get(URLS.FETCH).then(_cacheCategories);
    };

    const setCurrentCategory = (category) => {
        return getCategoryByName(category).then((category) => { //eslint-disable-line
            currentCategory = category;
        });
    };

    const getCurrentCategory = () => {
        return currentCategory;
    };

    const getCurrentCategoryName = () => {
        return currentCategory ? currentCategory.name : '';
    };

    const getCategoryByName = (categoryName) => {
        const deferred = $q.defer();

        function findCategory() {
            return _.find(categories, (c) => {
                return c.name === categoryName;
            });
        }

        if (categories) {
            deferred.resolve(findCategory());
        } else {
            getCategories()
                .then(function() {
                    deferred.resolve(findCategory());
                });
        }

        return deferred.promise;
    };
    // Export public functions
    return { getCategories, setCurrentCategory, getCurrentCategory, getCurrentCategoryName, getCategoryByName };
};

// Inject dependencies
categories.$inject = ['$http', '$q'];

export default categories;
