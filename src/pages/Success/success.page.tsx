import {
  DeliveryAddressAndImage,
  DeliveryAddressInfo,
  HeaderContainer,
  SuccessContainer
} from './success.styles'
import SuccessImage from '../../assets/SuccessImage.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
export default function Success(): JSX.Element {
  return (
    <SuccessContainer>
      <HeaderContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </HeaderContainer>
      <DeliveryAddressAndImage>
        <DeliveryAddressInfo>
          <div className="info-item">
            <span className="svg-container" data-type="map">
              <MapPin weight="fill" />
            </span>
            <span>
              <p>
                Entrega em{' '}
                <span className="bold">Rua João Daniel Martinelli, 102</span>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </span>
          </div>
          <div className="info-item">
            <span className="svg-container" data-type="timer">
              <Timer weight="fill" />
            </span>
            <span>
              <p>Previsão de entrega</p>
              <p className="bold">20 min - 30 min</p>
            </span>
          </div>
          <div className="info-item">
            <span className="svg-container" data-type="currency">
              <CurrencyDollar />
            </span>
            <span>
              <p>Pagamento na entrega</p>
              <p className="bold">Cartão de Crédito</p>
            </span>
          </div>
        </DeliveryAddressInfo>
        <img src={SuccessImage} alt="" />
      </DeliveryAddressAndImage>
    </SuccessContainer>
  )
}
