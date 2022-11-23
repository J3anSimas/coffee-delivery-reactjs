import { Minus, Plus } from 'phosphor-react'
import { AddOrRemoveItemContainer } from './add-or-remove-item.styles'

export default function AddOrRemoveItem(): JSX.Element {
  return (
    <AddOrRemoveItemContainer>
      <button>
        <Minus weight="bold" />
      </button>
      <span>1</span>
      <button>
        <Plus weight="bold" />
      </button>
    </AddOrRemoveItemContainer>
  )
}
