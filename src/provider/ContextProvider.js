import React, {useState} from 'react'
import Context from '../context/StoreContext'
// import {useStaticQuery} from 'gatsby'

const ContextProvider = ({children}) => {
  let initialStoreState = {
    // client,
    adding: false,
    checkout: {lineItems: []},
    products: [],
    // shop: {},
  }
  const [store, updateStore] = useState(initialStoreState)
  // let isRemoved = false

  return (
    <Context.Provider
      value={{
        store,
        updateLineItem: (price, quantity) => {
          const lineItemsToUpdate = [{price, quantity}]

          return updateStore(prevState => {
            return {...prevState, checkout: lineItemsToUpdate}
          })
        },
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
