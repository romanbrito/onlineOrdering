import React from 'react'
import {graphql, Link} from 'gatsby'
// import StoreContext from '../../context/StoreContext'
import {useShoppingCart} from 'use-shopping-cart'

export const PureProductPage = ({data}) => {
  // const {store, updateLineItem} = useContext(StoreContext)
  console.log(useShoppingCart())

  const {
    totalPrice,
    redirectToCheckout,
    cartCount,
    clearCart,
    addItem,
  } = useShoppingCart()

  const product = data.strapiMcallenproduct
  console.log(product)
  const {images, description} = data.strapiMcallenproduct.product
  return (
    <>
      <h1>{product.name}</h1>
      <h2>{description}</h2>
      <img
        src={`http://localhost:1337${images[0].formats.thumbnail.url}`}
        alt={product.name}
      />
      {/* <button onClick={() => addItem('price_HL8k4OzmMCepIk')}> */}
      <button
        onClick={() =>
          addItem({
            name: product.name,
            description,
            sku: 'price_HL8k4OzmMCepIk',
            price: 400,
            currency: 'USD',
            image: `http://localhost:1337${images[0].formats.thumbnail.url}`,
          })
        }
      >
        Upldate line item
      </button>
      <button onClick={redirectToCheckout}>checkout test</button>
      <button onClick={clearCart}>Clear Cart</button>
      <Link to="/cart">Cart</Link>
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
    }
  }
`

export default PureProductPage
