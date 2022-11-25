import { createContext, ReactNode, useContext, useState } from 'react'

export type TCartItem = {
  cartId: string
  coffeeId: number
  quantity: number
}
type TCartContext = {
  cartItems: TCartItem[]
  addItemToCart: ({
    coffeeId,
    quantity
  }: {
    coffeeId: number
    quantity: number
  }) => void
  removeCartItemFromList: (cartId: string) => void
  getCartItemFromId: (cartId: string) => TCartItem | undefined
  amountCartItems: number
}

export const CartContext = createContext<TCartContext>({} as TCartContext)

type TCartContextProviderProps = {
  children: ReactNode
}

export function CartContextProvider({
  children
}: TCartContextProviderProps): JSX.Element {
  const [cartItems, setCartItems] = useState<TCartItem[]>([])
  const [amountCartItems, setAmountCartItems] = useState(0)

  function addItemToCart({
    coffeeId,
    quantity
  }: {
    coffeeId: number
    quantity: number
  }): void {
    setCartItems((state) => [
      ...state,
      { cartId: new Date().getTime().toString(), coffeeId, quantity }
    ])
    setAmountCartItems((state) => state + quantity)
  }

  function removeCartItemFromList(cartId: string): void {
    const cartItem = getCartItemFromId(cartId)
    if (cartItem !== undefined) {
      setAmountCartItems((state) => state - cartItem.quantity)
      const newList = cartItems.filter((cartItem) => cartItem.cartId !== cartId)
      setCartItems(newList)
    }
  }

  function getCartItemFromId(cartId: string): TCartItem | undefined {
    const cartItem = cartItems.find((cartT) => cartT.cartId === cartId)
    return cartItem
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        amountCartItems,
        getCartItemFromId,
        removeCartItemFromList
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): TCartContext {
  const {
    addItemToCart,
    amountCartItems,
    cartItems,
    getCartItemFromId,
    removeCartItemFromList
  } = useContext(CartContext)
  return {
    cartItems,
    addItemToCart,
    amountCartItems,
    getCartItemFromId,
    removeCartItemFromList
  }
}
