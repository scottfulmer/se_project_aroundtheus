/* -------------------------------------------------------------------------- */
/*                                  Card Data                                 */
/* -------------------------------------------------------------------------- */
export const initialCards = [
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
/*                                  Elements                                  */
/* -------------------------------------------------------------------------- */
export const addCardModal = document.querySelector("#add-card-modal");
export const profileEditModal = document.querySelector("#profile-edit-modal");
export const profileEditButton = document.querySelector("#profile-edit-button");
export const addNewCardButton = document.querySelector(".profile__add-button");
export const modal = document.querySelectorAll(".modal");
export const profileEditForm = profileEditModal.querySelector(".modal__form");
export const profileTitleInput = document.querySelector("#profile-title-input");
export const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
export const addCardFormElement = addCardModal.querySelector("#add-card-form");
export const profileTitle = document.querySelector(".profile__title");
export const cardTitleInput = addCardFormElement.querySelector(
  ".modal__input-type-title"
);

export const cardUrlInput = addCardFormElement.querySelector(
  ".modal__input-type-url"
);

export const cardListEl = document.querySelector(".cards__list");
export const cardSelector = "#card-template";
export const previewModalFooter = document.querySelector(".modal__footer");
export const previewImageModal = document.querySelector(
  ".modal__preview-image"
);
export const profileEditClose = profileEditModal.querySelector(
  "#profile-edit-close"
);
export const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

export const addCardModalCloseButton =
  addCardModal.querySelector("#card__close-modal");

export const profileDescription = document.querySelector(
  ".profile__description"
);

export const previewModal = document.querySelector("#preview-image-modal");

export const modalPreviewCloseBtn = document.querySelector(
  "#preview-close-button"
);

export const validationSettings = {
  inputSelector: ".modal__form-input",
  submitButton: ".modal__button",
  inactiveButtonClass: "modal__button_inactive",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
