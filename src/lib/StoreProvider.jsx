import React from 'react'
import createContext from 'zustand/context'
import useCartStore from '@/modules/cart/useCartStore'

const { Provider, useStore } = createContext()

export { useStore }

export default ({ children }) => {
  return <Provider createStore={useCartStore}>{children}</Provider>
}
