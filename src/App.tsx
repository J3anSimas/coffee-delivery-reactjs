import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Router from './router'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App (): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
