import { closeModal, openModal } from "./Utils.js";

export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeModal = document.querySelector(closeModal);
    this._openModal = document.querySelector(openModal);
  }
  open() {
    //open modals
    function openModal() {}
  }
  close() {
    //close modals
    function closeProfileModal() {
      closeModal(profileEditModal);
    }

    function closeModalOnRemoteClick(evt) {
      if (evt.target === evt.currentTarget) {
        closeModal(evt.target);
      }
    }
  }
  _handleEscClose() {
    //handle ESC key

    function handleEscapeUp(e) {
      if (e.key === "Escape") {
        const openedModal = document.querySelector(".modal_opened");
        closeModal(openedModal);
      }
    }
  }
  setEventListeners() {
    //handle event listeners
    profileEditClose.addEventListener("click", closeProfileModal);
    modalPreviewCloseBtn.addEventListener("click", () =>
      closeModal(previewModal)
    );
    addNewCardButton.addEventListener("click", () => openModal(addCardModal));
    addCardModalCloseButton.addEventListener("click", () =>
      closeModal(addCardModal)
    );
  }
}
