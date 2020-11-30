import {Popup} from './Popup.js';


export class PopupWithForm extends Popup {
  constructor(popupSelector, {handleFormSubmit}) {
    super(popupSelector);
    this.handleFormSubmit = handleFormSubmit;
    
    this._handleEscClose = this._handleEscClose.bind(this)
    this._formElement = this._popup.querySelector('.popup__container');
  }

  _getInputValues(){
    const formInputs = Array.from(this._popup.querySelectorAll('.popup__input'))
    return formInputs
  }

    setEventListeners(){
    this._popup.addEventListener('click', (evt) => 
    {if((evt.target.classList.contains('popup')) || (evt.target.classList.contains('popup__close'))){
      this.closePopup()
      
    }})
  
  
     this._formElement.addEventListener('submit', (evt) => this.handleFormSubmit(evt));
  
  };
  
    closePopup(){
      this._popup.classList.remove('popup_opened');
      document.removeEventListener('keydown', this._handleEscClose);
      this._getInputValues()[0].value = '';
      this._getInputValues()[1].value = '';
    }
  

}