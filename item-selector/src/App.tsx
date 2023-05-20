import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemsContainer from './components/ItemsContainer.tsx'
import Preview from './components/Preview.tsx'

function App() {
  const [count, setCount] = useState(0)
  const [selected, setSelected] = useState<string[]>([])
  const handleOnClick = (event: React.MouseEvent<HTMLElement>) =>{
    const prevSelected = [...selected]
    if(event.currentTarget.textContent){
    prevSelected.push(event.currentTarget.textContent)
    setSelected(prevSelected)
    }
  }
  return (
    <>
      <div className="container">
        <ItemsContainer onClick = {handleOnClick} />
        <Preview selectedProp={selected}/>
       </div> 
    </>
  )
}

export default App
