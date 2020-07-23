import Cookie from 'js-cookie'
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

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

  //set token response on cookie
  const res = await response.json()
  Cookie.set('token', res.jwt)

  return res
}
