import axios from 'axios'

export function setAuthHeader(token) {
  if(token) {
    axios.defaults.headers.common['access-token'] = token;
  } else {
    delete axios.defaults.headers.common['access-token'];
  }
}