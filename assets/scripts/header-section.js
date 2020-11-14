'use strict';

class HeaderSection extends Section {
  constructor(title) {
    super();
    this.title = title || 'Loading'
  }

  render() {
    const headerSectionEl = this.createSection();
    headerSectionEl.innerHTML = `
      <div class="col-xs-12">
        <div class="heading text-center">
          <h3 id="heading">${this.title}</h3>
          <h5 class="city-state-heading">Enter a city, state</h5>
        </div>
      </div>
    `;
    
    return headerSectionEl;
  }
}