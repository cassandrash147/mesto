import {Popup} from './Popup.js';


export class PopupWithForm extends Popup {
  constructor(popupSelector, {handleFormSubmit}) {
    super(popupSelector);
    this.handleFormSubmit = handleFormSubmit;
    
    this._handleEscClose = this._handleEscClose.bind(this)
    this._form = this._popup.querySelector('.popup__container');
    
  
  }

  getInputValues(){
    const inputList =  Array.from(this._popup.querySelectorAll('.popup__input'));
    
    const formValues = {};
    inputList.forEach(item => {
    formValues[item.name] = item.value;
    
    
  })
 
    return formValues
  }


      setEventListeners(){
      super.setEventListeners()
  
  
     this._form.addEventListener('submit', () => this.handleFormSubmit(this.getInputValues()));
  
  };
  

}