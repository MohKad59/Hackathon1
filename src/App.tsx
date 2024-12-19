import { useEffect, useState } from "react"
import './App.css'
import { Outlet } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>NavBar</p>
        <Outlet />
      <p>Footer</p>
    </>
  )
}

export default App
