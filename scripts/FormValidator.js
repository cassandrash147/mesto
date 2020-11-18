import {FormsForValidation} from './data.js';


export class FormValidator {

  constructor(config, formSelector) {
    this._config = config;  
    this._formSelector = formSelector;
    this._form = document.querySelector(this._formSelector);
    this._inactiveButtonClass = this._config.inactiveButtonClass
    this._buttonElement = this._form.querySelector(`${this._config.submitButtonSelector}`);
  }

  _hideError = (form, input, inputErrorClass) =>{
    const errorElement = form.querySelector(`#${input.id}-error`);
    errorElement.textContent = '';
    input.classList.remove(`${inputErrorClass}`)
  };
  
  _showError = (form, input, inputErrorClass) =>{
    const errorElement = form.querySelector(`#${input.id}-error`);
    errorElement.textContent = input.validationMessage;
    input.classList.add(`${inputErrorClass}`)
  };

  _checkInputValidity = (form, input, inputErrorClass) => {
    if(input.checkValidity()){ 
      this._hideError(form, input, inputErrorClass)
    }else{
      this._showError(form, input, inputErrorClass)
    }
    };

    disableButton = () => {
  
      this._buttonElement.classList.add(`${this._inactiveButtonClass}`);
      this._buttonElement.disabled = true;
      
  };

  
    _toggleButtonState = (form) => {
  
    if(form.checkValidity()){
      this._buttonElement.classList.remove(`${this._inactiveButtonClass}`);
      this._buttonElement.disabled = false;
        
      }else{
      
      this.disableButton()
    }
  };

  

  _setAddEventListener = (form, inputSelector, submitButtonSelector, inputErrorClass) => {

    const inputElements = Array.from((form.querySelectorAll(`${inputSelector}`)));
    
    
    inputElements.forEach((elem) => {
  
      elem.addEventListener('input', (evt) => {
        
        this._toggleButtonState(form);
        this._checkInputValidity(form, evt.target,  inputErrorClass)
        
      });
    });
    
    this._toggleButtonState(form);
  };

  enableValidation = () => {
      
    const forms = Array.from((document.querySelectorAll(`${this._config.formsSelector}`)));
  
    forms.forEach((form) => {
      
        form.addEventListener( 'submit', (evt) => {
        evt.preventDefault()
        
      })
      this._setAddEventListener(form, this._config.inputSelector, this._config.submitButtonSelector, this._config.inactiveButtonClass,this._config.inputErrorClass);
    });
  };

  removeTextErrors = () => 
  { 
    const inputElements = Array.from(this._form.querySelectorAll(`${this._config.inputSelector}`)); 
    
      inputElements.forEach((inputElement) => { 
      inputElement.value = ''; 
      this._hideError(this._form, inputElement, this._config.inputErrorClass) 
    }); 
  };   
 
}   




