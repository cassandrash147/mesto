export class UserInfo {
  constructor(profileNameElement, profileProffesionElement) {
    this._profileNameElement = document.querySelector(profileNameElement);  
    this.profileProffesionElement = document.querySelector(profileProffesionElement);
    
  }


  getUserInfo(){
    
    const userInfo = { name: this._profileNameElement.textContent, proffesion: this.profileProffesionElement.textContent};
    return userInfo
  }

  setUserInfo(inputValues){ 
     
    inputValues.name.value = this.getUserInfo().name;
    inputValues.about.value = this.getUserInfo().proffesion;
  } 
 
  changeUserInfo(inputValues){ 
     
    this._profileNameElement.textContent = inputValues.name; 
    this.profileProffesionElement.textContent = inputValues.about; 
  } 
} 
