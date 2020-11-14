'use strict';

class PlaceModal extends Modal {
  render() {
    const placeModalDiv = this.createModal('place-modal');
    placeModalDiv.innerHTML = `
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header text-center">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 id="place=modal-title">Loading</h4>
          </div>
          <div id="place-modal-body" class="modal-body text-center">
            <p><strong class="modal-field">Open Now:</strong><span id="place-modal-open-now"></span></p>
            <p><strong class="modal-field">Website:</strong><a href="" id="place-modal-website" target="_blank"></a></p>
            <p><strong class="modal-field">Address:</strong><a href="" id="place-modal-address" target="_blank"></a></p>
            <p><strong class="modal-field">Phone Number:</strong><a href="" id="place-modal-phone-num"></a></p>
            <p><strong>Distance:</strong></p>
            <div id="place-modal-distance-warning"></div>
            <div>
              <ul class="list-unstyled modal-distance-info">
                <li><strong>Driving:</strong><span id="place-modal-driving-info"></span></li>
                <li><strong>Transit:</strong><span id="place-modal-transit-info"></span></li>
              </ul>
            </div>
            <div>
              <p><strong>Hours:</strong></p>
              <ul id="place-modal-hours-open" class="list-unstyled modal-hours-open"></ul>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    `;
    
    return placeModalDiv;
  }
}