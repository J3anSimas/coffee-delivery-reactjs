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
  addCartItemQuantityByOne: (cartId: string) => void
  subCartItemQuantityByOne: (cartId: string) => void
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

  function addCartItemQuantityByOne(cartId: string): void {
    const newList = cartItems.map((cartItem) => {
      if (cartItem.cartId === cartId) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1
        }
      }
      return cartItem
    })
    setCartItems(newList)
    setAmountCartItems((state) => state + 1)
  }

  function subCartItemQuantityByOne(cartId: string): void {
    const newList = cartItems.map((cartItem) => {
      if (cartItem.cartId === cartId) {
        return {
          ...cartItem,
          quantity: cartItem.quantity - 1
        }
      }
      return cartItem
    })
    setCartItems(newList)
    setAmountCartItems((state) => state - 1)
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
        addCartItemQuantityByOne,
        subCartItemQuantityByOne,
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
    removeCartItemFromList,
    addCartItemQuantityByOne,
    subCartItemQuantityByOne
  } = useContext(CartContext)
  return {
    cartItems,
    addItemToCart,
    amountCartItems,
    getCartItemFromId,
    removeCartItemFromList,
    addCartItemQuantityByOne,
    subCartItemQuantityByOne
  }
}
