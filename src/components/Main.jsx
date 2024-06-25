import { useState } from "react";
import Dummy from "./Dummy";

export default function Main() {
  const [storeBtns, setStoreBtns] = useState([]);

  let score = storeBtns.length;

  const duplicateDummy = Dummy;

  function handleClick(event){
    if(!storeBtns.includes(event.target.name)){
      setStoreBtns(prevBtns =>[...prevBtns, event.target.name])
    }else{
      setStoreBtns([]);
    }
  }

    console.log("Score:", score);

  return (
    <div className="w-full flex md:flex-row gap-4 px-4 py-8 justify-center">
        {duplicateDummy.map((btn)=>
        <button 
        key={btn.id} 
        name={btn.name}
        className="h-48 w-48 bg-stone-400 rounded-md"
        onClick={handleClick}>
          {btn.name}
        </button>)}
    </div>
  )
}
