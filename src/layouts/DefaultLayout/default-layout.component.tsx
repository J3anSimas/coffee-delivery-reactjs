import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/header.component'
import { LayoutContainer } from './default-layout.styles'

export default function DefaultLayout (): JSX.Element {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
