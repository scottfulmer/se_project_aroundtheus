const previewModal = document.querySelector("#preview-image-modal");
const previewImageModal = document.querySelector(".modal__preview-image");
const previewModalFooter = document.querySelector(".modal__footer");

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keyup", handleEscapeUp);

  modal.addEventListener("mousedown", closeModalOnRemoteClick);
}
function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keyup", handleEscapeUp);

  modal.removeEventListener("mousedown", closeModalOnRemoteClick);
}
function handleEscapeUp(e) {
  if (e.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    closeModal(openedModal);
  }
}

class Card {
  constructor(cardData, cardSelector) {
    this._name = cardData.name;
    this._link = cardData.link;

    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => this._handleLikeIcon());

    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", this._handleDeleteCard);

    // deleteButton.addEventListener("click", () => {
    //   cardElement.remove();

    // });
  }
  _handleLikeIcon() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }
  _handleDeleteCard() {
    this._element.querySelector(".card__delete-button").remove();
  }

  _handlePreviewPicture() {
    this._element.querySelector();

    cardImageEl.addEventListener("click", () => {
      openModal(previewModal);
      previewImageModal.src = cardData.link;
      previewModalFooter.textContent = cardData.name;
      previewImageModal.alt = cardData.name;
    });
  }

  getView() {
    this._element = this._getTemplate();
    this._setEventListeners();
  }
}

export default Card;
