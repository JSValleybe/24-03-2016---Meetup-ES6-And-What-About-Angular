class BookmarksController {
  constructor(BookmarksModel, CategoriesModel, $stateParams) {
    CategoriesModel.setCurrentCategory($stateParams.category);

    BookmarksModel.getBookmarks()
        .then((bookmarks) => {
            this.bookmarks = bookmarks;
        });

    this.getCurrentCategory = CategoriesModel.getCurrentCategory;
    this.getCurrentCategoryName = CategoriesModel.getCurrentCategoryName;
    this.deleteBookmark = BookmarksModel.deleteBookmark;
  }
}

BookmarksController.$inject = ['BookmarksModel', 'CategoriesModel', '$stateParams'];

export { BookmarksController };
