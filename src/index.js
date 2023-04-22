/* -------------------------------------------------------------------------- */
/*                                   Imports                                  */
/* -------------------------------------------------------------------------- */

import "./pages/index.css";
import FormValidator from "./components/FormValidator.js";
import Card from "./components/Card.js";
// import { openModal, closeModal } from "./utils/utils.js";
import Popup from "./components/Popup.js";
import PopupWithImages from "./components/PopupWithImages.js";
import PopupWithForm from "./components/PopupWithForm.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import {
  initialCards,
  addCardModal,
  profileEditModal,
  profileEditButton,
  addNewCardButton,
  modal,
  profileEditForm,
  profileTitleInput,
  profileDescriptionInput,
  addCardFormElement,
  profileTitle,
  cardTitleInput,
  cardUrlInput,
  cardListEl,
  cardSelector,
  previewModalFooter,
  previewImageModal,
  profileEditClose,
  cardTemplate,
  addCardModalCloseButton,
  profileDescription,
  previewModal,
  modalPreviewCloseBtn,
  validationSettings,
} from "./utils/constants.js";

/* -------------------------------------------------------------------------- */
/*                               Form Validator                               */
/* -------------------------------------------------------------------------- */

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
/*                                New Functions                               */
/* -------------------------------------------------------------------------- */

const popupImage = new PopupWithImages(".modal__preview-image", () => {});
popupImage.open();
popupImage.close();
const popupForm = new PopupWithForm("#add-card-modal", () => {});
popupForm.open();
popupForm.close();

const section = new Section(
  {
    initialCards,
    renderer: (cardData) => {
      section.addItem(cardData);
    },
  },
  "cards__list"
);

const userInfo = new UserInfo();

const card = new Card();
card.getView();

/* -------------------------------------------------------------------------- */
/*                           New Event Listeners                              */
/* -------------------------------------------------------------------------- */
// addNewCardButton.addEventListener("click", () => {
//   addCardModal.open();
// });
// profileEditButton.addEventListener("click", () => {
//   profileEditModal.open();
// });
popupForm.setEventListeners();
popupImage.setEventListeners();

/* -------------------------------------------------------------------------- */
/*                                  Old Code                                  */
/* -------------------------------------------------------------------------- */

// function getCardElement(cardData) {
//   const cardElement = cardTemplate.cloneNode(true);

//   const cardImageEl = cardElement.querySelector(".card__image");

//   const cardTitleEl = cardElement.querySelector(".card__title");

//   const likeButton = cardElement.querySelector(".card__like-button");

//   const deleteButton = cardElement.querySelector(".card__delete-button");

//   likeButton.addEventListener("click", () => {
//     likeButton.classList.toggle("card__like-button_active");
//   });

//   deleteButton.addEventListener("click", () => {
//     cardElement.remove();
//   });

//   cardImageEl.addEventListener("click", () => {
//     openModal(previewModal);

//     previewImageModal.src = cardData.link;

//     previewModalFooter.textContent = cardData.name;

//     previewImageModal.alt = cardData.name;
//   });

//   cardTitleEl.alt = cardData.name;

//   cardImageEl.src = cardData.link;

//   cardTitleEl.textContent = cardData.name;

//   return cardElement;
// }
// const renderCard = (cardData, wrapper) => {
//   const card = new Card(cardData, cardSelector, () => {
//     previewImageModal.src = cardData.link;
//     previewModalFooter.textContent = cardData.name;
//     previewImageModal.alt = cardData.name;

//     openModal(previewModal);
//   });

//   wrapper.prepend(card.getView());
// };

// function handleFormSubmit(e) {
//   e.preventDefault();

//   profileTitle.textContent = profileTitleInput.value;

//   profileDescription.textContent = profileDescriptionInput.value;

//   closeProfileModal();
// }

// function handleAddCardFormSubmit(e) {
//   e.preventDefault();

//   const name = cardTitleInput.value;

//   const link = cardUrlInput.value;

//   const cardFormSubmitButton =
//     addCardFormElement.querySelector(".modal__button");

//   renderCard({ name, link }, cardListEl);

//   cardTitleInput.value = "";

//   cardUrlInput.value = "";

//   addFormValidator.resetValidation();

//   closeModal(addCardModal);

/* -------------------------------------------------------------------------- */

/*                               Event Listener                               */

/* -------------------------------------------------------------------------- */

// profileEditButton.addEventListener("click", () => {
//   profileTitleInput.value = profileTitle.textContent;

//   profileDescriptionInput.value = profileDescription.textContent;

//   openModal(profileEditModal);
// });

// addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);

// addNewCardButton.addEventListener("click", () => openModal(addCardModal));

// addCardModalCloseButton.addEventListener("click", () =>
//   closeModal(addCardModal)
// );

// // function closeModalOnRemoteClick(evt) {
// //   if (evt.target === evt.currentTarget) {
// //     closeModal(evt.target);
// //   }
// // }

// profileEditClose.addEventListener("click", closeProfileModal);

// profileEditForm.addEventListener("submit", handleFormSubmit);

// modalPreviewCloseBtn.addEventListener("click", () => closeModal(previewModal));

// initialCards.forEach((cardData) => renderCard(cardData, cardListEl));
