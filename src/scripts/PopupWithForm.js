import {Popup} from './Popup.js';


export class PopupWithForm extends Popup {
  constructor(popupSelector, {handleFormSubmit}) {
    super(popupSelector);
    this.handleFormSubmit = handleFormSubmit;
    
    this._handleEscClose = this._handleEscClose.bind(this)
    this._form = this._popup.querySelector('.popup__container');
    this._formInputs = Array.from(this._popup.querySelectorAll('.popup__input'));
  
  }

  getInput(){
    
    
    const inputList = {};
    this._formInputs.forEach(item => {
      inputList[item.id] = item;
  })
  
    return inputList
  }


  _getInputValues(){
    
    
    const inputValues = {};
    this._formInputs.forEach(item => {
      inputValues[item.id] = item.value;
  })
  
    return inputValues
  }

    setEventListeners(){
      super.setEventListeners()
  
  
     this._form.addEventListener('submit', (evt) => this.handleFormSubmit(evt));
  
  };
  
    closePopup(){
      super.closePopup()
       
      
    }

}