import React from 'react'
import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import useAuthState from '../hooks/useAuthState'

const Header = ({siteTitle}) => {
  const {user} = useAuthState()

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
