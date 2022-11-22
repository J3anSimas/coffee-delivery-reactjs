import {
  HeaderContainer,
  NumberProductsStatus,
  NavHeader
} from './header.styles'
import Logo from '../../assets/Logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
export default function Header(): JSX.Element {
  const [amountProducts, setAmountProducts] = useState(10)
  return (
    <HeaderContainer>
      <img src={Logo} />
      <NavHeader>
        <button>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </button>
        <NavLink to="checkout">
          {amountProducts > 0 ? (
            <NumberProductsStatus>{amountProducts}</NumberProductsStatus>
          ) : null}
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </NavHeader>
    </HeaderContainer>
  )
}
