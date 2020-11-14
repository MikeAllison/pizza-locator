'use strict';

class Modal {
  createModal(idVal) {
    const outerDivEl = document.createElement('div');
    outerDivEl.classList.add('modal', 'fade');
    outerDivEl.setAttribute('id', idVal);
    outerDivEl.setAttribute('tabindex', '-1');
    outerDivEl.setAttribute('role', 'dialog');

    return outerDivEl;
  }
}