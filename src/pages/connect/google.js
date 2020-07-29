import React, {useEffect} from 'react'
import {navigate} from 'gatsby'
import useAuthState from '../../hooks/useAuthState'
import {loginProvider} from '../../lib/auth'

const Google = props => {
  const {
    state: {user},
    setState,
  } = useAuthState()

  // const token = props.location.search.replace('?id_token=', '')
  // console.log('token', token)

  useEffect(() => {
    const updateUser = async () => {
      if (props.location.search) {
        const {user} = await loginProvider('google', props.location.search)
        console.log('user', user)
        console.log('login with provider')
        setState({
          status: 'success',
          error: null,
          user,
        })
      }
    }
    updateUser()
    navigate('/checkout', {replace: true})
  }, [])

  return <div>Google Connect</div>
}

export default Google
