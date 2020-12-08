export class Api {

  constructor({url, token}) {
    this._url = url;
    this._token = token;
    
  }

  _getResponseData(res) {
    
      if (res.ok) {
      return res.json()
      }else{
      return Promise.reject(`Ошибка связи с с свервером: ${res.status}, ${res.statusText}`)};
    ;
} 

  getInitialCards() {
   
    return fetch(`${this._url}/cards`,
      {
        headers: {
          authorization: this._token,
          
        }
      })
      .then((res) => this._getResponseData(res));
  }

  addCard(name, link) {
    
    return fetch(`${this._url}/cards`,
      {
        method: 'POST',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: `${name}`,
          link: `${link}`
        })
      })
      .then((res) => this._getResponseData(res));
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`,
      {
        method: 'DELETE',
        headers: {
          authorization: this._token
        }
      })
      .then((res) => this._getResponseData(res));
  }

  getUser() {
    return fetch(`${this._url}/users/me`,
      {
        headers: {
          authorization: this._token,
        }
      })
      .then((res) => this._getResponseData(res));
  }

   editProfile(name, proffession) {
    return fetch(`${this._url}/users/me`,
      {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: `${name}`,
          about: `${proffession}`
        })
      })
      .then((res) => this._getResponseData(res));
  }
 
  editAvatar(avatar) {
    return fetch(`${this._url}/users/me/avatar`,
      {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          avatar: `${avatar}`
        })
      })
      .then((res) => this._getResponseData(res));
  }

  like(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`,
      {
        method: 'PUT',
        headers: {
          authorization: this._token
        }
      })
      .then((res) => this._getResponseData(res));
  }

  disLike(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`,
      {
        method: 'DELETE',
        headers: {
          authorization: this._token
        }
      })
      .then((res) => this._getResponseData(res));
  }
}
