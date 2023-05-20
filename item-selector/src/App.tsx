import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemsContainer from './ItemsContainer.tsx'
import Preview from './Preview.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <ItemsContainer />
        <Preview />
       </div> 
    </>
  )
}

export default App
