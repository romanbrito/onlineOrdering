import Cookies from 'js-cookie'
import {API_URL} from '../config/api'

export const login = async ({email: identifier, password}) => {
  // todo: make sure this is needed
  // prevent function from being ran on the server
  if (typeof window === 'undefined') {
    return
  }

  const response = await fetch(`${API_URL}/auth/local`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      identifier,
      password,
    }),
  })

  if (!response.ok) {
    console.error(response.statusText)
    return
  }

  //set token response on cookies
  const res = await response.json()
  Cookies.set('token', res.jwt)

  return res
}

export const loginProvider = async (provider, search) => {
  // todo: make sure this is needed
  // prevent function from being ran on the server
  if (typeof window === 'undefined') {
    return
  }

  const response = await fetch(`${API_URL}/auth/${provider}/callback${search}`)

  if (!response.ok) {
    console.error(response.statusText)
    return
  }

  //set token response on cookies
  const res = await response.json()
  Cookies.set('token', res.jwt)

  return res
}

export const logout = () => {
  // remove token and user cookies
  Cookies.remove('token')
  // todo: remove console.log
  console.log('logout')
}

export const signup = async ({username, email, password}) => {
  // todo: make sure this is needed
  // prevent function from being ran on the server
  if (typeof window === 'undefined') {
    return
  }
  // maybe change to try catch
  const response = await fetch(`${API_URL}/auth/local/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
      // todo: add First Name, Last Name, Phone, Terms and Privacy Policy, recieve promotions
    }),
  })

  if (!response.ok) {
    console.error(response.statusText)
    return
  }

  //set token response on cookies
  const res = await response.json()
  Cookies.set('token', res.jwt)

  return res
}
