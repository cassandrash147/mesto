export class UserInfo {
  constructor({profileNameElement, profileProffesionElement,  profileAvatarElement}) {
    this._profileNameElement = document.querySelector(profileNameElement);  
    this._profileProffesionElement = document.querySelector(profileProffesionElement);
    this._profileAvatarElement = document.querySelector(profileAvatarElement);
   
  }

  getUserInfo(){

    const userInfo = {};
    userInfo.name = this._profileNameElement.textContent;
    userInfo.proffesion =  this._profileProffesionElement.textContent;
    userInfo.avatar =  this._profileAvatarElement.style.backgroundImage;
    return userInfo;
  }

  setUserInfo(userData){  
    this._profileNameElement.textContent = userData.name;   
    this._profileProffesionElement.textContent = userData.about; 
    this._profileAvatarElement.style.backgroundImage = `url(${userData.avatar})`;
}    
 
    
} 
