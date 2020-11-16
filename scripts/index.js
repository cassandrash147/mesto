import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {initialCards, FormsForValidation} from './data.js';

const placeContainer = document.querySelector('.elements');
const addPlace = document.querySelector('.lead__add');
const placeInput= document.querySelector('.popup__input_type_place');
const urlInput = document.querySelector('.popup__input_type_image');

const popupProfile = document.querySelector('.popup_type_profile');
const popupPlace = document.querySelector('.popup_type_place');

const formElementPlace = popupPlace.querySelector('.popup__container');
const editButtom = document.querySelector('.lead__edit');

const formElement = popupProfile.querySelector('.popup__container');
const profile = document.querySelector('.lead');
const profileName = profile.querySelector('.lead__name');
const profileProffesion = profile.querySelector('.lead__proffesion');
const nameInput = popupProfile.querySelector('.popup__input_type_name');
const jobInput = popupProfile.querySelector('.popup__input_type_profession');



nameInput.value = profileName.textContent;
jobInput.value = profileProffesion.textContent;
const Escape = "Escape"; 

const renderCards = () => {
  const cards = initialCards.map(element => 
    new Card(element.name, element.link, '#element-template').generateCard()
    );
  
  
  placeContainer.append(...cards)
  
};



function closePopup(item) {
  item.classList.add('popup_disabled');
  new FormValidator(FormsForValidation).removeTextErrors(item)
};

export function openPopup(item) {
  item.classList.remove('popup_disabled');
  
}


const bindHandlers = () => {
  formElementPlace.addEventListener('submit', (evt) => {
    evt.preventDefault(); 
    const newCard = new Card(placeInput.value, urlInput.value, '#element-template');
    const generateCard =  newCard.generateCard();
    document.querySelector('.elements').prepend(generateCard);
    placeInput.value = '';
    urlInput.value = '';
    closePopup(popupPlace);
  });

  addPlace.addEventListener('click', function() {
    openPopup(popupPlace);
  });

  
const popups = Array.from(document.querySelectorAll('.popup'))


popups.forEach((popup) => {
  popup.addEventListener('click', function(evt) {
    if((evt.target.classList.contains('popup')) || (evt.target.classList.contains('popup__close'))){ closePopup(popup);}
  });
  document.addEventListener('keydown', function(evt) {
    
    if(evt.key == Escape){closePopup(popup);}
  });
});

  editButtom.addEventListener('click', function() {
    nameInput.value = profileName.textContent;
jobInput.value = profileProffesion.textContent;
    openPopup(popupProfile);
  });
  
  formElement.addEventListener('submit', formSubmitHandler);
  
};

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileProffesion.textContent = jobInput.value;
  closePopup(popupProfile);
}




renderCards();
bindHandlers();