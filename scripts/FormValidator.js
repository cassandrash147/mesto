import {FormsForValidation} from './data.js';


export class FormValidator {

  constructor(config, formSelector) {
    this._config = config;  
    this._formSelector = formSelector;
    this._form = document.querySelector(this._formSelector);
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

  _toggleButtonState = (form, buttonElement, inactiveButtonClass) => {
  
    if(form.checkValidity()){
      buttonElement.classList.remove(`${inactiveButtonClass}`);
      buttonElement.disabled = false;
        
      }else{
        buttonElement.classList.add(`${inactiveButtonClass}`);
        buttonElement.disabled = true;
    }
  };

  _setAddEventListener = (form, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass) => {

    const inputElements = Array.from((form.querySelectorAll(`${inputSelector}`)));
    const buttonElement  = form.querySelector(`${submitButtonSelector}`);
    
    inputElements.forEach((elem) => {
  
      elem.addEventListener('input', (evt) => {
        
        this._toggleButtonState(form, buttonElement,inactiveButtonClass);
        this._checkInputValidity(form, evt.target,  inputErrorClass)
        
      });
    });
    
    this._toggleButtonState(form, buttonElement, inactiveButtonClass);
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




