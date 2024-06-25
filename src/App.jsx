import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Dummy from "./components/Dummy";
import Footer from "./components/Footer.jsx";
import { useState } from "react";

function App() {
  const [storeBtns, setStoreBtns] = useState([]);
  const [bestScore, setBestScore] = useState(0);
  const [shuffledDummy, setShuffledDummy] = useState([...Dummy]);

  // const duplicateDummy = [...Dummy];

  // Fisher-Yates shuffle algorithm
   function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }


  //for handling the buttons
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
    setShuffledDummy(shuffleArray(shuffledDummy));
  }
  //reset button functionality
  function handleReset(){
    setStoreBtns([]);
    setBestScore(0);
  }
  
  return (
    <div className="w-auto h-screen flex flex-col gap-3 mx-8 my-8 bg-stone-200 rounded-md py-3">
     <Header score={storeBtns.length} bestScore={bestScore}/>
     <Main duplicateDummy={shuffledDummy} handleClick={handleClick}/>
     <Footer handleReset={handleReset}/>
    </div>
  )
}

export default App;
