import _ from 'lodash';

const bookmarks = ($http, $q) => {
    const URLS = { FETCH: 'data/bookmarks.json' };
    let bookmarks;

    // Private helper functions
    const _extract = (result) => {
        return result.data;
    };

    const _cacheBookmarks = (result) => {
        bookmarks = _extract(result);
        return bookmarks;
    };

    const _findBookmark = (bookmarkId) => {
        return _.find(bookmarks, (bookmark) => {
            return bookmark.id === parseInt(bookmarkId, 10);
        });
    };

    // Public functions
    const getBookmarks = () => {
        return (bookmarks) ? $q.when(bookmarks) : $http.get(URLS.FETCH).then(_cacheBookmarks);
    };

    const getBookmarkById = (bookmarkId) => {
        const deferred = $q.defer();
        if (bookmarks) {
            deferred.resolve(_findBookmark(bookmarkId));
        } else {
            getBookmarks().then(() => {
                deferred.resolve(_findBookmark(bookmarkId));
            });
        }
        return deferred.promise;
    };

    const createBookmark = (bookmark) => {
        bookmark.id = bookmarks.length;
        bookmarks.push(bookmark);
    };

    const updateBookmark = (bookmark) => {
        const index = _.findIndex(bookmarks, (b) => {
            return b.id === bookmark.id;
        });

        bookmarks[index] = bookmark;
    };

    const deleteBookmark = (bookmark) => {
        _.remove(bookmarks, (b) => {
            return b.id === bookmark.id;
        });
    };

    // Export public functions
    return { getBookmarks, createBookmark, updateBookmark, deleteBookmark, getBookmarkById };
};

// Inject dependencies
bookmarks.$inject = ['$http', '$q'];

export default bookmarks;
