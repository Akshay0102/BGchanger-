import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("BLACK")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap justify-center  bottom-12 inset-x-0  '>
        <div className='flex flex-wrap justify-center shadow-lg gap-3 bg-black px-3 py-2 rounded-3xl'>
          <button
          onClick={()=>setColor("RED")} 
          className='outline-none px-3 py-2 rounded-full shadow-lg' style={{ backgroundColor: "RED" }}>
            RED
          </button>
          <button 
          onClick={()=>setColor("PINK")} 
          className='outline-none px-3 py-2 rounded-full shadow-lg' style={{ backgroundColor: "PINK" }}>
            PINK
          </button>
          <button 
          onClick={()=>setColor("BLUE")} 
          className='outline-none px-3 py-2 rounded-full shadow-lg' style={{ backgroundColor: "BLUE" }}>
            BLUE
          </button>
          <button 
          onClick={()=>setColor("OLIVE")} 
          className='outline-none px-3 py-2 rounded-full' style={{ backgroundColor: "OLIVE" }}>
            OLIVE
          </button>
        </div>
      </div>
    </div>

  )
}

export default App
