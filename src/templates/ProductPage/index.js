import React from 'react'
import {graphql, Link} from 'gatsby'
// import StoreContext from '../../context/StoreContext'
import {useShoppingCart} from 'use-shopping-cart'
import {ProdNav} from './styles'
import ClosePage from '../../components/ClosePage'
import Card from '../../components/ProductCard'
import Price from '../../components/Price'
import CartLink from '../../components/Cart/CartLink'

// export const PureProductPage = ({data}) => {
export const PureProductPage = () => {
  // const {store, updateLineItem} = useContext(StoreContext)

  // todo: remove fixture data
  const data = {
    strapiMcallenproduct: {
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
              medium: {
                url: 'https://picsum.photos/id/1043/400/400.jpg',
              },
            },
          },
        ],
      },
      mcallenprices: [
        {
          uid: 'price1',
          description: 'regular',
          unit_amount: '789',
          currency: 'usd',
        },
        {
          uid: 'price2',
          description: 'large',
          unit_amount: '1000',
          currency: 'usd',
        },
      ],
    },
  }
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
  console.log(product)
  return (
    <>
      <ClosePage />
      <Card
        name={product.name}
        description={description}
        image={images[0].formats.medium.url}
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

  // return (<div>hello</div>)
}

// Get product data from strapi using UID: product, description, images, prices and modifiers
// export const query = graphql`
//   query($UID: String!) {
//     strapiMcallenproduct(UID: {eq: $UID}) {
//       id
//       name
//       product {
//         description
//         images {
//           formats {
//             medium {
//               url
//             }
//             small {
//               url
//             }
//             thumbnail {
//               url
//             }
//           }
//         }
//       }
//       mcallenprices {
//         uid
//         unit_amount
//         description
//         currency
//       }
//     }
//   }
// `

export default PureProductPage
