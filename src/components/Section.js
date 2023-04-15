export default class Section {
  constructor({ items, renderer }, cardListEl) {
    this._items = items;
    this._renderer = renderer;
    this.itemsList = cardListEl;
  }
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
  addItem(item) {
    this.itemsList.append(item);
  }
}
