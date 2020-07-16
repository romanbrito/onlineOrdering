import React from 'react'
// import PropTypes from 'prop-types'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Card from '../Card'
import {Cards} from './styles'

export const PureProductList = ({data}) => {
  return (
    <Cards>
      {data.allStrapiMcallenproduct.edges.map(el => (
        <Link to={`/product/${el.node.name}`} key={el.node.id}>
          <Card
            name={el.node.name}
            image={el.node.product.images[0].formats.thumbnail.url}
            description={el.node.product.description}
          />
        </Link>
      ))}
    </Cards>
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
            name: 'food',
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
      ],
    },
  }

  return <PureProductList {...props} data={data}></PureProductList>
}

export default ProductList
