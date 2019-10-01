import React,{useState,useEffect} from 'react';

function ExuseEffect(){
const [name,SetName]=useState("Mukesh")
   const[no,SetNo]=useState(20)
   // add another function increment in function App
      const increment=()=>{
        SetNo((prevNo)=>prevNo+1)
      }   
      	useEffect(()=>{
      		console.log("use effect called")
      	},[name])

   return (
    <div className="App">
    	<h1><u>UseEffect Example</u></h1>
      <h1>{name}</h1>
      <h2>{no}</h2>
      <button onClick={()=>SetName("Suresh")}>Change Name</button>
      <button onClick={()=>increment()}>Increment No</button>
    
    </div>
  );



}
export default ExuseEffect;