// enabling validation by calling enableValidation()
// pass all the settings on call

function showInputError(
  formElement,
  inputElement,
  { inputErrorClass, errorClass }
) {
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  inputElement.classList.add(inputErrorClass);
  errorMessageElement.textContent = inputElement.validationMessage;
  errorMessageElement.classList.add(errorClass);
}
function hideInputError(
  formElement,
  inputElement,
  { inputErrorClass, errorClass }
) {
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  inputElement.classList.remove(inputErrorClass);
  errorMessageElement.textContent = "";
  errorMessageElement.classList.remove(errorClass);
}
function checkInputValidity(formElement, inputElement, options) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, options);
  } else {
    hideInputError(formElement, inputElement, options);
    toggleButtonState(inputElement, submitButton);
  }
}
function toggleButtonState(
  inputElements,
  submitButton,
  { inactiveButtonClass }
) {
  let foundInvalid = false;
  inputElements.forEach(input, () => {
    if (inputElement.validity.valid) {
      foundInvalid = true;
    }
  });
  if (foundInvalid) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.disabled = true;
  } else {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.disabled = false;
  }
}

function setEventListeners(formElement, options) {
  const { inputSelector } = options;
  const inputElements = [...formElement.querySelectorAll(inputSelector)];
  const submitButton = formElement.querySelector(".modal__button");

  inputElements.forEach((inputElement) => {
    inputElement.addEventListener("input", (e) => {});
    checkInputValidity(formElement, inputElement, options);
    toggleButtonState(inputElements, submitButton, options);
  });
}

function enableValidation(options) {
  const formElements = [...document.querySelectorAll(options.formSelector)];
  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    setEventListeners(formElement, options);
    //look for all inputs inside of form
    //loop through all inputs to see if all are valid
    //if input is not valid
    //grab validation message
    //add error class to input
    //display error message
    //disable button
    //if all inputs are valid should enable button
    //reset error messages
  });
}

const config = {
  formSelector: ".modal__form",
  inputSelector: ".modal__form-input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

enableValidation(config);
