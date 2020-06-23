import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import ProductList from '../components/ProductList'

import Checkout from '../components/checkout'
import Skus from '../components/Skus'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProductList />
    <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Skus />
    <Checkout />
  </Layout>
)

export default IndexPage
