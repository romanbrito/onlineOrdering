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
  // const data = useStaticQuery(graphql`
  //   query {
  //     allStrapiMcallenproduct {
  //       edges {
  //         node {
  //           id
  //           name
  //           product {
  //             description
  //             images {
  //               formats {
  //                 thumbnail {
  //                   url
  //                 }
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  const data = {
    allStrapiMcallenproduct: {
      edges: [
        {
          node: {
            id: 1,
            name: 'food1',
            product: {
              description: 'product 1',
              images: [
                {
                  formats: {
                    thumbnail: {
                      url: 'https://picsum.photos/id/1043/200/200.jpg',
                    },
                  },
                },
              ],
            },
          },
        },
        {
          node: {
            id: 2,
            name: 'food2',
            product: {
              description: 'product 2',
              images: [
                {
                  formats: {
                    thumbnail: {
                      url: 'https://picsum.photos/id/1043/200/200.jpg',
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    },
  }

  return <PureProductList {...props} data={data}></PureProductList>
}

export default ProductList
