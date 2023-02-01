import { useState,useEffect } from 'react'
import Header from './components/UX/header/header'
import './App.css'
import 'normalize.css';
import WebFont from 'webfontloader';
import Intro from './components/intro/intro';
function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Roboto', 'Montserrat']
      }
    });
   }, []);
  return (
    <div className="App">
      
      <Header />
      <Intro />
    </div>
  )
}

export default App
