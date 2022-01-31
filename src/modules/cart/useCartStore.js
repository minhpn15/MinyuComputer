import create from 'zustand'
import { persist } from 'zustand/middleware'

const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [
        {
          id: 1,
          name: 'asus',
          price: '123000',
          amount: 1
        },
        {
          id: 2,
          name: 'msi',
          price: '999999',
          amount: 2
        }
      ],
      addAFish: () => set({ fishes: get().fishes + 1 }),
      addProductToCart: product =>
        set(state => ({ cart: [...state.cart, product] })),
      removeProduct: product =>
        set(state => ({ cart: state.cart.filter(p => p.id !== product.id) }))
    }),
    {
      name: 'cart-storage'
    }
  )
)

export default useCartStore
