export default class Card {
  constructor({ name, link }, cardTemplate) {
    // cardSelector -> cardTemplateSelector
    this._name = name;
    this._link = link;
    this.cardTemplate = cardTemplate;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handledLikeIcon();
      });
    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this.handleDeleteCard();
      });
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handledLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  getView() {
    this._cardElement = document
      .querySelector("#card-template")
      .content.querySelector(".card")
      .cloneNode(true);
    //get the card view
    // set event listeners
    this._setEventListeners();
    // return element
  }
}
