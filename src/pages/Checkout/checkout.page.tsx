import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from 'phosphor-react'
import React, { ButtonHTMLAttributes, ReactHTMLElement, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useCart } from '../../contexts/cart.context'
import {
  CheckoutContainer,
  CompleteOrderForm,
  InputFieldsContainer,
  PaymentTypeCard,
  SelectedCoffeesAndConfirmContainer,
  SelectedCoffeesList
} from './checkout.styles'
import CartItem from './components/CartItem/cart-item.component'
// eslint-disable-next-line max-len
import CheckoutDescription from './components/CheckoutDescription/checkout-description.component'

type TPaymentMethod = undefined | 'creditCard' | 'debitCard' | 'money'

export default function Checkout(): JSX.Element {
  const { amountCartItems, cartItems } = useCart()
  const [paymentMethod, setPaymentMethod] = useState<TPaymentMethod>()
  if (amountCartItems <= 0) return <Navigate to="/" />

  function handleSelectPaymentMethod(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    setPaymentMethod(e.currentTarget.name as TPaymentMethod)
  }
  return (
    <CheckoutContainer>
      <CompleteOrderForm>
        <h2>Complete seu pedido</h2>
        <div>
          <div className="container-description">
            <MapPinLine size={22} className="container-description-map-pin" />
            <span>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </span>
          </div>
          <InputFieldsContainer>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </InputFieldsContainer>
        </div>
        <div>
          <div className="container-description">
            <CurrencyDollar
              size={22}
              className="container-description-currency-dollar"
            />
            <span>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </span>
          </div>
          <ul>
            <PaymentTypeCard
              type="button"
              name="creditCard"
              disabled={paymentMethod === 'creditCard'}
              onClick={(e) => handleSelectPaymentMethod(e)}
            >
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </PaymentTypeCard>
            <PaymentTypeCard
              type="button"
              name="debitCard"
              disabled={paymentMethod === 'debitCard'}
              onClick={(e) => handleSelectPaymentMethod(e)}
            >
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </PaymentTypeCard>
            <PaymentTypeCard
              type="button"
              name="money"
              disabled={paymentMethod === 'money'}
              onClick={(e) => handleSelectPaymentMethod(e)}
            >
              <Money size={16} />
              DINHEIRO
            </PaymentTypeCard>
          </ul>
        </div>
      </CompleteOrderForm>
      <SelectedCoffeesAndConfirmContainer>
        <h2>Cafés selecionados</h2>
        <div>
          <SelectedCoffeesList>
            {cartItems.map(({ cartId }) => (
              <React.Fragment key={cartId}>
                <CartItem cartId={cartId} />
                <div className="line-divider"></div>
              </React.Fragment>
            ))}
          </SelectedCoffeesList>
          <CheckoutDescription />

          <button className="button-confirm-checkout">CONFIRMAR PEDIDO</button>
        </div>
      </SelectedCoffeesAndConfirmContainer>
    </CheckoutContainer>
  )
}
