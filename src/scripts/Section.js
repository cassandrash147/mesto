export class Section {

  constructor({items, renderer}, containerSelector) {
    this._renderedItems = items;
    this.renderer = renderer;
    this._container = containerSelector;
  }

  renderItems(){
    this._renderedItems.map(item => {
      this.renderer(item);
    });
  }

  
  addItem(element){
    this._container.append(element);
  }
}

