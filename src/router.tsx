import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout/default-layout.component'
import Checkout from './pages/Checkout/checkout.page'
import Home from './pages/Home/home.page'
import Success from './pages/Success/success.page'

export default function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout">
          <Route path="/checkout/" element={<Checkout />} />
          <Route path="/checkout//success" element={<Success />} />
        </Route>
      </Route>
    </Routes>
  )
}
