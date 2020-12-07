export class Card {

  constructor({name, link, likes, owner, _id}, userId, cardSelector, {handleCardClick}, {handleDeleteClick}, {handleLikeClick}) {
    this._title = name;  
    this._image = link;
    this._likes = likes;
    this._cardOwnerId = owner._id;
    this._cardId = _id;
    this._userId = userId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick,
    this._handleDeleteClick = handleDeleteClick,
    this._handleLikeClick = handleLikeClick
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  _setEventListenerDeleteButton() {
    const deleteButton = this._element.querySelector('.element__delete')
    deleteButton.classList.remove('element__delete-nodisplay');
    deleteButton.addEventListener('click', (event) => {
    this._handleDeleteClick(event);
    })
  }
  
  _setEventListeners() {
    
    this._element.querySelector('.element__heart').addEventListener('click', event => this._handleLikeClick(event));
    
    this._element.querySelector('.element__photo').addEventListener('click',  event => {
      
      const data = {};
      data.src = event.target.src;
      data.title = event.target.closest('.element').querySelector('.element__title').textContent;
      data.alt = event.target.closest('.element').querySelector('.element__title').textContent;
      this._handleCardClick(data);
    })
  };

  


  generateCard() {
    this._element = this._getTemplate();
    const elementPhoto = this._element.querySelector('.element__photo');
    const elementTitle = this._element.querySelector('.element__title');
    const likeCounter = this._element.querySelector('.element__heart-counter');

    elementPhoto.src = this._image;
    elementTitle.textContent = this._title;
    

    if(this._userId === this._cardOwnerId){
      this._setEventListenerDeleteButton()
    }
    
    this._liked = this._likes ? this._likes.some((like) => like._id === this._userId) : false;

    if (this._liked) {
      const cardIsLiked= this._element.querySelector('.element__heart');
      cardIsLiked.classList.toggle('element__heart_active');
      likeCounter.textContent = this._likes.length;
    }
    
    this._setEventListeners();
    return this._element;
  }

  
}









