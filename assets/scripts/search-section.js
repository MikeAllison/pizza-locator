'use strict';

class SearchSection extends Section {
  executeKeywordSearch() {
    App.keywordSearch();
  }

  executeLocationSearch() {
    App.locationSearch();
  }
    
  render() {
    const searchSectionEL = this.createSection(['search']);
    searchSectionEL.innerHTML = `
      <div class="col-sm-7 col-sm-offset-2 search-col">
        <input type="text" id="city-state-tbox" class="form-control">
      </div>
      <div class="col-sm-1">
        <button type="button" id="search-btn" class="btn btn-primary"><span class="icon-search"></span></button>
      </div>
      <div class="col-xs-12 text-center">
        <button type="button" id="location-btn" class="btn btn-default">Use My Location</button>
      </div>
    `;

    const buttons = searchSectionEL.querySelectorAll('button');
    buttons[0].addEventListener('click', this.executeKeywordSearch);
    buttons[1].addEventListener('click', this.executeLocationSearch);

    return searchSectionEL;
  }
}