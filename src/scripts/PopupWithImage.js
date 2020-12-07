import {Popup} from './Popup.js';
import {fullsizePhoto, fullsizePhotoTitle} from './data.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    
    this._handleEscClose = this._handleEscClose.bind(this)
    
  }
  
  open(data){
    
    
    fullsizePhotoTitle.textContent = data.title;
    fullsizePhoto.src = data.src;
    fullsizePhoto.alt =  data.alt;
    super.open()
    
  }

  

}
