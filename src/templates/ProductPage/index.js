import React from 'react'
import {graphql} from 'gatsby'
// import StoreContext from '../../context/StoreContext'
import {useShoppingCart} from 'use-shopping-cart'
import ClosePage from '../../components/ClosePage'
import Price from '../../components/Price'

export const PureProductPage = ({data}) => {
  // const {store, updateLineItem} = useContext(StoreContext)
  console.log(useShoppingCart())

  const {
    totalPrice,
    redirectToCheckout,
    cartCount,
    clearCart,
    addItem,
    cartDetails,
  } = useShoppingCart()

  const product = data.strapiMcallenproduct
  const {images, description} = data.strapiMcallenproduct.product
  return (
    <>
      <ClosePage />
      <h1>{product.name}</h1>
      <h2>{description}</h2>
      <img
        src={`http://localhost:1337${images[0].formats.thumbnail.url}`}
        alt={product.name}
      />
      <Price
        price={product.mcallenprices}
        cartDetails={cartDetails}
        addItem={addItem}
        product={product}
      />
    </>
  )
}

export const query = graphql`
  query($UID: String!) {
    strapiMcallenproduct(UID: {eq: $UID}) {
      id
      name
      product {
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
      mcallenprices {
        uid
        unit_amount
        description
        currency
      }
    }
  }
`

export default PureProductPage
