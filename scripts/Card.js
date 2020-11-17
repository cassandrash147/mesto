import {fullsizePhoto, fullsizePhotoTitle, popupPhoto} from './data.js';
import {openPopup} from './utils.js';

export class Card {

  constructor(name, link, cardSelector) {
    this._title = name;  
    this._image = link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector) 
      .content
      .querySelector('.element')
      .cloneNode(true);
      
    return cardElement;

  }

  _likeCard = (event) => {
    this._element.querySelector('.element__heart').classList.toggle('element__heart_active');
  };

  _deleteCard = () => {
    this._element.remove();
  };

  

  _setEventListeners() {
    const defaultPhoto = this._image
    const defaulttitle = this._title
   
    this._element.querySelector('.element__heart').addEventListener('click', this._likeCard);
    this._element.querySelector('.element__delete').addEventListener('click', this._deleteCard);
    this._element.querySelector('.element__photo').addEventListener('click', function() {

      fullsizePhotoTitle.textContent = defaulttitle;
      fullsizePhoto.src = defaultPhoto;
      fullsizePhoto.alt = defaulttitle;
      openPopup(popupPhoto);
    });
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









