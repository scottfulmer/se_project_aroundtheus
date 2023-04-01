import "./pages/index.css";

import FormValidator from "./scripts/FormValidator.js";
import Card from "./scripts/Card.js";
import { openModal, closeModal } from "./scripts/Utils.js";
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

/* -------------------------------------------------------------------------- */
/*                                   Buttons                                   */
/* -------------------------------------------------------------------------- */
const addCardModal = document.querySelector("#add-card-modal");

const profileEditButton = document.querySelector("#profile-edit-button");
const addCardModalCloseButton =
  addCardModal.querySelector("#card__close-modal");
const addNewCardButton = document.querySelector(".profile__add-button");
/* -------------------------------------------------------------------------- */
/*                                  Form Data                                 */
/* -------------------------------------------------------------------------- */
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileTitleInput = document.querySelector("#profile-title-input");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);

/* -------------------------------------------------------------------------- */
/*                                Preview Modal                               */
/* -------------------------------------------------------------------------- */
const previewModal = document.querySelector("#preview-image-modal");
const previewImageModal = document.querySelector(".modal__preview-image");
const previewModalFooter = document.querySelector(".modal__footer");
const modalPreviewCloseBtn = document.querySelector("#preview-close-button");
/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditClose = profileEditModal.querySelector("#profile-edit-close");
const profileEditForm = profileEditModal.querySelector(".modal__form");
const addCardFormElement = addCardModal.querySelector("#add-card-form");

const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

const cardTitleInput = addCardFormElement.querySelector(
  ".modal__input-type-title"
);
const cardUrlInput = addCardFormElement.querySelector(".modal__input-type-url");

const cardSelector = "#card-template";

/* -------------------------------------------------------------------------- */
/*                                  Functions                                 */
/* -------------------------------------------------------------------------- */

function closeProfileModal() {
  closeModal(profileEditModal);
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");
  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });
  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageEl.addEventListener("click", () => {
    openModal(previewModal);
    previewImageModal.src = cardData.link;
    previewModalFooter.textContent = cardData.name;
    previewImageModal.alt = cardData.name;
  });

  cardTitleEl.alt = cardData.name;
  cardImageEl.src = cardData.link;
  cardTitleEl.textContent = cardData.name;
  return cardElement;
}

const renderCard = (cardData, wrapper) => {
  const card = new Card(cardData, cardSelector);
  wrapper.prepend(card.getView());
};

/* -------------------------------------------------------------------------- */
/*                                 Validation                                 */
/* -------------------------------------------------------------------------- */

const validationSettings = {
  inputSelector: ".modal__form-input",
  submitButton: ".modal__button",
  inactiveButtonClass: "modal__button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);

const addFormValidator = new FormValidator(
  validationSettings,
  addCardFormElement
);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

/* -------------------------------------------------------------------------- */
/*                               Event Handlers                               */
/* -------------------------------------------------------------------------- */
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeProfileModal();
}
function handleAddCardFormSubmit(e) {
  e.preventDefault();
  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  const cardFormSubmitButton =
    addCardFormElement.querySelector(".modal__button");
  renderCard({ name, link }, cardListEl);
  cardTitleInput.value = "";
  cardUrlInput.value = "";
  addFormValidator.resetValidation();
  closeModal(addCardModal);
}
/* -------------------------------------------------------------------------- */
/*                               Event Listener                               */
/* -------------------------------------------------------------------------- */
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});
addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);
addNewCardButton.addEventListener("click", () => openModal(addCardModal));
addCardModalCloseButton.addEventListener("click", () =>
  closeModal(addCardModal)
);

function closeModalOnRemoteClick(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.target);
  }
}

profileEditClose.addEventListener("click", closeProfileModal);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

modalPreviewCloseBtn.addEventListener("click", () => closeModal(previewModal));

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));
