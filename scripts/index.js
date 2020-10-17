const popupProfile = document.querySelector('.popup_type_profile');
const profile = document.querySelector('.lead');
const editButtom = document.querySelector('.lead__edit');
const popupProfecion = document.querySelector('.popup__profecion');
const saveButtom = document.querySelector('.popup__save');
const closeButtom = document.querySelector('.popup__close');
const popupPlace = document.querySelector('.popup_type_place');
const addPlace = profile.querySelector('.lead__add');
const closeButtomPlace = popupPlace.querySelector('.popup__close');
const createButtom = popupPlace.querySelector('.popup__save');
const savePlaceButtom = popupPlace.querySelector('.popup__save');
const popupPhoto = document.querySelector('.popup_type_photo');


const profileName = profile.querySelector('.lead__name');
const profileProffesion = profile.querySelector('.lead__proffesion');

const nameInput = popupProfile.querySelector('.popup__input_type_name');
const jobInput = popupProfile.querySelector('.popup__input_type_profession');


const formElement = popupProfile.querySelector('.popup__container');
const placeContainer = document.querySelector('.elements');
const heart = document.querySelectorAll('.element__heart');
const formElementPlace = popupPlace.querySelector('.popup__container');


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

const cardTemplate = document.querySelector('#element-template').content; 


initialCards.forEach(function (item) {
  const launchElement = cardTemplate.cloneNode(true);
  
  launchElement.querySelector('.element__photo').src = item.link;
  launchElement.querySelector('.element__title').textContent = item.name;

  const heart = launchElement.querySelector('.element__heart');
  heart.addEventListener('click', function (evt) {
  evt.target.classList.toggle('element__heart_active')});

  const deleteButtom = launchElement.querySelector('.element__delete');
  const deleteItem = deleteButtom.parentElement
  

  const photo = launchElement.querySelector('.element__photo');
  const title = launchElement.querySelector('.element__title');
  photo.addEventListener('click', openPopupPhoto);

  function removeCard() {
    deleteItem.remove();
  }
  
  function openPopupPhoto() {
    const photoBig = document.querySelector('.popup_img');
    const titleBig = document.querySelector('.popup_img-title');
    
    

   photoBig.src = photo.src;
   console.log(photoBig.style.backgroundImage)
   titleBig.textContent = title.textContent;
    togglePopupPhoto() 
    const closeButtomPlace = popupPhoto.querySelector('.popup__close');
    closeButtomPlace.addEventListener('click', togglePopupPhoto);
  };

    


  placeContainer.prepend(launchElement);
  deleteButtom.addEventListener('click', removeCard);
});


function togglePopupProfile() {
  popupProfile.classList.toggle('popup_disabled');
}

function openPopupProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileProffesion.textContent;
  togglePopupProfile();
}



function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileProffesion.textContent = jobInput.value;
    togglePopupProfile();
}




  
 

function togglePopupPlace() {
  popupPlace.classList.toggle('popup_disabled');
}

function togglePopupPhoto() {
  popupPhoto.classList.toggle('popup_disabled');
}


function createPlace(evt) {
  evt.preventDefault(); 

  let placeInput= popupPlace.querySelector('.popup__input_type_place');
  let urlInput = popupPlace.querySelector('.popup__input_type_image');
  const newElement = cardTemplate.cloneNode(true);
  
  newElement.querySelector('.element__photo').src = urlInput.value;
  newElement.querySelector('.element__title').textContent = placeInput.value;

  const heart = newElement.querySelector('.element__heart');
  heart.addEventListener('click', function (e) {
  e.target.classList.toggle('element__heart_active')
});

const deleteButtom = newElement.querySelector('.element__delete');
  const deleteItem = deleteButtom.parentElement
  function removeCard() {
    deleteItem.remove();
  }

  placeContainer.prepend(newElement);
  togglePopupPlace()

  deleteButtom.addEventListener('click', removeCard);
  
}

editButtom.addEventListener('click', openPopupProfile );
addPlace.addEventListener('click', togglePopupPlace );
closeButtom.addEventListener('click', togglePopupProfile);
closeButtomPlace.addEventListener('click', togglePopupPlace);
formElement.addEventListener('submit', formSubmitHandler);
formElementPlace.addEventListener('submit', createPlace);