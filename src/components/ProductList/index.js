import React from 'react'
// import PropTypes from 'prop-types'
import {useStaticQuery, graphql} from 'gatsby'

export const PureProductList = ({data}) => {
  console.log(data)

  return <div>Product List Component</div>
}

export const ProductList = props => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiDish {
        edges {
          node {
            id
            name
            price
          }
        }
      }
    }
  `)

  return <PureProductList {...props} data={data}></PureProductList>
}
export default ProductList
