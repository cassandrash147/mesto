export class Section {

  constructor({renderer}, containerSelector) {
   
    this.renderer = renderer;
    this._container = containerSelector;
  }

  renderItems(items, userId){
    items.forEach(item => {
      this.renderer(item, userId);
    });
  }

  
  addItemAppend(element){
    this._container.append(element);
  }

  addItemPrepend(element){
    this._container.prepend(element);
  }
}


