import React from 'react'

import SEO from '../components/seo'
import ProductList from '../components/ProductList'
import CartLink from '../components/Cart/CartLink'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <ProductList />
    <CartLink />
  </>
)

export default IndexPage
