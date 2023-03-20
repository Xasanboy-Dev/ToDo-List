import Login from './pages/Auth/Login'
import { Route, Router, Routes } from "react-router-dom"
import Register from "./pages/Auth/Register"
import IndexPage from './pages/Auth/IndexPage'
import Layot from './pages/Header/Layout'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layot />}>
        <Route path='/' element={<IndexPage />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default App
