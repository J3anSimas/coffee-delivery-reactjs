import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout/default-layout.component'

export default function Router (): JSX.Element {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout/>}>
        <Route path="/" element={<>Index</>}/>
        <Route path="/checkout" element={<>Checkout</>}/>
        <Route path="/success" element={<>Success</>}/>
      </Route>
    </Routes>
  )
}
