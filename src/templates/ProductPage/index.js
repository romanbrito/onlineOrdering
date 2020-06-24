import React, {useContext} from 'react'
import {graphql} from 'gatsby'
import StoreContext from '../../context/StoreContext'

export const PureProductPage = ({data}) => {
  // console.log(useContext(StoreContext))
  const {store, updateLineItem} = useContext(StoreContext)

  const product = data.strapiMcallenproduct
  const {images, description} = data.strapiMcallenproduct.product

  return (
    <>
      <h1>{product.name}</h1>
      <h2>{description}</h2>
      <img
        src={`http://localhost:1337${images[0].formats.thumbnail.url}`}
        alt={product.name}
      />
      <button onClick={() => updateLineItem('price_HL8k4OzmMCepIk', 1)}>
        Upldate line item
      </button>
      {console.log(store)}
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
