'use strict';

class ProgressModal extends Modal {
  update(percent, message) {
    $('#progress-status').text(message);
  }
  
  show(message) {
    $('#progress-status').text(message);
    $('#progress-modal').modal('show');
  }

  hide() {
    $('#progress-modal').modal('hide');
  }

  render() {
    const progressModalDiv = this.createModal('progress-modal');
    progressModalDiv.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content">
          <div id="progress-modal-body" class="modal-body text-center">
            <p id="progress-status" class=text-center>Test</p>
            <div class="progress">
              <div id="progress-bar" class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
                <span class="sr-only"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    return progressModalDiv;
  }
}