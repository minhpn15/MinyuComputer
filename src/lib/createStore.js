import create from 'zustand'
import { persist } from 'zustand/middleware'

const createStore = () =>
  create(
    persist(
      (set, get) => ({
        // user
        profile: null,
        setProfile: p => set({ profile: p }),
        removeProfile: () => set({ profile: null }),
        // cart
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
        name: 'app-storage'
      }
    )
  )

export default createStore
