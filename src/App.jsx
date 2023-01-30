import React from "react";
import { Home } from './views/Home';
import { Menu } from './components/Menu/index';
import './App.css'

function App() {
  return (
    <div 
      className='
      container 
      bg-main-background 
      h-screen 
      flex 
      items-center 
      justify-center overflow-hidden'
    >
      <Menu />
      <Home />
    </div>
  )
}

export default App
