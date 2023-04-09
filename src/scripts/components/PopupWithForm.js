import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".add-card-form");
    this._handleFormSubmit = handleFormSubmit;
    this._formInput - this._popupElement.querySelectorAll(".modal__form-input");
  }

  _getInputValues() {
    this._formValue = {};
    this._formInput.forEach((input) => {
      this._formValue[input.name] = input.value;
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
  setInputValues(cardData) {
    this._formInput.forEach((input) => {
      input.value = cardData[input.name];
    });
  }
  close() {
    this._popupForm.reset();
    super.close();
  }
}
