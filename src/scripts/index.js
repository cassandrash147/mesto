
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-18',
  token: '44d78f56-6aed-4bb6-b8b5-fbdc00d6229d',
});

// Импорт для NPM

import '../pages/index.css';


// Импорты
import {Card} from './Card.js';
import {Api} from './Api.js';
import {FormValidator} from './FormValidator.js';
import {FormsForValidation} from './data.js';
import {Section} from './Section.js';
import {PopupWithImage} from './PopupWithImage.js';
import {PopupWithForm} from './PopupWithForm.js';
import {PopupWithSubmit} from './PopupWithSubmit.js';
import {UserInfo} from './UserInfo.js';
import {placeContainer,
  avatar,
  addPlace,
  editButtom,
  userName,
  userProffession,
  userAvatar,
  userNameInput,
  userProffessionInput,
  setValue,
  saveValue,
  waitApiSubmitValue} from './data.js'


// Создание попапов и их слушатели

const deletePopup = new PopupWithSubmit('.popup_type_agreement'); 

deletePopup.setEventListeners();

const bigPhoto = new PopupWithImage('.popup_type_photo');
bigPhoto.setEventListeners()



const profilePopup = new PopupWithForm('.popup_type_profile', {handleFormSubmit: (item) => {
  
  formEditProfileValidator.waitApiStart(waitApiSubmitValue);
  api.editProfile(item.name, item.proffesion)
  .then(() => {
    
    newUserInfo.setUserInfo(item.name, item.proffesion);
    profilePopup.closePopup();
  })
  .catch((err) => {
    console.error(
      err
    );
  })
  .finally(() => {
    formEditProfileValidator.waitApiFinish(saveValue);
  });
}
}
);
profilePopup.setEventListeners();

const avatarPopup = new PopupWithForm('.popup_type_avatar', 
{handleFormSubmit: (item) => {
  formAvatarValidator.waitApiStart(waitApiSubmitValue);
  
  api.editAvatar(item.avatar)

  .then((res) => {
    
    avatarPopup.closePopup();
    userAvatar.style.backgroundImage = `url(${res.avatar})`;
  })
  .catch((err) => {
    console.error(
      err
    );
  })
  .finally(() => {
    formAvatarValidator.waitApiFinish(saveValue);
  });
}
}
);
avatarPopup.setEventListeners();

// Валидаторы

const formAvatarValidator = new FormValidator(FormsForValidation,`.popup_type_avatar`);
const formNewPlaceValidator = new FormValidator(FormsForValidation,`.popup_type_place`);
const formEditProfileValidator = new FormValidator(FormsForValidation,`.popup_type_profile`);

formNewPlaceValidator.enableValidation();
formEditProfileValidator.enableValidation();
formAvatarValidator.enableValidation();

// Профиль
const newUserInfo =  new UserInfo(
  {profileNameElement: '.lead__name', 
  profileProffesionElement: '.lead__proffesion',
  profileAvatarElement: '.lead__avatar'
})

// Загружаем промис с сервера
Promise.all([api.getUser(), api.getInitialCards()])
   .then(([getUser, getInitialCards]) => {
  
  userName.textContent = newUserInfo.setUserInfo(getUser).name;
  userProffession.textContent = newUserInfo.setUserInfo(getUser).proffesion;
  userAvatar.style.backgroundImage = newUserInfo.setUserInfo(getUser).avatar;
     defaultCardList.renderItems(getInitialCards, getUser._id);
     initializePopupCardLogic(getUser._id);
   })
   .catch((err) => {
     console.error(err);
});

// Карточки

let chosenCard;

const newCard = (item, userId) => {
  
  const nCard = new Card(
    item,
    userId,
    '.element-template',
    {handleCardClick: (data) => {
        nCard._openPopup(bigPhoto)
    }},
    {handleDeleteClick: (cardId) => {
      
      deletePopup.setSubmitAction(() => {
        cardId = deletePopup.getCardId()
        

          api.deleteCard(cardId)
             .then(res => nCard.deleteCard())
             .catch(err => console.error(err))
        })
        nCard._openPopup(deletePopup) 
      }  
           
    }
        
      
  

     
        
,
    {handleLikeClick: (event) =>
      {
        if (event.target.classList.contains('element__heart_active'))
        {
          api.disLike(item._id)
          .then((res) => nCard._like(res))
          .catch((err) => {
            console.error(
              err
            );
          });
        }else{
          api.like(item._id)
          .then((res) => nCard._like(res))
          .catch((err) => {
            console.error(
              err
            );
          });
        } 
      }
    }
    
  )
  return nCard
};

const defaultCardList = new Section({
  renderer: (item, userId) => { 
    
    const card = newCard(item, userId);
    defaultCardList.addItemAppend(card.generateCard());
    } 
  }, 
  placeContainer
);



function initializePopupCardLogic(userId) {
  const newPlacePopup = new PopupWithForm('.popup_type_place', {handleFormSubmit: (item, userId) => {
    
   formNewPlaceValidator.waitApiStart(waitApiSubmitValue);
    
    api.addCard(item.name, item.link)
    .then((res) => {
      item.owner = {
      "_id": userId
      };
      item._id = res._id;
      
      const card = newCard(item, userId);
      defaultCardList.addItemPrepend(card.generateCard());
      newPlacePopup.closePopup();
    })
    .catch((err) => {
      console.error(
      err);          
              
    })                
    .finally(() => {
      formNewPlaceValidator.waitApiFinish(setValue);        
    })
    
  }});
  newPlacePopup.setEventListeners();
  
  addPlace.addEventListener('click', function() {
    formNewPlaceValidator.removeTextErrors()
    formNewPlaceValidator.disableButton()
    
    newPlacePopup.open()
  });
  }




function bindHandlers() {
    

  avatar.addEventListener('click', function() {
    avatarPopup.open()
    formAvatarValidator.removeTextErrors()
    formAvatarValidator.disableButton()
  });

  editButtom.addEventListener('click', function() {
    formEditProfileValidator.removeTextErrors()
    formEditProfileValidator.disableButton();
    const newUserInfoData = newUserInfo.getUserInfo();
    
    userNameInput.value = newUserInfoData.name;
    userProffessionInput.value = newUserInfoData.proffesion;
    profilePopup.open()
    
  });
  
};


bindHandlers();











