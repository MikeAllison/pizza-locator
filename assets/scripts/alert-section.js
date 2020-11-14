'use strict';

class AlertSection extends Section {
  render() {
    const alertSectionEl = this.createSection(['alert-section']);
    alertSectionEl.innerHTML = `
      <div class="col-sm-8 col-sm-offset-2 alert-col">
        <div id="alert" class="alert alert-danger text-center" role="alert">
          Red Alert!
        </div>
      </div>
    `;

    return alertSectionEl;
  }
}