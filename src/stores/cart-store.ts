import { ProductProps } from "@/utils/data/products";
import { create } from "zustand";
import * as cartInMemopry from "./helpers/cart-in-memory";

export type ProductCartProps = ProductProps & {
  quantity: number
}

type StateProps = {
  products: ProductCartProps[]
  add: (product: ProductProps) => void
}

export const useCartStore = create<StateProps>((set) => ({
  products: [],
  add: (product: ProductProps) => set((state) => ({
    products: cartInMemopry.add(state.products, product),
  }))
}))