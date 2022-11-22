import {
  CoffeeItemCategories,
  CoffeItemContainer,
  Order,
  Price,
  PriceAndOrderContainer
} from './coffee-item.styles'
import AmericanCoffee from '../../../../assets/coffees/Americano.png'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
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
          <span>
            <button>
              <Minus weight="bold" />
            </button>
            <span>1</span>
            <button>
              <Plus weight="bold" />
            </button>
          </span>
          <button>
            <ShoppingCartSimple size={22} weight="fill" />
          </button>
        </Order>
      </PriceAndOrderContainer>
    </CoffeItemContainer>
  )
}
