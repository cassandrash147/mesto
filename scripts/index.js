let popup = document.querySelector('.popup');
let profile = document.querySelector('.lead');
let editButtom = document.querySelector('.lead__edit');
let popupProfecion = document.querySelector('.popup__profecion');
let saveButtom = document.querySelector('.popup__save');
let closeButtom = document.querySelector('.popup__close');


let profileName = profile.querySelector('.lead__name');
let profileProffesion = profile.querySelector('.lead__proffesion');

let nameInput = document.querySelector('.popup__input-type-name');
let jobInput = document.querySelector('.popup__input-type-profession');

let formElement = popup.querySelector('.popup__container');

function OpenClosePopup() {
  popup.classList.toggle('popup_disabled')
}

function EditProfile() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileProffesion.textContent;
  OpenClosePopup()
}



function formSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileProffesion.textContent = jobInput.value;
    OpenClosePopup()
}

editButtom.addEventListener('click', EditProfile );
closeButtom.addEventListener('click', OpenClosePopup);
formElement.addEventListener('submit', formSubmitHandler);


