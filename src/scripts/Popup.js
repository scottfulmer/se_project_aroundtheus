import { closeModal, openModal } from "./Utils.js";
import  handleEscapeUp  from "./Utils.js";

export default class Popup {
  constructor({ popupSelector }) {
    this._popupElement = document.querySelector(popupSelector);
    this._closeModal = document.querySelector(closeModal);
    this._openModal = document.querySelector(openModal);
    this._handleEscapeUp = this._handleEscapeUp.bind(this);
  }
  open() {
    //open modals
this._popupElement.classList.add('modal_opened');
document.addEventListener('click', this._openModal);
  }
  close() {
    //close modals
   this._popupElement.classList.remove('.modal_opened');
   document.removeEventListener('keyup', this._handleEscapeUp);
    }

    function closeModalOnRemoteClick(evt) {
      if (evt.target === evt.currentTarget) {
        closeModal(evt.target);
      }
    }
  }
  _handleEsccapeUp() {
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
