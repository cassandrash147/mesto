const formsForValidation = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_state_invalid',
  inputErrorClass: 'popup__input_state_invalid',

};

const enableValidation = (validationConfiguration) => {
  var { formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass} = validationConfiguration;


  const forms = Array.from((document.querySelectorAll(`${formSelector}`)));

  forms.forEach((form) => {
    
      form.addEventListener( 'submit', (evt) => {
      evt.preventDefault()
      
    })
    setAddEventListener(form, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass);
  });
};

const setAddEventListener = (form, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass) => {

  const inputElements = Array.from((form.querySelectorAll(`${inputSelector}`)));
  const buttonElement  = form.querySelector(`${submitButtonSelector}`);
  
  inputElements.forEach((elem) => {

    elem.addEventListener('input', (evt) => {
      
      toggleButtonState(form, buttonElement, inactiveButtonClass);
      checkInputValidity(form, evt.target, inputErrorClass)
    });
  });
  
  toggleButtonState(form, buttonElement, inactiveButtonClass);
};

const toggleButtonState = (form, buttonElement, inactiveButtonClass) => {
  
  if(form.checkValidity()){
    buttonElement.classList.remove(`${inactiveButtonClass}`);
    buttonElement.disabled = false;
      
    }else{
      buttonElement.classList.add(`${inactiveButtonClass}`);
      buttonElement.disabled = true;
  }
};

const hideError = (form, input, inputErrorClass) =>{
  const errorElement = form.querySelector(`#${input.id}-error`);
  errorElement.textContent = '';
  input.classList.remove(`${inputErrorClass}`)
};

const showError = (form, input, inputErrorClass) =>{
  const errorElement = form.querySelector(`#${input.id}-error`);
  errorElement.textContent = input.validationMessage;
  input.classList.add(`${inputErrorClass}`)
};

const checkInputValidity = (form, input, inputErrorClass, errorClass) => {
if(input.checkValidity()){ 
hideError(form, input, inputErrorClass, errorClass)
}else{
showError(form, input, inputErrorClass, errorClass)
}
};


 







  

const removeTextErrors = (item, inputSelector) =>
{
  const inputElements = Array.from(item.querySelectorAll(inputSelector));
    inputElements.forEach((inputElement) => {
    inputElement.value = '';
    hideError(item, inputElement)
  });
};

  enableValidation(formsForValidation);
  


