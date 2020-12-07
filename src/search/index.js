class Search {
  constructor() {
    this.searchButton = document.getElementById('searchButton');
    this.inputSearch = document.getElementById('inputSearch');
    this.registerEvents();
  }

  registerEvents() {
    this.searchButton.onclick = () => this.searchTech();
  }
  searchTech() {
    var frontDiv = document
      .getElementById('frontDiv')
      .querySelectorAll(`[data-tech]`);

    for (var i = 0; i < frontDiv.length; i++) {
      if (frontDiv[i].dataset.tech !== this.inputSearch.value) {
        frontDiv[i].classList.add('d-none');
      } else {
        frontDiv[i].classList.remove('d-none');
      }
    }
    var backDiv = document
      .getElementById('backDiv')
      .querySelectorAll(`[data-tech]`);

    for (var i = 0; i < backDiv.length; i++) {
      if (backDiv[i].dataset.tech !== this.inputSearch.value) {
        backDiv[i].classList.add('d-none');
      } else {
        backDiv[i].classList.remove('d-none');
      }
    }

    this.inputSearch.value = '';
  }
}

new Search();
export default Search;
