class Utils {
  constructor(openModals, closeModals) {
    this._addCardModal = openModals.addCardModal;
    this._addCardModalCloseButton = closeModals.addCardModalCloseButton;
    this._addNewCardButton = openModals.addNewCardButton;
    this._profileEditClose = closeModals.profileEditClose;
  }
  _closeProfileModal() {
    closeModal(profileEditModal);
  }

  _handleEscapeUp() {
    function handleEscapeUp(e) {
      if (e.key === "Escape") {
        const openedModal = document.querySelector(".modal_opened");
        closeModal(openedModal);
      }
    }
  }
  _remoteClick() {
    function closeModalOnRemoteClick(evt) {
      if (evt.target === evt.currentTarget) {
        closeModal(evt.target);
      }
    }
  }

  _handleCloseModal() {
    function closeModal(modal) {
      modal.classList.remove("modal_opened");
      document.removeEventListener("keyup", handleEscapeUp);

      modal.removeEventListener("mousedown", closeModalOnRemoteClick);
    }
  }
  _handleOpenModal() {
    function openModal(modal) {
      modal.classList.add("modal_opened");
      document.addEventListener("keyup", handleEscapeUp);

      modal.addEventListener("mousedown", closeModalOnRemoteClick);
    }
  }

  _setEventListeners() {}
}

export default Utils;
