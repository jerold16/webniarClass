import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import img from './assets/dummyiamge.webp'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import HomePage from './Pages/HomePage'
import './styles/colorCodes.css'
import './styles/font.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' ' >
        <HomePage />
      </div>

    </>
  )
}

export default App
