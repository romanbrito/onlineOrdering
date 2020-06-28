import React from 'react'
import {graphql, Link} from 'gatsby'
// import StoreContext from '../../context/StoreContext'
import {useShoppingCart} from 'use-shopping-cart'
import {ProdNav} from './styles'
import ClosePage from '../../components/ClosePage'
import Price from '../../components/Price'
import CartLink from '../../components/Cart/CartLink'

export const PureProductPage = ({data}) => {
  // const {store, updateLineItem} = useContext(StoreContext)
  console.log(useShoppingCart())

  const {
    totalPrice,
    redirectToCheckout,
    cartCount,
    clearCart,
    addItem,
    decrementItem,
    incrementItem,
    cartDetails,
  } = useShoppingCart()

  const handleAddItem = (item, itemDetails) => {
    if (itemDetails) {
      incrementItem(item.sku)
    } else {
      addItem(item)
    }
  }

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
        handleAddItem={handleAddItem}
        decrementItem={decrementItem}
        product={product}
      />
      <ProdNav>
        <Link to="/">Add more food</Link>
        <CartLink />
      </ProdNav>
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
