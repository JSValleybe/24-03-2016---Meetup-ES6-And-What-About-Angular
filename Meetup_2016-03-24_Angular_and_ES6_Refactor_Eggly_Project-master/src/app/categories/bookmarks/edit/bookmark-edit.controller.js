import angular from 'angular';

class BookmarksEditController {
  constructor(BookmarksModel, $state, $stateParams) {
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.BookmarksModel = BookmarksModel;

    this.BookmarksModel.getBookmarkById($stateParams.bookmarkId)
        .then((bookmark) => {
            if (bookmark) {
                this.bookmark = bookmark;
                this.editedBookmark = angular.copy(this.bookmark);
            } else {
                this.returnToBookmarks();
            }
        });
  }

  updateBookmark() {
      this.bookmark = angular.copy(this.editedBookmark);
      this.BookmarksModel.updateBookmark(this.editedBookmark);
      this.returnToBookmarks();
  }

  returnToBookmarks() {
    this.$state.go('eggly.categories.bookmarks', {
        category: this.$stateParams.category
    });
  }

  cancelEditing() {
    this.returnToBookmarks();
  }
}

BookmarksEditController.$inject = ['BookmarksModel', '$state', '$stateParams'];

export { BookmarksEditController };
