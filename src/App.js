//1/10/2019===> useState Example
import React,{useState} from 'react';
import './App.css';
import ExuseEffect from './ExuseEffect';
function App() {
   const [name,SetName]=useState("Mukesh")
   const[no,SetNo]=useState(20)
   // add another function increment in function App
      const increment=()=>{
        SetNo((prevNo)=>prevNo+1)
        SetNo((prevNo)=>prevNo+1)
        SetNo((prevNo)=>prevNo+1)
      }   


   return (
    <div className="App">
      <h1>{name}</h1>
      <h2>{no}</h2>
      <button onClick={()=>SetName("Suresh")}>Change Name</button>
      <button onClick={()=>increment()}>Increment No</button>
        <ExuseEffect/>
    </div>
  );
}

export default App;
