import { CoffeeItemContainer } from './coffee-item.styles'
import { Trash } from 'phosphor-react'
// eslint-disable-next-line max-len
import AddOrRemoveItem from '../../../../components/AddOrRemoveItem/add-or-remove-item.component'

export default function CoffeeItem(): JSX.Element {
  return (
    <CoffeeItemContainer>
      <img src={`coffees/${'Americano.png'}`} alt="" />
      <span>
        <p>Expresso Tradicional</p>
        <span>
          <AddOrRemoveItem />
          <button>
            <Trash size={16} />
            <span>REMOVER</span>
          </button>
        </span>
      </span>
      <span>
        <p>R$ 9,89</p>
      </span>
    </CoffeeItemContainer>
  )
}
