import React from 'react'
// import PropTypes from 'prop-types'
import {useStaticQuery, graphql, Link} from 'gatsby'
import {Card} from './styles'

export const PureProductList = ({data}) => {
  console.log(data)
  return (
    <ul>
      {data.allStrapiMcallenproduct.edges.map(el => (
        <Card key={el.node.id}>
          <Link to={`/product/${el.node.name}`}>
            <h3 className="product-name">{el.node.name}</h3>
            <img
              className="product-image"
              src={`http://localhost:1337${el.node.product.images[0].formats.thumbnail.url}`}
              alt={el.node.name}
            />
            <p className="product-description">Description</p>
            <p className="product-price">$0.00</p>
          </Link>
        </Card>
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
            product {
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
