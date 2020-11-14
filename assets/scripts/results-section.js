'use strict';

class resultsSection extends Section {
  render() {
    const resultsSectionEl = this.createSection(['results-section']);
    resultsSectionEl.innerHTML = `
      <div class="col-sm-8 col-sm-offset-2">
        <ul class="nav nav-tabs" role="tablist">
          <li role="presentation" class="active">
            <a href="#results" id="results-tab" aria-controls="primaryResultsList" role="tab" data-toggle="tab">Results</a>
          </li>
          <li role="presentation">
            <a href="#recentSearches" id="recent-tab" aria-controls="recentSearchesList" role="tab" data-toggle="tab">Recent Searches</a>
          </li>
        </ul>

        <div class="tab-content">
          <!-- Results panel -->
          <div id="results" role="tabpanel" class="tab-pane active">
            <div class="row">
              <div id="primary-results" class="col-xs-12">
                <ul id="primary-results-list" class="list-group"></ul>
              </div>
            </div>
            <div class="row">
              <div id="secondary-results" class="col-xs-12">
                <p class="text-center">Other Possible Results</p>
                <ul id="secondary-results-list" class="list-group"></ul>
              </div>
            </div>
          </div>
          <!-- Recent Searches panel -->
          <div id="recent-searches" role="tabpanel" class="tab-pane" >
            <ul id="recent-searches-list" class="list-group"></ul>
          </div>
        </div>
      </div>
    `;

    return resultsSectionEl;
  }
}