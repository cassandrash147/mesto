import {Popup} from './Popup.js';

export class PopupWithSubmit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    
    this._handleEscClose = this._handleEscClose.bind(this)
    this._form = this._popup.querySelector('.popup__container');
  }

  open(cardId) {
    super.open();
    this._cardId = cardId;
  }

  getCardId() {
    return this._cardId;
  }

     setEventListeners(){
      super.setEventListeners()
      this._form.addEventListener('submit', (evt) => this._handleSubmitCallback(evt));
  };
  
  setSubmitAction(submitAction) {
    this._handleSubmitCallback = submitAction; // перезаписали на новый коллбэк
  }

}