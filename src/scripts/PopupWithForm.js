import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupForm = this._popupElement.querySelector(".add-card-form");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {}
  setEventListeners() {}
  close() {
    this._popupForm.reset();
    super.close();
  }
}

const addCardModal = new PopupWithForm("#add-card-modal", () => {});
addCardModal.open();

addCardModal.close();

cardImageEl.addEventListener("click", () => {
  openModal(previewModal);
  previewImageModal.src = cardData.link;
  previewModalFooter.textContent = cardData.name;
  previewImageModal.alt = cardData.name;
});
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});
