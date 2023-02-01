import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Searchbar from "./components/Searchbar/Searchbar"

function App() {

  return (
    <div className="App">
      <h1>Universal Search Engine</h1>
      <Searchbar />
    </div>
  );
}

export default App



