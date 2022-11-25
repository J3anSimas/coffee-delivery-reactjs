import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { AddOrRemoveItemContainer } from './add-or-remove-item.styles'

type TAddOrRemoveProps = {
  quantity: number
  onDecrease: () => void
  onIncrease: () => void
}
export default function AddOrRemoveItem({
  quantity,
  onDecrease,
  onIncrease
}: TAddOrRemoveProps): JSX.Element {
  function handleDecreaseQuantity(): void {
    onDecrease()
  }

  function handleIncreaseQuantity(): void {
    onIncrease()
  }
  return (
    <AddOrRemoveItemContainer>
      <button onClick={handleDecreaseQuantity}>
        <Minus weight="bold" />
      </button>
      <span>{quantity}</span>
      <button onClick={handleIncreaseQuantity}>
        <Plus weight="bold" />
      </button>
    </AddOrRemoveItemContainer>
  )
}
