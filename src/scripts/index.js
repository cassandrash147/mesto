import '../pages/index.css';
import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {initialCards, FormsForValidation} from './data.js';

import {Section} from './Section.js';

import {PopupWithImage} from './PopupWithImage.js';
import {PopupWithForm} from './PopupWithForm.js';
import {UserInfo} from './UserInfo.js';

const placeContainer = document.querySelector('.elements');
const addPlace = document.querySelector('.lead__add');


const editButtom = document.querySelector('.lead__edit');

const bigPhoto = new  PopupWithImage('.popup_type_photo');

function handleCardClick(image, title) {
  bigPhoto.open(image, title);
};

function createCard(item, place, templete, handleCardClick) {
  const card = new Card(item, place, templete, handleCardClick);
        const cardElement = card.generateCard();
        defaultCardList.addItem(cardElement);
};

bigPhoto.setEventListeners()

const newProfile = new UserInfo('.lead__name', '.lead__proffesion');

const newPlaceClass = new PopupWithForm('.popup_type_place', {handleFormSubmit: (evt) => {
  createCard(newPlaceClass._getInputValues().place, newPlaceClass._getInputValues().place_url, '#element-template', handleCardClick)
  
  newPlaceClass.closePopup()}
});
newPlaceClass.setEventListeners();


const newProfilePopup = new PopupWithForm('.popup_type_profile', {handleFormSubmit: (evt) => {
  newProfile.changeUserInfo(newProfilePopup._getInputValues())
  
  newProfilePopup.closePopup()}
})

newProfilePopup.setEventListeners();

const bindHandlers = () => {
    addPlace.addEventListener('click', function() {
    newPlaceClass.open()
    formNewPlaceValidator.removeTextErrors()
    formNewPlaceValidator.disableButton()
  });

    editButtom.addEventListener('click', function() {
    formEditProfileValidator.removeTextErrors()
    
    newProfile.setUserInfo(newProfilePopup.getInput());
    
    formEditProfileValidator.disableButton();
    newProfilePopup.open()
    
  });
  
  
  
};

const formNewPlaceValidator = new FormValidator(FormsForValidation,`.popup_type_place`);
const formEditProfileValidator = new FormValidator(FormsForValidation,`.popup_type_profile`);


formNewPlaceValidator.enableValidation();
formEditProfileValidator.enableValidation();



const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => { 
    createCard(item.name, item.link, '#element-template', handleCardClick)
    
  }
}, placeContainer);

defaultCardList.renderItems();




bindHandlers();


