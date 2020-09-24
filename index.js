let popup = document.querySelector('.popup');
let edit_buttom = document.querySelector('.lead__edit_buttom');
let popup__profecion = document.querySelector('.popup__profecion');
let save_bottom = document.querySelector('.popup__save-bottom');
let close_bottom = document.querySelector('.popup__close-bottom');

let profile_name = document.querySelector('.lead__name');
  let profile_proffesion = document.querySelector('.lead__proffesion');
  let nameInput = document.querySelector('.popup__name');
  let jobInput = document.querySelector('.popup__profecion');

edit_buttom.addEventListener('click', function () {
  popup.classList.toggle('popup_display_none')
  console.log(profile_name.textContent);
    console.log(profile_proffesion.textContent);

    nameInput.value = profile_name.textContent;
    jobInput.value = profile_proffesion.textContent;
  


});

close_bottom.addEventListener('click', function () {
  popup.classList.toggle('popup_display_none')
  
});

save_bottom.addEventListener('click', function () {
  // Находим форму в DOM
let formElement = document.querySelector('.popup__container');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                        // Так мы можем определить свою логику отправки.
                        // О том, как это делать, расскажем позже.

    // Находим поля формы в DOM
    

    
    // Получите значение полей из свойства value
    console.log(nameInput.value);
    console.log(jobInput.value);

    // Выберите элементы, куда должны быть вставлены значения полей
    let profile_name = document.querySelector('.lead__name');
    let profile_proffesion = document.querySelector('.lead__proffesion');

    // Вставьте новые значения с помощью textContent
    profile_name.textContent = nameInput.value;
    profile_proffesion.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
  popup.classList.toggle('popup_display_none')
});

