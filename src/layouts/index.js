/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import {useStaticQuery, graphql} from 'gatsby'
// import ContextProvider from '../provider/ContextProvider'
import AuthProvider from '../provider/AuthProvider'
import {loadStripe} from '@stripe/stripe-js'
import {CartProvider} from 'use-shopping-cart'
import {Elements} from '@stripe/react-stripe-js'
import {Global} from '@emotion/core'

import Header from '../components/Header'
import layoutStyles from './layout-styles'

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)

const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <AuthProvider>
      <CartProvider currency="USD">
        <Elements stripe={stripePromise}>
          <Global styles={layoutStyles} />
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0 1.0875rem 1.45rem`,
            }}
          >
            <main>{children}</main>
          </div>
        </Elements>
      </CartProvider>
    </AuthProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/*
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
*/
