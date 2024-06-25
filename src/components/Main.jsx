
export default function Main({ duplicateDummy, handleClick }) {

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
