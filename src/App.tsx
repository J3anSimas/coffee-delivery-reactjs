import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './contexts/cart.context'
import { CoffeeItemListContextProvider } from './contexts/coffee-items-list.context'
import Router from './router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <CoffeeItemListContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
          <GlobalStyle />
        </CoffeeItemListContextProvider>
      </CartContextProvider>
    </ThemeProvider>
  )
}

export default App
