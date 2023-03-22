import Login from './pages/Auth/Login'
import { Route, Router, Routes } from "react-router-dom"
import Register from "./pages/Auth/Register"
import IndexPage from './pages/Auth/IndexPage'
import Layot from './pages/Header/Layout'
import { useState } from 'react'
import { todos } from "@prisma/client"
import Profile from "./pages/User/profile"
function App() {
  let [click, setClick] = useState<Boolean>()
  let [todos, setTodos] = useState<todos[]>()
  let token = localStorage.getItem('hello')
  return (
    <Routes>
      <Route path='/' element={<Layot click={click!} setClick={setClick} setTodos={setTodos} />}>
        <Route path='/' element={<IndexPage setClick={setClick} click={click!} />} />
        <Route path='/profile' element={<Profile token={token!}  />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default App
