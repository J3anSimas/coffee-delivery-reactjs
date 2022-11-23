import {
  CoffeeItemCategories,
  CoffeItemContainer,
  Order,
  Price,
  PriceAndOrderContainer
} from './coffee-item.styles'
import AmericanCoffee from '../../../../assets/coffees/Americano.png'
import { ShoppingCartSimple } from 'phosphor-react'
// eslint-disable-next-line max-len
import AddOrRemoveItem from '../../../../components/AddOrRemoveItem/add-or-remove-item.component'
export default function CoffeeItem(): JSX.Element {
  return (
    <CoffeItemContainer>
      <img src={AmericanCoffee} alt="" />
      <CoffeeItemCategories>
        <span>ESPECIAL</span>
        <span>GELADO</span>
        <span>ALCOÓLICO</span>
      </CoffeeItemCategories>
      <h1>Café com Leite</h1>
      <p>Bebida feita com chocolate dissolvido no leite quente e café</p>
      <PriceAndOrderContainer>
        <Price>
          <span className="label-price">R$</span>
          <span className="price-value">9,90</span>
        </Price>
        <Order>
          <AddOrRemoveItem />
          <button>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </Order>
      </PriceAndOrderContainer>
    </CoffeItemContainer>
  )
}
