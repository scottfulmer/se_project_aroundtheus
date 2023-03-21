class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._inputSelector = settings.inputSelector;
    this._submitButton = settings.submitButton;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
    this._form = formElement;
  }

  _showInputError(inputElement) {
    const errorMessageElement = formElement.querySelector(
      `#${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorMessageElement.textContent = "";
    errorMessageElement.classList.remove(this._errorClass);
  }

  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputElements)) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.disabled = false;
    }
  }
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      showInputError(inputElement);
    } else {
      hideInputError(inputElement);
    }
  }

  _setEventListeners() {
    this._inputElements = [...this._form.querySelectorAll(this._inputSelector)];
    this._submitButton = this._form.querySelector(this._submitButton);
    this._toggleButtonState(
      this._inputElements,
      this._submitButton,
      this._inputSelector
    );

    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", (e) => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(
          this._inputElements,
          this._submitButton,
          this._inputSelector
        );
      });
    });
  }

  resetValidation() {
    this._toggleButtonState();
  }

  enableValidation() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;
