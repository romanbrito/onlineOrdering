import React from 'react'
// import PropTypes from 'prop-types'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Card from '../Card'
import {Cards} from './styles'

const API_URL = process.env.API_URL || 'http://localhost:1337'

export const PureProductList = ({data}) => {
  const items = data ? data.allStrapiMcallenproduct.edges : []

  const getItemsIn = category => {
    return items.filter(item => item.node.product.category === category)
  }

  const buildCategories = items => {
    return items.reduce((allCategories, item) => {
      const category = item.node.product.category
      if (allCategories[category]) {
        // do nothing
      } else {
        allCategories[category] = [...getItemsIn(category)]
      }
      return allCategories
    }, {})
  }

  return items.length ? (
    <Cards>
      {console.log(buildCategories(items))}
      {items.map(el => (
        <Link to={`/product/${el.node.name}`} key={el.node.id}>
          <Card
            name={el.node.name}
            image={`${API_URL}${el.node.product.images[0].formats.thumbnail.url}`}
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
              category
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
