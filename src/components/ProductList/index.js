import React from 'react'
// import PropTypes from 'prop-types'
import {useStaticQuery, graphql, Link} from 'gatsby'

export const PureProductList = ({data}) => {
  return (
    <ul>
      {data.allStrapiMcallenproduct.edges.map(el => (
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
      allStrapiMcallenproduct {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `)

  return <PureProductList {...props} data={data}></PureProductList>
}
export default ProductList
