import angular from 'angular';

class BookmarksCreateController {
  constructor(BookmarksModel, $state, $stateParams) {
    this.$state = $state;
    this.$stateParams = $stateParams;
    this.BookmarksModel = BookmarksModel;

    this.resetForm();
  }

  createBookmark() {
      this.BookmarksModel.createBookmark(this.newBookmark);
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

  resetForm() {
      this.newBookmark = {
          title: '',
          url: '',
          category: this.$stateParams.category
      };
  }
}

BookmarksCreateController.$inject = ['BookmarksModel', '$state', '$stateParams'];

export { BookmarksCreateController };
