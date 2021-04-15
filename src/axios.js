import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://amazon-server-it.herokuapp.com/",
  // https://us-central1-it-17798.cloudfunctions.net/api
  // "http://localhost:5001/it-17798/us-central1/api",
});

export default instance;