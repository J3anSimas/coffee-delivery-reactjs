import { CoffeeItemContainer } from './cart-item.styles'
import { Trash } from 'phosphor-react'
// eslint-disable-next-line max-len
import AddOrRemoveItem from '../../../../components/AddOrRemoveItem/add-or-remove-item.component'
import { TCartItem, useCart } from '../../../../contexts/cart.context'
import { useEffect, useState } from 'react'
import {
  TCoffeeItem,
  useCoffeeItems
} from '../../../../contexts/coffee-items-list.context'

type TCartItemProps = {
  cartId: string
}
export default function CartItem({ cartId }: TCartItemProps): JSX.Element {
  const {
    cartItems,
    getCartItemFromId,
    removeCartItemFromList,
    addCartItemQuantityByOne,
    subCartItemQuantityByOne
  } = useCart()
  const { getCoffeeItemFromId } = useCoffeeItems()
  const [cartItem, setCartItem] = useState<TCartItem | undefined>()
  const [coffeeItem, setCoffeeItem] = useState<TCoffeeItem | undefined>()

  useEffect(() => {
    const tempCartItem = getCartItemFromId(cartId)
    if (tempCartItem != null) {
      setCartItem(tempCartItem)
      setCoffeeItem(getCoffeeItemFromId(tempCartItem.coffeeId))
    }
  }, [cartItems])

  function handleRemoveCartItemFromList(): void {
    if (cartItem !== undefined) removeCartItemFromList(cartId)
  }

  function onDecrease(): void {
    subCartItemQuantityByOne(cartId)
  }

  function onIncrease(): void {
    addCartItemQuantityByOne(cartId)
  }
  return (
    <CoffeeItemContainer>
      <img
        src={`coffees/${coffeeItem !== undefined ? coffeeItem?.imageUrl : ''}`}
        alt=""
      />
      <span className="second-column-container">
        <p>{coffeeItem?.name}</p>
        <span>
          {cartItem != null ? (
            <AddOrRemoveItem
              quantity={cartItem.quantity}
              onDecrease={onDecrease}
              onIncrease={onIncrease}
            />
          ) : (
            <span>Loading</span>
          )}

          <button onClick={handleRemoveCartItemFromList}>
            <Trash size={16} />
            <span>REMOVER</span>
          </button>
        </span>
      </span>
      <span>
        <p>R$ {coffeeItem?.price.toFixed(2).replace('.', ',')}</p>
      </span>
    </CoffeeItemContainer>
  )
}
