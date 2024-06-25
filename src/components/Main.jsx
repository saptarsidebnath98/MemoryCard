
export default function Main({ duplicateDummy, handleClick }) {

  return (
    <div className="w-full flex md:flex-row gap-1 md:gap-4 px-4 py-8 justify-center flex-wrap">
        {duplicateDummy.map((btn)=>
        <button 
        key={btn.id}
        name={btn.name}
        className="h-28 w-28 md:h-48 md:w-48 bg-stone-400 rounded-md active:bg-slate-700"
        onClick={handleClick}>
          {btn.name}
        </button>)}
    </div>
  )
}
