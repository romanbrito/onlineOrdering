import React from 'react'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import useAuthState from '../hooks/useAuthState'
import {logout} from '../lib/auth'

const Header = ({siteTitle}) => {
  const {
    state: {user},
    setState,
  } = useAuthState()

  const handleLogout = () => {
    logout()
    setState({
      status: 'success',
      error: null,
      user: null,
    })
  }

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <div style={{margin: 0}}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <h2>{siteTitle}</h2>
            <h5>hello {user && user.username}</h5>
            <button onClick={handleLogout}>Logout</button>
          </Link>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
