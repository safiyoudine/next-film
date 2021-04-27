import axios from 'axios';

const API_FILM = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7501cfea637934c594ec089031ca3983&page=1"; 
const API_TV = "https://api.themoviedb.org/3/discover/tv?sort_by=popularity.desc&api_key=7501cfea637934c594ec089031ca3983&page=1"; 
const API_AUTHENTIFICATION = "https://api.themoviedb.org/3/authentication/token/new?api_key=7501cfea637934c594ec089031ca3983"; 
const API_GUEST_ID = "https://api.themoviedb.org/3/authentication/guest_session/new?api_key=7501cfea637934c594ec089031ca3983"


class BackendService {
 
  discoverAllMoviesLatests() {
    return axios.get(`${API_FILM}`, {
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    });
  }

  discoverAllTVLatests() {
    return axios.get(`${API_TV}`, {
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    });
  }


  generateToken() {
    return axios.get(`${API_AUTHENTIFICATION}`, {
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    });
  }
  generateGuestId() {
    return axios.get(`${API_GUEST_ID}`, {
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    });
  }



  createSession(bodyRequest) {
    return axios.post(`https://api.themoviedb.org/3/authentication/session/new?api_key=7501cfea637934c594ec089031ca3983`, JSON.stringify(bodyRequest), {headers:this.headers});
  }
   
  rateMovie(idMovie, GuestId, rate) {
    return axios.post(`https://api.themoviedb.org/3/movie/${idMovie}/rating?api_key=7501cfea637934c594ec089031ca3983&guest_session_id=5de8be55969fa84c9f1c596faf6f9a73`, JSON.stringify(rate), {headers:this.headers});
  }
  
}

export default new BackendService();
