import {Popup} from './Popup.js';

export class PopupWithSubmit extends Popup {
  constructor(popupSelector, {handleDeleteCard}) {
    super(popupSelector);
    this.handleDeleteCard = handleDeleteCard;
    
    this._handleEscClose = this._handleEscClose.bind(this)
    this._form = this._popup.querySelector('.popup__container');
    
  
  }

  open(cardId, cardEvent) {
    super.open();
    
    this._cardId = cardId;
  }

  getCardId() {
    
    return this._cardId;
  }

     setEventListeners(){
      super.setEventListeners()
  
  
     this._form.addEventListener('submit', (evt) => this.handleDeleteCard(evt));
  
  };
  
 

}