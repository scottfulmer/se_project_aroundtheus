export default class Section {
  constructor({ items, renderer }, cardListEl) {
    this._items = items;
    this._renderer = renderer;
    this._cardList = cardListEl;
  }
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
  addItem(item) {
    this._cardList.append(item);
  }
}
