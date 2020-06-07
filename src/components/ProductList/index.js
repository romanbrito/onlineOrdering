import React from 'react'
// import PropTypes from 'prop-types'
import {useStaticQuery, graphql, Link} from 'gatsby'

export const PureProductList = ({data}) => {
  console.log(data)

  return (
    <ul>
      {data.allStrapiDish.edges.map(el => (
        <li key={el.node.id}>
          <Link to={`/product/${el.node.name}`}>{el.node.name}</Link>
        </li>
      ))}
    </ul>
  )
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
