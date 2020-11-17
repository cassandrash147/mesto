import {FormValidator} from './FormValidator.js';
import {FormsForValidation} from './data.js';

export function closePopup(item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEscape);
  
  
};

export function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', closeEscape);
  
}


const Escape = "Escape"; 

const closeEscape = (evt) => {
  if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
      
  } 
};





