import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  HomeContainer,
  IntroContainer,
  IntroItem,
  IntroItemsList,
  IntroFirstColumn,
  MainContainer,
  CoffeeList
} from './home.styles'
import CoffeeIntroHomeImage from '../../assets/CoffeeIntroHome.png'
import CoffeeItem from './components/CoffeItem/coffee-item.component'

export default function Home(): JSX.Element {
  return (
    <HomeContainer>
      <IntroContainer>
        <IntroFirstColumn>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>
          <IntroItemsList>
            <IntroItem>
              <span className="cartItem">
                <ShoppingCart size={16} weight="fill" />
              </span>
              <span>Compra simples e segura</span>
            </IntroItem>
            <IntroItem>
              <span className="packageItem">
                <Package size={16} weight="fill" />
              </span>
              <span>Embalagem mantém o café intacto</span>
            </IntroItem>
            <IntroItem>
              <span className="timerItem">
                <Timer size={16} weight="fill" />
              </span>
              <span>Entrega rápida e rastreada</span>
            </IntroItem>
            <IntroItem>
              <span className="coffeeItem">
                <Coffee size={16} weight="fill" />
              </span>
              <span>O café chega fresquinho até você</span>
            </IntroItem>
          </IntroItemsList>
        </IntroFirstColumn>
        <img src={CoffeeIntroHomeImage} />
      </IntroContainer>

      <MainContainer>
        <h2>Nossos cafés</h2>
        <CoffeeList>
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
          <CoffeeItem />
        </CoffeeList>
      </MainContainer>
    </HomeContainer>
  )
}
