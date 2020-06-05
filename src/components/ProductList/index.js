import React from 'react'
// import PropTypes from 'prop-types'
import {useStaticQuery, graphql} from 'gatsby'

export const PureProductList = ({data}) => {
  return <div>Product List Component</div>
}

export const ProductList = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return <PureProductList {...props} data={data}></PureProductList>
}
export default ProductList
