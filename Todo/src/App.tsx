import Login from './pages/Auth/Login'
import { Route, Router, Routes } from "react-router-dom"
import Register from "./pages/Auth/Register"
import IndexPage from './pages/Auth/IndexPage'
import Layot from './pages/Header/Layout'
import { useState } from 'react'

import { todos } from "@prisma/client"

function App() {
  let [todos, setTodos] = useState<todos[]>()
  return (
    <Routes>
      <Route path='/' element={<Layot setTodos={setTodos} />}>
        <Route path='/' element={<IndexPage todos={todos! } />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
  )
}

export default App
