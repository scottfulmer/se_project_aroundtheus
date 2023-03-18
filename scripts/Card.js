const previewModal = document.querySelector("#preview-image-modal");
const previewImageModal = document.querySelector(".modal__preview-image");
const previewModalFooter = document.querySelector(".modal__footer");

import { openModal, closeModal } from "./utils.js";

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

    this._element
      .querySelector(".card__image")
      .addEventListener("click", this._handlePreviewPicture);
  }
  _handleLikeIcon() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }
  _handleDeleteCard() {
    this._element.querySelector(".card__delete-button").remove(this);
  }

  _handlePreviewPicture() {
    // previewImageModal.src = cardData.link;
    // previewModalFooter.textContent = cardData.name;
    // previewImageModal.alt = cardData.name;

    openModal(previewModal);
  }

  getView() {
    this._element = this._getTemplate();
    this._element.querySelector(".card__title").textContent = this._name;
    this._element.querySelector(".card__image").src = this._link;
    this._setEventListeners();

    return this._element;
  }
}

export default Card;
