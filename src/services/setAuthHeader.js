import axios from 'axios'

export function setAuthHeader(token, client, uid) {
  if(token) {
    localStorage.setItem("access-token", token)
    localStorage.setItem("client", client)
    localStorage.setItem("uid", uid)
  } 
}
