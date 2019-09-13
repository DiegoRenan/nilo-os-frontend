import { generateAuthActions } from 'redux-token-auth'

const url = axios.create({
  // baseURL: "http://177.23.191.191:3000/",
  baseURL: "http://localhost:3000/auth",
  headers: { 'Accept': 'application/json' }
})

const config = {
  authUrl = url
}

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials,  
} = generateAuthActions(config)

export {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials
}