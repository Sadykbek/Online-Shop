import { create} from 'zustand'
import { persist } from 'zustand/middleware'
interface CartState {
   cart: any[],
   addToCart: (product: any) => void,
   removeFromCart: (product: any) => void,
   clearCart: () => void
}

export const useCartStore = create<CartState>()(persist(set => ({
   cart: [],
   addToCart: (product: any) => set((state: any) => ({ cart: [...state.cart, product] })),
   removeFromCart: (product: any) => set((state: any) => ({ cart: state.cart.filter((p: any) => p.id !== product.id) })),
   clearCart: () => set({ cart: [] }),
})
, {
   name: 'cart-storage'
}))
