import {
  CoffeeItemTags,
  CoffeItemContainer,
  Order,
  Price,
  PriceAndOrderContainer
} from './coffee-item.styles'
import { ShoppingCartSimple } from 'phosphor-react'
// eslint-disable-next-line max-len
import AddOrRemoveItem from '../../../../components/AddOrRemoveItem/add-or-remove-item.component'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/cart.context'

type TCoffeeItemProps = {
  id: number
  name: string
  tags: string[]
  description: string
  price: number
  imageUrl: string
}
export default function CoffeeItem({
  id,
  name,
  tags,
  description,
  price,
  imageUrl
}: TCoffeeItemProps): JSX.Element {
  const { addItemToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  function onDecrease(): void {
    if (quantity > 1) setQuantity((state) => state - 1)
  }
  function onIncrease(): void {
    setQuantity((state) => state + 1)
  }

  function handleAddToCartButton(): void {
    addItemToCart({ coffeeId: id, quantity })
    setQuantity(1)
  }
  return (
    <CoffeItemContainer>
      <img src={`coffees/${imageUrl}`} alt="" />
      <CoffeeItemTags>
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </CoffeeItemTags>
      <h1>{name}</h1>
      <p>{description}</p>
      <PriceAndOrderContainer>
        <Price>
          <span className="label-price">R$ </span>
          <span className="price-value">
            {price.toFixed(2).replace('.', ',')}
          </span>
        </Price>
        <Order>
          <AddOrRemoveItem
            quantity={quantity}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
          />
          <button onClick={handleAddToCartButton}>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </Order>
      </PriceAndOrderContainer>
    </CoffeItemContainer>
  )
}
