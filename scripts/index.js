let popup = document.querySelector('.popup');
let profile = document.querySelector('.lead');
let editButtom = profile.querySelector('.lead__edit_buttom');
let popupProfecion = document.querySelector('.popup__profecion');
let saveBottom = document.querySelector('.popup__save-bottom');
let closeBottom = document.querySelector('.popup__close-bottom');

let profileName = profile.querySelector('.lead__name');
let profileProffesion = profile.querySelector('.lead__proffesion');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__profecion');
let formElement = popup.querySelector('.popup__container');

function ClosePopup() {
  popup.classList.toggle('popup_display_none')
}

function EditProfile() {
  popup.classList.toggle('popup_display_none')
  nameInput.value = profileName.textContent;
  jobInput.value = profileProffesion.textContent;
}

editButtom.addEventListener('click', EditProfile);

closeBottom.addEventListener('click', ClosePopup);



// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    

    
    // Получите значение полей из свойства value
    

    

    // Вставьте новые значения с помощью textContent
    profileName.textContent = nameInput.value;
    profileProffesion.textContent = jobInput.value;
    ClosePopup()
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);


