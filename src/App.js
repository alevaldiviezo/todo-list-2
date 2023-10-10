// import { useState } from 'react'
import './App.css'
import {CssBaseline} from '@mui/material'
import TodoList from './TodoList'
import NavBar from './NavBar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <CssBaseline/>
      <TodoList/>
    </>
  )
}

export default App