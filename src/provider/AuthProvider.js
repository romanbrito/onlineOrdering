import React, {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import Context from '../context/AuthContext'
import {API_URL} from '../config/api'

// const sleep = time => new Promise(resolve => setTimeout(resolve, time))
// const getUser = () =>
//   sleep(1000)
//     .then(() => ({username: 'elmo'}))
//     .then(() => null)

const getUser = async () => {
  // grab token from cookies
  const token = Cookies.get('token')

  if (token) {
    const response = await fetch(`${API_URL}/users/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      Cookies.remove('token')
      console.error(response.statusText)
      return null
    }
    const res = await response.json()
    return res
  } else {
    return null
  }
}
const ContextProvider = ({children}) => {
  let initialState = {
    status: 'pending',
    error: null,
    user: null,
  }

  const [state, setState] = useState(initialState)

  useEffect(() => {
    getUser().then(
      user => setState({status: 'success', error: null, user}),
      error => setState({status: 'error', error, user: null}),
    )
    // useEffect clean up
    return () => {}
  }, [])

  return (
    <Context.Provider value={{state, setState}}>
      {state.status === 'pending' ? (
        'Loading...'
      ) : state.status === 'error' ? (
        <div>
          Oh no
          <div>
            <pre>{state.error.message}</pre>
          </div>
        </div>
      ) : (
        children
      )}
    </Context.Provider>
  )
}

export default ContextProvider
