import {
  HeaderContainer,
  NumberProductsStatus,
  NavHeader
} from './header.styles'
import Logo from '../../assets/Logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'
export default function Header(): JSX.Element {
  const { amountCartItems } = useContext(CartContext)
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={Logo} />
      </NavLink>
      <NavHeader>
        <button>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </button>
        <NavLink to={'checkout'}>
          {amountCartItems > 0 ? (
            <NumberProductsStatus>{amountCartItems}</NumberProductsStatus>
          ) : null}
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </NavHeader>
    </HeaderContainer>
  )
}
