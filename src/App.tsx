import { useState } from 'react'
import './App.css'
import ArrayComponent from './components/ArrayComponent'
import AsyncComponent from './components/AsyncComponent'
import DebounceComponent from './components/DebounceComponent'
import DeepCompareEffectComponent from './components/DeepCompareEffectComponent'
import EventListenerComponent from './components/EventListenerComponent'
import FetchComponent from './components/FetchComponent'
import OnScreenComponent from './components/OnScreenComponent'
import PreviousComponent from './components/PreviousComponent'
import ScriptComponent from './components/ScriptComponent'
import StateWithHistoryComponent from './components/StateWithHistoryComponent'
import StorageComponent from './components/StorageComponent'
import TimeoutComponent from './components/TimeoutComponent'
import Toggle from './components/Toggle'
import UpdateEffectComponent from './components/UpdateEffectComponent'
import WindowSizeComponent from './components/WindowSizeComponent'


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
        <main className="hook" id="6">
          <PreviousComponent/>
        </main>  
        <main className="hook" id="7">
          <StateWithHistoryComponent/>
        </main>  
        <main className="hook" id="8">
          <StorageComponent/>
        </main>  
        <main className="hook" id="9">
          <AsyncComponent/>
        </main>  
        <main className="hook" id="10">
          <FetchComponent/>
        </main>  
        <main className="hook" id="11">
          <ScriptComponent/>
        </main>  
        <main className="hook" id="12">
          <DeepCompareEffectComponent/>
        </main>  
        <main className="hook" id="13">
          <EventListenerComponent/>
        </main>  
        <main className="hook" id="14">
          <OnScreenComponent/>
        </main>  
        <main className="hook" id="15">
          <WindowSizeComponent/>
        </main>  
      </header>
      
    </div>
  )
}

export default App
