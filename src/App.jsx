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
    const clickedId = event.currentTarget.id; //because currentTarget is always the element the event handler is directly attached to

  setStoreBtns((prevBtns) => {
    if (prevBtns.includes(clickedId)) {
      return [];
    } else {
      const newBtns = [...prevBtns, clickedId];
      if (newBtns.length > bestScore) {
        setBestScore(newBtns.length);
      }

      return newBtns;
    }
  });
    
    setShuffledDummy(shuffleArray(shuffledDummy));
  }
  //reset button functionality
  function handleReset(){
    setStoreBtns([]);
    setBestScore(0);
  }
  
  return (
    <div className="w-auto h-auto flex flex-col gap-3 mx-2 my-4 md:mx-8 md:my-8 bg-stone-200 rounded-md py-3">
     <Header score={storeBtns.length} bestScore={bestScore}/>
     <p><b>Game Rules: </b>Click unique images, score increases; Click same image, game restarts; Memory Game with pokemons.</p>
     <Main duplicateDummy={shuffledDummy} handleClick={handleClick}/>
     <Footer handleReset={handleReset}/>
    </div>
  )
}

export default App;
