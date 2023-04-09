export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
  }
  open() {
    //open modals
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keyup", this._handleEscapeUp);
  }
  close() {
    //close modals
    this._popupElement.classList.remove(".modal_opened");
    document.removeEventListener("keyup", this._handleEscapeUp);
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
    //handle event listeners
    this._popupElement
      .querySelector(".modal__close")
      .addEventListener("click", () => this.close());
    this._popupElement.addEventListener("mousedown", (e) =>
      this._handleOverlay(e)
    );
  }
}
