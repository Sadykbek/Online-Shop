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


interface ProductState {
   products: any[],
   addToFavorite: (product: any) => void,
   removeFromFavorite: (product: any) => void,
   clearFavorite: () => void
}

export const useFavoriteStore = create<ProductState>()(persist(set => ({
   products: [],
   addToFavorite: (product: any) => set((state: any) => ({ products: [...state.products, product] })),
   removeFromFavorite: (product: any) => set((state: any) => ({ products: state.products.filter((p: any) => p.id !== product.id) })),
   clearFavorite: () => set({ products: [] }),
})
, {
   name: 'favorite-storage'
}))