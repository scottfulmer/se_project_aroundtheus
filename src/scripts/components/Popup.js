export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }
  open() {
    //open modals
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keyup", this._handleEscapeUp);
    document.addEventListener("mousedown", this._handleOverlay);
  }
  close() {
    //close modals
    this._popupElement.classList.remove(".modal_opened");
    document.removeEventListener("keyup", this._handleEscapeUp);
    document.removeEventListener("mousedown", this._handleOverlay);
  }

  _handleEsccapeUp() {
    //handle ESC key
    if (e.key === "Escape") {
      this.close();
    }
  }
  _handleOverlay(e) {
    if (e.target.classList.contains("modal__opened")) {
      this.close();
    }
  }
  setEventListeners() {
    this._popupElement.addEventListener("click", (e) => {
      if (e.target.classList.contains(".modal__close")) {
        this.close();
      }
    });
  }
}
