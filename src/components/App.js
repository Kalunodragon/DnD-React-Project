import { createContext, useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import '../App.css';
import Testing from "./Testing.js"

export const itemInitialContext = createContext(null)

function App() {
  const [itemInitial, setItemInitial] = useState(null)

  useEffect(()=>{
    fetch('https://www.dnd5eapi.co/api/magic-items/')
    .then(response=>response.json())
    .then(data=>setItemInitial(data.results))
  },[])

  return (
    <>
      <itemInitialContext.Provider value={itemInitial}>
        <Routes>
          <Route path="/" element={ <h1>404 TESTING PAGE -- DND TOOL IS ON A DIFFERENT URL</h1> }/>
          <Route path="/testing" element={ <Testing /> }/>
        </Routes>
      </itemInitialContext.Provider>
    </>
  );
}

export default App;
