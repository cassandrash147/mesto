
import {PopupWithImage} from './PopupWithImage.js';

export class Card {

  constructor(name, link, cardSelector, handleCardClick) {
    this._title = name;  
    this._image = link;
    this._cardSelector = cardSelector;
    this.handleCardClick = handleCardClick
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector) 
      .content
      .querySelector('.element')
      .cloneNode(true);
      
    return cardElement;

  }

  _likeCard() {
    this._element.querySelector('.element__heart').classList.toggle('element__heart_active');
  };

  _deleteCard() {
    this._element.remove();
    this._element = null
  };

  

  _setEventListeners() {
    
   
    this._element.querySelector('.element__heart').addEventListener('click', this._likeCard.bind(this));
    this._element.querySelector('.element__delete').addEventListener('click', this._deleteCard.bind(this));
    this._element.querySelector('.element__photo').addEventListener('click', () => this.handleCardClick(this._image, this._title))
  };

  


  generateCard() {
    this._element = this._getTemplate();
    this._elementPhoto = this._element.querySelector('.element__photo')
    this._elementPhoto.src = this._image;
    this._element.querySelector('.element__title').textContent = this._title;
    this._elementPhoto.alt = this._title;
    this._setEventListeners();
    return this._element;
  }

  
}









