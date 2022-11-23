import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money
} from 'phosphor-react'
import {
  CheckoutContainer,
  CheckoutDescription,
  CompleteOrderForm,
  InputFieldsContainer,
  PaymentTypeCard,
  SelectedCoffeesAndConfirmContainer,
  SelectedCoffeesList
} from './checkout.styles'
import CoffeeItem from './components/CoffeeItem/coffee-item.component'

export default function Checkout(): JSX.Element {
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
            <PaymentTypeCard disabled type="button">
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </PaymentTypeCard>
            <PaymentTypeCard type="button">
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </PaymentTypeCard>
            <PaymentTypeCard type="button">
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
            <CoffeeItem />
            <div className="line-divider"></div>
            <CoffeeItem />
            <div className="line-divider"></div>
          </SelectedCoffeesList>
          <CheckoutDescription>
            <div>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div className="total-description-checkout">
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
          </CheckoutDescription>
          <button className="button-confirm-checkout">CONFIRMAR PEDIDO</button>
        </div>
      </SelectedCoffeesAndConfirmContainer>
    </CheckoutContainer>
  )
}
