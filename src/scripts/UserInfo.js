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

  setUserInfo(getUser){ 
    
    const userNewInfo = {};
    userNewInfo.name = getUser.name;  
    userNewInfo.proffesion = getUser.about;
    userNewInfo.avatar = `url(${getUser.avatar})`
    return userNewInfo;
  } 
 
    
} 
