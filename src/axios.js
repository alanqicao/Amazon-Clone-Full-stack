import axios from "axios";

const instance = axios.create({
baseURL: 'https://us-central1-challenge-5bcae.cloudfunctions.net/api'
  //the api (clod function) URL
});

export default instance;