export class Api {

  constructor({url, token}) {
    this._url = url;
    this._token = token;
    
  }

  getInitialCards() {
   
    return fetch(`${this._url}/cards`,
      {
        headers: {
          authorization: this._token,
          
        }
      })
      .then((res) => {
        if (res.ok) {return res.json();}
        return Promise.reject(`Карточки не загружены! Ошибка: ${res.status}, ${res.statusText}`);
      });
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
      .then((res) => {
        if (res.ok) {return res.json();}
        return Promise.reject(`Карточка не сохранена! Ошибка: ${res.status}, ${res.statusText}`);
      });
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`,
      {
        method: 'DELETE',
        headers: {
          authorization: this._token
        }
      })
      .then((res) => {
        if (res.ok)  {return res.json();}
        return Promise.reject(`Карточка не удалена! Ошибка: ${res.status}, ${res.statusText}`);
      });
  }

  getUser() {
    return fetch(`${this._url}/users/me`,
      {
        headers: {
          authorization: this._token,
        }
      })
      .then((res) => {
        if (res.ok) {return res.json();}
        return Promise.reject(`Профиль не загружен с сервера! Ошибка: ${res.status}, ${res.statusText}`);
      });
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
      .then((res) => {
        if (res.ok) {return res.json();}
        return Promise.reject(`Профиль не сохранен! Ошибка: ${res.status}, ${res.statusText}`);
      });
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
      .then((res) => {
        if (res.ok) {return res.json();}
        
        return Promise.reject(`Аватар не сохранен! Ошибка: ${res.status}, ${res.statusText}`);
      });
  }

  like(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`,
      {
        method: 'PUT',
        headers: {
          authorization: this._token
        }
      })
      .then((res) => {
        if (res.ok) {return res.json();}
        return Promise.reject(`Лайк не поставлен! Ошибка: ${res.status}, ${res.statusText}`);
      });
  }

  disLike(cardId) {
    return fetch(`${this._url}/cards/likes/${cardId}`,
      {
        method: 'DELETE',
        headers: {
          authorization: this._token
        }
      })
      .then((res) => {
        if (res.ok) {return res.json();}
        return Promise.reject(`лайк не удален! Ошибка: ${res.status}, ${res.statusText}`);
      });
  }
}

