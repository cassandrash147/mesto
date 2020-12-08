import {Popup} from './Popup.js';
import {fullsizePhoto, fullsizePhotoTitle} from './data.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    
    this._handleEscClose = this._handleEscClose.bind(this)
    
  }
  
  open(cardId, element){
    
    const smallPhoto = element.querySelector('.element__photo')
    const smallPhotoTitle = element.querySelector('.element__title').textContent;
    fullsizePhotoTitle.textContent = smallPhotoTitle;
    fullsizePhoto.src = smallPhoto.src;
    fullsizePhoto.alt = smallPhotoTitle;
    super.open()
    
  }

  

}
