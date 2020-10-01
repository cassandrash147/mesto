let popup = document.querySelector('.popup');
let profile = document.querySelector('.lead');
let editButtom = document.querySelector('.lead__edit');
let popupProfecion = document.querySelector('.popup__profecion');
let saveButtom = document.querySelector('.popup__save');
let closeButtom = document.querySelector('.popup__close');


let profileName = profile.querySelector('.lead__name');
let profileProffesion = profile.querySelector('.lead__proffesion');

let nameInput = popup.querySelector('.popup__input_type_name');
let jobInput = popup.querySelector('.popup__input_type_profession');


let formElement = popup.querySelector('.popup__container');

function togglePopup() {
  popup.classList.toggle('popup_disabled');
}

function openPopupProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileProffesion.textContent;
  togglePopup();
}



function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileProffesion.textContent = jobInput.value;
    togglePopup();
}

editButtom.addEventListener('click', openPopupProfile );
closeButtom.addEventListener('click', togglePopup);
formElement.addEventListener('submit', formSubmitHandler);


