import React, {useState, useEffect} from 'react'
import Context from '../context/AuthContext'

const sleep = time => new Promise(resolve => setTimeout(resolve, time))

const getUser = () => sleep(1000).then(() => ({username: 'elmo'}))
// .then(() => null)

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
  }, [])

  return (
    <Context.Provider value={state}>
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
