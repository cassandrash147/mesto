export class UserInfo {
  constructor({profileNameElement, profileProffesionElement}) {
    this._profileNameElement = document.querySelector(profileNameElement);  
    this._profileProffesionElement = document.querySelector(profileProffesionElement);
    
   
  }

  getUserInfo(){

    const userInfo = {};
    userInfo.name = this._profileNameElement.textContent;
    userInfo.proffesion =  this._profileProffesionElement.textContent;

    return userInfo;
  }

  setUserInfo(userName, userProffesion){ 
     
    this._profileNameElement.textContent = userName;  
    this._profileProffesionElement.textContent = userProffesion;
  } 
 
    
} 
