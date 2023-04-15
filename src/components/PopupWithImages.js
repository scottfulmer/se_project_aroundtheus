import Popup from "./Popup.js";

export default class PopupWithImages extends Popup {
  constructor({ popupSelector }) {
    super({ popupSelector });
    this._popupFooter = this._popupElement.querySelector(".modal__footer");
    this._popupImage = this._popupElement.querySelector(
      ".modal__preview-image"
    );
  }

  open(name, link) {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupFooter.textContent = name;
    super.open();
  }
}
