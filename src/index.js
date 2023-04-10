import "./pages/index.css";
import FormValidator from "./scripts/components/FormValidator.js";
import Card from "./scripts/components/Card.js";
import { openModal, closeModal } from "./scripts/components/Utils.js";
import Section from "./scripts/components/Section.js";
import Popup from "./scripts/components/Popup.js";
import PopupWithForm from "./scripts/components/PopupWithForm.js";
import PopupWithImages from "./scripts/components/PopupWithImages.js";
import UserInfo from "./scripts/components/UserInfo.js";
import {
  initialCards,
  validationSettings,
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
} from "./utils/constants.js";

/* -------------------------------------------------------------------------- */
/*                                 Validation                                 */
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
/*                              New Card Section                              */
/* -------------------------------------------------------------------------- */

const newPreviewModal = new PopupWithImages({
  popupSelector: ".preview-image-modal",
});
newPreviewModal.setEventListeners();

const createCard = (cardData) => {
  const card = new Card(cardData, "#card-template", (name, link) => {
    newPreviewModal.open(name, link);
  });
  return card.getView();
};

const newCardSection = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const card = createCard(cardData);
      newCardSection.addItem(card);
    },
  },
  ".cards__list"
);
newCardSection.renderItems();

const newUserInfo = new UserInfo({
  nameSelector: ".profile__title",
  aboutSelector: ".profile__description",
});

const newProfileModal = new PopupWithForm(".profile-edit-modal", (values) => {
  newUserInfo.setUserInfo(values.name, values.description);
});

const newAddCardModal = new PopupWithForm(".add-card-modal", (input) => {
  const card = createCard({ name: input.title, link: input.link });
  newCardSection.addItem(card);
});

/* -------------------------------------------------------------------------- */
/*                                   Buttons                                   */
/* -------------------------------------------------------------------------- */

const addCardModalCloseButton =
  addCardModal.querySelector("#card__close-modal");
/* -------------------------------------------------------------------------- */
/*                                  Form Data                                 */
/* -------------------------------------------------------------------------- */
const profileDescription = document.querySelector(".profile__description");

/* -------------------------------------------------------------------------- */
/*                                Preview Modal                               */
/* -------------------------------------------------------------------------- */
const previewModal = document.querySelector("#preview-image-modal");
// const previewImageModal = document.querySelector(".modal__preview-image");
// const previewModalFooter = document.querySelector(".modal__footer");
const modalPreviewCloseBtn = document.querySelector("#preview-close-button");
/* -------------------------------------------------------------------------- */
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */
const profileEditClose = profileEditModal.querySelector("#profile-edit-close");

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

const renderCard = (cardData, wrapper) => {
  const card = new Card(cardData, cardSelector);
  wrapper.prepend(card.getView());
};

/* -------------------------------------------------------------------------- */
/*                               Event Handlers                               */
/* -------------------------------------------------------------------------- */
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileDescription.textContent = profileDescriptionInput.value;
  closeProfileModal();
}
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
// }
/* -------------------------------------------------------------------------- */
/*                               Event Listener                               */
/* -------------------------------------------------------------------------- */
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  openModal(profileEditModal);
});
// addCardFormElement.addEventListener("submit", handleAddCardFormSubmit);
addNewCardButton.addEventListener("click", () => openModal(addCardModal));
addCardModalCloseButton.addEventListener("click", () =>
  closeModal(addCardModal)
);

// function closeModalOnRemoteClick(evt) {
//   if (evt.target === evt.currentTarget) {
//     closeModal(evt.target);
//   }
// }

profileEditClose.addEventListener("click", closeProfileModal);

profileEditForm.addEventListener("submit", handleProfileEditSubmit);

modalPreviewCloseBtn.addEventListener("click", () => closeModal(previewModal));

initialCards.forEach((cardData) => renderCard(cardData, cardListEl));
