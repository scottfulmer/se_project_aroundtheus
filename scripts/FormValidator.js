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
    if (hasInvalidInput(this._inputElements)) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    } else {
      thiis._submitButton.classList.remove(this._inactiveButtonClass);
      thiis._submitButton.disabled = false;
    }
  }
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity() {
    if (!inputElement.validity.valid) {
      showInputError(this._form, inputElement, this._inputSelector);
    } else {
      hideInputError(this._form, inputElement, this._inputSelector);
    }
  }

  _setEventListeners() {
    this._inputElements = [this._form.querySelectorAll(this._inputSelector)];
    this._submitButton = this._form.querySelector(this._submitButton);
    toggleButtonState(
      this._inputElements,
      this._submitButton,
      this._inputSelector
    );

    this._inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", (e) => {
        checkInputValidity(this._form, inputElement, this._inputSelector);
        toggleButtonState(
          this._inputElements,
          this._submitButton,
          this._inputSelector
        );
      });
    });
  }

  enableValidation() {
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    // this._setEventListeners();
  }
}

export default FormValidator;
// _settings = {
//   formSelector: ".modal__form",
//   inputSelector: ".modal__form-input",
//   submitButton: ".modal__button",
//   inactiveButtonClass: "modal__button_inactive",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "popup__error_visible",
// };

//  const editFormValidator = new FormValidator(settings, editForm);
//  const addFormValidator = new FormValidator(settings, addForm);
