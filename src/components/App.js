import { useEffect, useState } from 'react';
import '../App.css';

function App() {
  const [state, setState] = useState(null)

  useEffect(()=>{
    fetch('https://www.dnd5eapi.co/api/magic-items/')
    .then(response=>response.json())
    .then(data=>console.log(data.results))
  },[])

  return (
    <>
      <h1>TESTING</h1>
    </>
  );
}

export default App;
