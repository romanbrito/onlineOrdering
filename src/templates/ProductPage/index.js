import React from 'react'
import {graphql, Link} from 'gatsby'
import SEO from '../../components/seo'
import {useShoppingCart} from 'use-shopping-cart'
import {ProdNav} from './styles'
import Card from '../../components/ProductCard'
import Price from '../../components/Price'
import CartLink from '../../components/Cart/CartLink'
import {API_URL} from '../../config/api'

export const PureProductPage = ({data}) => {
  const {addItem, decrementItem, incrementItem, cartDetails} = useShoppingCart()

  const handleAddItem = (item, itemDetails, quantity) => {
    if (itemDetails) {
      incrementItem(item.sku, quantity)
    } else {
      addItem(item, quantity)
    }
  }

  const product = data.strapiMcallenproduct
  const {images, description} = data.strapiMcallenproduct.product
  //remove
  console.log('api url', API_URL)
  console.log('process api', process.env.API_URL)

  return (
    <>
      <SEO title={product.name} description={description} />
      <Card
        name={product.name}
        description={description}
        image={`${API_URL}${images[0].formats.small.url}`}
      />
      <Price
        price={product.mcallenprice}
        cartDetails={cartDetails}
        handleAddItem={handleAddItem}
        decrementItem={decrementItem}
        product={product.product}
      />
      <ProdNav>
        <Link to="/">Add more food</Link>
        <CartLink />
      </ProdNav>
    </>
  )
}

// Get product data from strapi using UID: product, description, images, prices and modifiers
export const query = graphql`
  query($id: String!) {
    strapiMcallenproduct(id: {eq: $id}) {
      id
      name
      product {
        name
        description
        images {
          formats {
            medium {
              url
            }
            small {
              url
            }
            thumbnail {
              url
            }
          }
        }
      }
      mcallenprice {
        id
        name
        unit_amount
        description
        currency
        modifiers {
          product_modifiers
        }
      }
    }
  }
`

export default PureProductPage
