import { useEffect, useState } from 'react'
import { useCart } from '../../../../contexts/cart.context'
import { useCoffeeItems } from '../../../../contexts/coffee-items-list.context'
import { CheckoutDescriptionContainer } from './checkout-description.styles'

export default function CheckoutDescription(): JSX.Element {
  const { cartItems } = useCart()
  const { getCoffeeItemFromId } = useCoffeeItems()
  const [totalCoffeesPrice, setTotalCoffeesPrice] = useState(0)

  const deliveryTax = 4.5
  useEffect(() => {
    const totalPrice = cartItems.reduce((sum, cartItem) => {
      const coffeePrice = getCoffeeItemFromId(cartItem.coffeeId).price
      return sum + coffeePrice * cartItem.quantity
    }, 0)
    setTotalCoffeesPrice(totalPrice)
  }, [cartItems])

  return (
    <CheckoutDescriptionContainer>
      <div>
        <span>Total de itens</span>
        <span>R$ {totalCoffeesPrice.toFixed(2).replace(`.`, `,`)}</span>
      </div>
      <div>
        <span>Entrega</span>
        <span>R$ {deliveryTax.toFixed(2).replace(`.`, `,`)}</span>
      </div>
      <div className="total-description-checkout">
        <span>Total</span>
        <span>
          R$ {(totalCoffeesPrice + deliveryTax).toFixed(2).replace(`.`, `,`)}
        </span>
      </div>
    </CheckoutDescriptionContainer>
  )
}
