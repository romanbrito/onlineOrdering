import React from 'react'
// import PropTypes from 'prop-types'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Card from '../Card'
import {Cards} from './styles'

export const PureProductList = ({data}) => {
  const items = data ? data.allStrapiMcallenproduct.edges : []

  return items.length ? (
    <Cards>
      {items.map(el => (
        <Link to={`/product/${el.node.name}`} key={el.node.id}>
          <Card
            name={el.node.name}
            image={el.node.product.images[0].formats.thumbnail.url}
            description={el.node.product.description}
          />
        </Link>
      ))}
    </Cards>
  ) : (
    <div className="no-items">No items</div>
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
            product {
              description
              images {
                formats {
                  thumbnail {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  return <PureProductList {...props} data={data}></PureProductList>
}

export default ProductList
