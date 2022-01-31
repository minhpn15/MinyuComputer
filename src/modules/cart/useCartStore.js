import create from 'zustand'
import { persist } from 'zustand/middleware'

const useCartStore = () =>
  create(
    persist(
      (set, get) => ({
        cart: [],
        addProductToCart: product => {
          const cart = get().cart
          const added = cart.find(p => p.id === product.id)
          if (added) {
            set(state => ({
              cart: state.cart.map(p => {
                if (p.id !== product.id) return p
                return { ...p, amount: p.amount + 1 }
              })
            }))
          } else
            set(state => ({ cart: [...state.cart, { ...product, amount: 1 }] }))
        },
        removeProduct: product =>
          set(state => ({ cart: state.cart.filter(p => p.id !== product.id) }))
      }),
      {
        name: 'cart-storage'
      }
    )
  )

export default useCartStore
