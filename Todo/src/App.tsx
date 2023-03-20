import Login from './pages/Auth/Login'
import { Route, Router, Routes } from "react-router-dom"
import Register from "./pages/Auth/Register"

function App() {

  return (
    <Routes>
      <Route path='/' element={ } />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default App
