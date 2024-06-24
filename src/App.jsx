import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";

function App() {
  
  return (
    <div className="w-auto h-screen flex flex-col gap-3 mx-8 my-8 bg-stone-200 rounded-md py-3">
     <Header/>
     <Main/>
    </div>
  )
}

export default App;
