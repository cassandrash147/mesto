const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const placeContainer = document.querySelector('.elements');
const addPlace = document.querySelector('.lead__add');
const placeInput= document.querySelector('.popup__input_type_place');
const urlInput = document.querySelector('.popup__input_type_image');
const cardTemplate = document.querySelector('#element-template').content;
const popupProfile = document.querySelector('.popup_type_profile');
const popupPlace = document.querySelector('.popup_type_place');
const closeButtomPlace = popupPlace.querySelector('.popup__close');
const formElementPlace = popupPlace.querySelector('.popup__container');
const editButtom = document.querySelector('.lead__edit');
const closeButtom = document.querySelector('.popup__close');
const formElement = popupProfile.querySelector('.popup__container');
const profile = document.querySelector('.lead');
const profileName = profile.querySelector('.lead__name');
const profileProffesion = profile.querySelector('.lead__proffesion');
const nameInput = popupProfile.querySelector('.popup__input_type_name');
const jobInput = popupProfile.querySelector('.popup__input_type_profession');
const fullsizePhoto = document.querySelector('.popup_img');
const fullsizePhotoTitle = document.querySelector('.popup_img-title');
const popupPhoto = document.querySelector('.popup_type_photo');
const closeButtomPhoto = popupPhoto.querySelector('.popup__close');


const renderCards = () => {
  const cards = initialCards.map(element => getCard(element));

  placeContainer.prepend(...cards)
};

const deleteCard = (event) => {
  event.target.closest('.element').remove();
};

const likeCard = (event) => {
  event.target.classList.toggle('element__heart_active');
  
};

const getCard = (data) => {

  const card = cardTemplate.cloneNode(true)
  card.querySelector('.element__title').textContent = data.name;
  card.querySelector('.element__photo').src = data.link;

  const likeButton = card.querySelector('.element__heart');
  const deleteButton = card.querySelector('.element__delete');
  const openFullSizePhotoButton = card.querySelector('.element__photo');
  const photoTitle = card.querySelector('.element__title');
  
  likeButton.addEventListener('click', likeCard);
  deleteButton.addEventListener('click', deleteCard);
  
  openFullSizePhotoButton.addEventListener('click', function() {

    fullsizePhotoTitle.textContent = photoTitle.textContent;
    fullsizePhoto.src = openFullSizePhotoButton.src;
    
    togglePopup(popupPhoto);
    console.log(fullsizePhoto.textContent)
  });
  return card;
};





function togglePopup(item) {
  item.classList.toggle('popup_disabled');
}

const bindHandlers = () => {
  formElementPlace.addEventListener('submit', (evt) => {
    evt.preventDefault(); 
    const newCard = getCard({
      name: placeInput.value,
      link: urlInput.value
    });

    placeContainer.prepend(newCard)

    placeInput.value = '';
    urlInput.value = '';
    togglePopup(popupPlace);
  });

  addPlace.addEventListener('click', function() {
    togglePopup(popupPlace);
  });
  closeButtomPlace.addEventListener('click', function() {
    togglePopup(popupPlace);
  });
  editButtom.addEventListener('click', function() {
    togglePopup(popupProfile);
  });
  closeButtom.addEventListener('click', function() {
    togglePopup(popupProfile);
  });
  formElement.addEventListener('submit', formSubmitHandler);
  closeButtomPhoto.addEventListener('click', function() {
    togglePopup(popupPhoto);
  });
};

function formSubmitHandler (evt) {
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profileProffesion.textContent = jobInput.value;
  togglePopup(popupProfile);
}


renderCards();
bindHandlers();