import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Dummy from "./components/Dummy";
import { useState } from "react";

function App() {
  const [storeBtns, setStoreBtns] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const duplicateDummy = Dummy;

  function handleClick(event){
    if(!storeBtns.includes(event.target.name)){
      setStoreBtns(prevBtns =>[...prevBtns, event.target.name]);

      if(storeBtns.length >= bestScore){
        setBestScore(prevBestScore => prevBestScore + 1);
      }else if(storeBtns.length < bestScore){
        setBestScore(bestScore);
      }
    }else{
      setStoreBtns([]);
    }
  }

  console.log("Score: ", storeBtns.length);
  console.log("BestSocre: ", bestScore);
  
  return (
    <div className="w-auto h-screen flex flex-col gap-3 mx-8 my-8 bg-stone-200 rounded-md py-3">
     <Header score={storeBtns.length} bestScore={bestScore}/>
     <Main duplicateDummy={duplicateDummy} handleClick={handleClick}/>
    </div>
  )
}

export default App;
