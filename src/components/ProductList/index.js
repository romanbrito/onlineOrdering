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

  const toggleCategories = e => {
    const categories = document.querySelectorAll('.category')
    categories.forEach(
      category => category !== e.target && category.classList.add('hide'),
    )
    e.target.classList.contains('hide')
      ? e.target.classList.remove('hide')
      : e.target.classList.add('hide')
  }

  return items.length ? (
    <Cards>
      {Object.keys(buildCategories(items)).map(category => (
        <section key={category} className={category}>
          <h2 onClick={toggleCategories} className="category hide">
            {category.replace('_', ' ')}
          </h2>

          {buildCategories(items)[category].map(el => (
            <Link to={`/product/${el.node.name}`} key={el.node.id}>
              <Card
                name={el.node.name}
                image={`${API_URL}${el.node.product.images[0].formats.thumbnail.url}`}
                description={el.node.product.description}
              />
            </Link>
          ))}
        </section>
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
