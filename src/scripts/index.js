
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

const deletePopup = new PopupWithSubmit('.popup_type_agreement', 
{handleDeleteCard: () =>{
  const cardId = deletePopup.getCardId();
      api.deleteCard(cardId)
        .then((res) => {
          chosenCard.closest('.element').remove();
        })
        .catch((err) => {
          console.error(
            err
          );
        })
        .finally(() => {
          deletePopup.closePopup();
          
        });
    }
  

});
deletePopup.setEventListeners()

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

const formAvatarValidator = new FormValidator(FormsForValidation,`.popup_type_place`);
const formNewPlaceValidator = new FormValidator(FormsForValidation,`.popup_type_place`);
const formEditProfileValidator = new FormValidator(FormsForValidation,`.popup_type_profile`);

formNewPlaceValidator.enableValidation();
formEditProfileValidator.enableValidation();
formAvatarValidator.enableValidation();

// Профиль
const newUserInfo =  new UserInfo(
  {profileNameElement: '.lead__name', 
  profileProffesionElement: '.lead__proffesion'
})

// Загружаем промис с сервера
Promise.all([api.getUser(), api.getInitialCards()])
   .then(([getUser, getInitialCards]) => {
    userName.textContent = getUser.name;
    userProffession.textContent = getUser.about;
    userAvatar.style.backgroundImage = `url(${getUser.avatar})`;
     defaultCardList.renderItems(getInitialCards, getUser._id);
     createCard(getUser._id);
   })
   .catch((err) => {
     console.error(err);
});

// Карточки

let chosenCard;

const newCard = (item, userId) => {
  
  return new Card(
    item,
    userId,
    '.element-template',
    {handleCardClick: (data) => {
        bigPhoto.open(data);
    }},
    {handleDeleteClick: (event) => {
        chosenCard =  event.target;
        deletePopup.open(item._id, event);
        
      }
    },
    {handleLikeClick: (event) =>
      {
        if (event.target.classList.contains('element__heart_active'))
        {
          api.disLike(item._id)
          .then((res) => {
            event.target.classList.toggle('element__heart_active');
            const cardLikesCounter = event.target.closest('.element__heart-block').querySelector('.element__heart-counter');
            cardLikesCounter.innerText = res.likes.length;
          })
          .catch((err) => {
            console.error(
              err
            );
          });
        }else{
          api.like(item._id)
          .then((res) => {
            event.target.classList.toggle('element__heart_active');
            const cardLikesCounter = event.target.closest('.element__heart-block').querySelector('.element__heart-counter');
            cardLikesCounter.innerText = res.likes.length; 
          })
          .catch((err) => {
            console.error(
              err
            );
          });
        } 
      }
    }
    
  )
};

const defaultCardList = new Section({
  renderer: (item, userId) => { 
    
    const card = newCard(item, userId);
    defaultCardList.addItemAppend(card.generateCard());
    } 
  }, 
  placeContainer
);



function createCard(userId) {
  const newPlacePopup = new PopupWithForm('.popup_type_place', {handleFormSubmit: (item, userId) => {
    
    formEditProfileValidator.waitApiStart(waitApiSubmitValue);
    
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











