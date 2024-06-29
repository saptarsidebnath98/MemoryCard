/* eslint-disable react/prop-types */

export default function Main({ duplicateDummy, handleClick }) {

  return (
    <div className="w-full flex px-2 py-2 md:flex-row gap-1 md:gap-4 md:px-4 md:py-8 justify-center flex-wrap">
        {duplicateDummy.map((btn)=>
        <button 
        id={`${btn.id}`}
        key={btn.id}
        name={btn.name}
        className="flex justify-center shadow-md items-center h-20 w-20 md:h-48 md:w-48 bg-stone-50 rounded-md active:bg-slate-700"
        onClick={handleClick}>
          <img src={btn.imgURL} alt={btn.id} className="h-16 w-16 md:h-36 md:w-36"/>
        </button>)}
    </div>
  )
}
