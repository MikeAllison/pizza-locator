'use strict';

class App {
  static headerSection = new HeaderSection('Pizza Locator');
  static searchSection = new SearchSection();
  static alertSection = new AlertSection();
  static resultsSection = new resultsSection();
  static progressModal = new ProgressModal();
  static placeModal = new PlaceModal();
  static userLocation = null;

  static keywordSearch() {
    console.log('KEYWORD');
  }

  static locationSearch() {
    this.progressModal.show('Getting Location');

    App.getHtmlGeolocation().then((location => {
      this.userLocation = location;
    }));
  }

  static getHtmlGeolocation() {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject({ type: 'error', text: 'Sorry, geolocation is not supported in your browser.' });
        return;
      }

      var success = (position) => {
        resolve(position);
      };

      var error = () => {
        reject({ type: 'error', text: 'An error occurred. Please try again.' });
        return;
      };

      var options = { enableHighAccuracy: true };

      navigator.geolocation.getCurrentPosition(success, error, options);
    });
  }

  static init() {
    const app = document.getElementById('app');

    app.append(this.headerSection.render());
    app.append(this.searchSection.render());
    app.append(this.alertSection.render());
    app.append(this.resultsSection.render());
    app.append(this.progressModal.render());
    app.append(this.placeModal.render());
  }
}

App.init();
