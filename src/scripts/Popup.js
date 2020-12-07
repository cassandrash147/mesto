export class Popup {

  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this)
  }

  open(){
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
    
  }

  
  closePopup(){
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
    
  }

  _handleEscClose(evt){
    if (evt.key === 'Escape') {
      
      this.closePopup();
    } 
  }

  setEventListeners(){
    // обавляет слушатель клика иконке закрытия попапа.
    
    this._popup.addEventListener('click', (evt) => 
    {
      
      if((evt.target.classList.contains('popup')) || (evt.target.classList.contains('popup__close'))){
      this.closePopup()
    }}
      
    )};

  
}