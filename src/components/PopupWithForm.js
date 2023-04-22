import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
    this._formInput = this._popupElement.querySelectorAll(".modal__form-input");
  }

  _getInputValues() {
    const formValue = {};
    this._formInput.forEach((input) => {
      formValue[input.name] = input.value;
    });
    return this._formValue;
  }
  _handleSubmit = (e) => {
    e.preventDefault();
    this._handleFormSubmit(this._getInputValues());
    this.close();
  };
  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", this._handleSubmit);
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}
