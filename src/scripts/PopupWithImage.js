import {Popup} from './Popup.js';
import {fullsizePhoto, fullsizePhotoTitle} from './data.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    
    this._handleEscClose = this._handleEscClose.bind(this)
    
  }

  open(image, title){
    
    
    fullsizePhotoTitle.textContent = title;
    fullsizePhoto.src = image;
    fullsizePhoto.alt = title;
    super.open()
    
  }

  

}
