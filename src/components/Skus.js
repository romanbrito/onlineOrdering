import React from 'react'
import {graphql, StaticQuery} from 'gatsby'

import {loadStripe} from '@stripe/stripe-js'

const containerStyles = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  padding: '1rem 0 1rem 0',
}

// const stripePromise = loadStripe('pk_test_tccKylDhwDhT44s6rtpyJFfL')

const Skus = () => {
  return (
    // <StaticQuery
    //   query={graphql`
    //     query SkusForProduct {
    //       skus: allStripeSku{
    //         edges {
    //           node {
    //             id
    //             currency
    //             price
    //             attributes {
    //               name
    //             }
    //           }
    //         }
    //       }
    //     }
    //   `}
    //   render={({ skus }) => (
    //     <div style={containerStyles}>
    //       {console.log(skus)}
    //     </div>
    //   )}
    // />
    <h1>Skus</h1>
  )
}

export default Skus
