

const hideError = (form, input) =>{
const errorElement = form.querySelector(`#${input.id}-error`);
errorElement.textContent = '';
input.classList.remove('popup__input_state_invalid')
};

const showError = (form, input) =>{
  const errorElement = form.querySelector(`#${input.id}-error`);
  errorElement.textContent = input.validationMessage;
  input.classList.add('popup__input_state_invalid')
};

const checkInputValidity = (form, input) => {
if(input.checkValidity()){
hideError(form, input)
}else{
showError(form, input)
}
};

const setAddEventListener = (form) => {

  const inputElements = Array.from((form.querySelectorAll('.popup__input')));
  const buttonElement  = form.querySelector('.popup__save');
  
  inputElements.forEach((elem) => {

    elem.addEventListener('input', (evt) => {
      
      toggleButtonState(form, buttonElement);
      checkInputValidity(form, evt.target)});
      
      
      
  });
  toggleButtonState(form, buttonElement);
};
 


const toggleButtonState = (form, buttonElement) => {
  
  if(form.checkValidity()){
    buttonElement.classList.remove('popup__save_state_invalid');
    buttonElement.disabled = false;
    
    
    }else{
      buttonElement.classList.add('popup__save_state_invalid');
      buttonElement.disabled = true;
     
    }

};


const enableValidation = () => {
  const forms = Array.from((document.querySelectorAll('.popup__container')));
  
  forms.forEach((form) => {
    form.addEventListener( 'submit', (evt) => {
      evt.preventDefault()
    });
    setAddEventListener(form);
    
      
      
      
  });
};




enableValidation();

