import { useState } from 'react'
import './App.css'
import ArrayComponent from './components/ArrayComponent'
import DebounceComponent from './components/DebounceComponent'
import TimeoutComponent from './components/TimeoutComponent'
import Toggle from './components/Toggle'
import UpdateEffectComponent from './components/UpdateEffectComponent'


function App() {


  return (
    <div className="App">
      <header className="App-header">
       
        <p>React custom hooks</p>
        <p>
         Con Kyle de Web Dev Simplified
        </p>

        <main className="hook" id="useToggle">
          <Toggle/>          
        </main>  
        <main className="hook" id="2">
          <TimeoutComponent/>
        </main>  
        <main className="hook" id="3">
          <DebounceComponent/>
        </main>  
        <main className="hook" id="4">
          <UpdateEffectComponent/>
        </main>  
        <main className="hook" id="5">
          <ArrayComponent/>
        </main>  
      </header>
      
    </div>
  )
}

export default App
