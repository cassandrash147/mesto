import {Popup} from './Popup.js';


export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    // this._defaultPhoto = image
    // this._defaultTitle = title
    this._handleEscClose = this._handleEscClose.bind(this)
    
  }

  open(image, title){
    
    const fullsizePhoto = document.querySelector('.popup_img');
    const fullsizePhotoTitle = document.querySelector('.popup_img-title');
    fullsizePhotoTitle.textContent = title;
    
    fullsizePhoto.src = image;
    fullsizePhoto.alt = title;
    this._popup.classList.add('popup_opened')
    document.addEventListener('keydown', this._handleEscClose);
    this.setEventListeners()
  }

  

}
