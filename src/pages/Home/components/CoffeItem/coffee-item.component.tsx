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
import { useState } from 'react'

type TCoffeeItemProps = {
  name: string
  tags: string[]
  description: string
  cost: number
  imageUrl: string
}
export default function CoffeeItem({
  name,
  tags,
  description,
  cost,
  imageUrl
}: TCoffeeItemProps): JSX.Element {
  const [quantity, setQuantity] = useState(1)

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
          <span className="price-value">{cost.toFixed(2)}</span>
        </Price>
        <Order>
          <AddOrRemoveItem
            quantity={quantity}
            minusFunc={() => setQuantity(quantity - 1)}
            plusFunc={() => setQuantity(quantity + 1)}
          />
          <button>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </Order>
      </PriceAndOrderContainer>
    </CoffeItemContainer>
  )
}
