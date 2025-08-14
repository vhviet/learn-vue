const pagesKey = "pages";

export default {
  getAllPages() {
    const pagesJson = localStorage.getItem(pagesKey);
    return pagesJson ? JSON.parse(pagesJson) : [];
  },

  getSinglePage(index) {
    const pagesJson = localStorage.getItem(pagesKey);
    const pagesStore = pagesJson ? JSON.parse(pagesJson) : [];
    return pagesStore[index];
  },
};
