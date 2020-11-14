'use strict';

class Section {
  // Classes must be passed as an array
  createSection(cssClasses) {
    const sectionEl = document.createElement('div');
    sectionEl.classList.add('row');

    if (cssClasses) {
      for (const cssClass of cssClasses) {
        sectionEl.classList.add(cssClass);
      };
    }

    return sectionEl;
  }
}