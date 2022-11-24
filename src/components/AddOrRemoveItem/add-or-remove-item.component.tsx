import { Minus, Plus } from 'phosphor-react'
import { AddOrRemoveItemContainer } from './add-or-remove-item.styles'

type TAddOrRemoveItemProps = {
  quantity: number
  minusFunc: () => void
  plusFunc: () => void
}
export default function AddOrRemoveItem({
  quantity,
  minusFunc,
  plusFunc
}: TAddOrRemoveItemProps): JSX.Element {
  return (
    <AddOrRemoveItemContainer>
      <button onClick={minusFunc}>
        <Minus weight="bold" />
      </button>
      <span>{quantity}</span>
      <button onClick={plusFunc}>
        <Plus weight="bold" />
      </button>
    </AddOrRemoveItemContainer>
  )
}
