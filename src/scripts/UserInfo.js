export class UserInfo {
  constructor(profileNameElement, profileProffesionElement) {
    this._profileNameElement = document.querySelector(profileNameElement);  
    this.profileProffesionElement = document.querySelector(profileProffesionElement);
    
  }


  getUserInfo(){
    const UserInfo = { name: this._profileNameElement.textContent, proffesion: this.profileProffesionElement.textContent};
    return UserInfo
  }

  setUserInfo(InputValues){
    
    InputValues[0].value = this.getUserInfo().name;
    InputValues[1].value = this.getUserInfo().proffesion;
  }

  changeUserInfo(InputValues){
    
    this._profileNameElement.textContent = InputValues[0].value;
    this.profileProffesionElement.textContent = InputValues[1].value;
  }
}