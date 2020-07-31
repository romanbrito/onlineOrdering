import React from 'react'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import useAuthState from '../../hooks/useAuthState'
import {logout} from '../../lib/auth'
import {headerStyles} from './styles'

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
    <header css={headerStyles}>
      <div style={{margin: 0}}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <h2>{siteTitle}</h2>
          {/* <h5>hello {user && user.username}</h5>
            <button onClick={handleLogout}>Logout</button> */}
        </Link>
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
