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




const newProfile = new UserInfo('.lead__name', '.lead__proffesion');

const newPlaceClass = new PopupWithForm('.popup_type_place', {handleFormSubmit: (evt) => {
   
  const newCard = new Card(newPlaceClass._getInputValues()[0].value, newPlaceClass._getInputValues()[1].value, '#element-template', {handleCardClick: () => {
  new  PopupWithImage('.popup_type_photo').open()
  }});
  
  const generateCard =  newCard.generateCard();
  placeContainer.prepend(generateCard);
  newPlaceClass.closePopup()}});

const newProfileClass = new PopupWithForm('.popup_type_profile', {handleFormSubmit: (evt) => {
  newProfile.changeUserInfo(newProfileClass._getInputValues())
  
  newProfileClass.closePopup()}})

const bindHandlers = () => {
  // formElementPlace.addEventListener('submit', (evt) => {
  //   evt.preventDefault(); 
  //   const newCard = new Card(placeInput.value, urlInput.value, '#element-template', {handleCardClick: () => {
  //     new  PopupWithImage('.popup_type_photo', defaultPhoto, defaultTitle).open()
  //   }});
  //   const generateCard =  newCard.generateCard();
  //   placeContainer.prepend(generateCard);
    
    
  //   new  PopupWithForm('.popup_type_place').open();
  // });

  addPlace.addEventListener('click', function() {
    newPlaceClass.open()
    formNewPlaceValidator.removeTextErrors()
    formNewPlaceValidator.disableButton()
  });

    editButtom.addEventListener('click', function() {
    formEditProfileValidator.removeTextErrors()
    
    newProfile.setUserInfo(newProfileClass._getInputValues());
    
    formEditProfileValidator.disableButton();
    newProfileClass.open()
    
  });
  
  // formProfileElement.addEventListener('submit', submitProfileForm);
  
};

// function submitProfileForm (evt) {
//   evt.preventDefault(); 
//   profileName.textContent = nameInput.value;
//   profileProffesion.textContent = jobInput.value;
//   new  PopupWithForm('.popup_type_place').close()
// }




const formNewPlaceValidator = new FormValidator(FormsForValidation,`.popup_type_place`);
const formEditProfileValidator = new FormValidator(FormsForValidation,`.popup_type_profile`);


formNewPlaceValidator.enableValidation();
formEditProfileValidator.enableValidation();



const defaultCardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item.name, item.link, '#element-template',{handleCardClick: (image, title) => {
      
      new  PopupWithImage('.popup_type_photo').open(image, title)
      }});
    const cardElement = card.generateCard();
    defaultCardList.addItem(cardElement);
  }
}, placeContainer);

defaultCardList.renderItems();




bindHandlers();


