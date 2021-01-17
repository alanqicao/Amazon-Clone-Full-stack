import axios from "axios";

const instance = axios.create({
baseURL: 'http://localhost:5001/challenge-5bcae/us-central1/api'
  //the api (clod function) URL
});

export default instance;