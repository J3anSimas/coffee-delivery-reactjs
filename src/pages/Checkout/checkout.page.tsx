import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from 'phosphor-react'
import React, { useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom'
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

const deliveryAdressFormValidationSchema = z.object({
  cep: z.string().length(8, 'The Cep input must have 8 chars'),
  street: z.string().min(3),
  num: z.string().min(1),
  complement: z.string().optional(),
  district: z.string().min(1),
  city: z.string().min(1),
  uf: z.string().length(2)
})

type TDeliveryAddressFormData = z.infer<
  typeof deliveryAdressFormValidationSchema
>

export default function Checkout(): JSX.Element {
  const { amountCartItems, cartItems, setNewDeliveryAddress } = useCart()
  const [paymentMethod, setPaymentMethod] = useState<TPaymentMethod>()

  const navigate = useNavigate()
  const deliveryAddressForm = useForm<TDeliveryAddressFormData>({
    resolver: zodResolver(deliveryAdressFormValidationSchema),
    defaultValues: {
      cep: '',
      city: '',
      complement: '',
      district: '',
      num: '',
      street: '',
      uf: ''
    }
  })

  const { handleSubmit, watch, reset, register } = deliveryAddressForm

  const watchers = [
    watch('cep'),
    watch('city'),
    watch('district'),
    watch('num'),
    watch('street'),
    watch('uf')
  ]

  function isSubmitDisabled(): boolean {
    const allWatchersAreFilled = !watchers.includes('')
    return paymentMethod === undefined || !allWatchersAreFilled
  }
  if (amountCartItems <= 0) return <Navigate to="/" />

  function handleSelectPaymentMethod(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    setPaymentMethod(e.currentTarget.name as TPaymentMethod)
  }

  function handleConfirmCheckout(data: TDeliveryAddressFormData): void {
    setNewDeliveryAddress(data)
    navigate('success')
  }
  return (
    <CheckoutContainer onSubmit={handleSubmit(handleConfirmCheckout)} action="">
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
            <input
              type="text"
              placeholder="CEP"
              id="cep"
              {...register('cep')}
            />
            <input
              type="text"
              placeholder="Rua"
              id="street"
              {...register('street')}
            />
            <input
              type="text"
              placeholder="Número"
              id="num"
              {...register('num')}
            />
            <input
              type="text"
              placeholder="Complemento"
              id="complement"
              {...register('complement')}
            />
            <input
              type="text"
              placeholder="Bairro"
              id="district"
              {...register('district')}
            />
            <input
              type="text"
              placeholder="Cidade"
              id="city"
              {...register('city')}
            />
            <input type="text" placeholder="UF" id="uf" {...register('uf')} />
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

          <button
            className="button-confirm-checkout"
            disabled={isSubmitDisabled()}
          >
            CONFIRMAR PEDIDO
          </button>
        </div>
      </SelectedCoffeesAndConfirmContainer>
    </CheckoutContainer>
  )
}
