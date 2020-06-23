import React, {useState, useEffect} from 'react'
import Context from '../context/StoreContext'
import {useStaticQuery} from 'gatsby'

const ContextProvider = ({children}) => {
  let initialStoreState = {
    adding: false,
    checkout: {lineItems: []},
    products: [],
    shop: {},
  }
  const [store, updateStore] = useState(initialStoreState)
  let isRemoved = false

  return <Context.Provider>{children}</Context.Provider>
}

export default ContextProvider
