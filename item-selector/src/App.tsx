import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemsContainer from './components/ItemsContainer.tsx'
import Preview from './components/Preview.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <ItemsContainer />
        <Preview selectedProp={["item1", "item2"]}/>
       </div> 
    </>
  )
}

export default App
