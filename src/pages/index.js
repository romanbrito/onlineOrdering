import React from 'react'
import {Link} from 'gatsby'

import Image from '../components/image'
import SEO from '../components/seo'
import ProductList from '../components/ProductList'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <ProductList />
    <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </>
)

export default IndexPage
