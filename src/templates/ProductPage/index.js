import React from 'react'
import {graphql} from 'gatsby'

export const PureProductPage = ({data}) => {
  const product = data.strapiMcallenproduct
  return (
    <>
      <h1>{product.name}</h1>
    </>
  )
}

export const query = graphql`
  query($UID: String!) {
    strapiMcallenproduct(UID: {eq: $UID}) {
      id
      name
    }
  }
`

export default PureProductPage
