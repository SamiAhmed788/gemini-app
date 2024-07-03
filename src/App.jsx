import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnchorTemporaryDrawer from './components/slidebar'
import Slidebar from './components/slidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Slidebar/>
    </>
  )
}

export default App
