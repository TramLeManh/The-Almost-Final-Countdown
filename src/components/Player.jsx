import { useState } from "react";
import { useRef } from "react";

export default function Player() {
  const nameRef = useRef(null);
  const [EnterName,setEnterName] = useState()
  function handleInput(){
    setEnterName(nameRef.current.value)
    nameRef.current.value=''
  }
  return (    
    <section id="player">
      <h2>Welcome {EnterName?? "unknown"}</h2>
      <p>
        <input type="text" ref={nameRef}/>
        <button onClick={handleInput}>Set Name</button>
      </p>
    </section>
  );
}
