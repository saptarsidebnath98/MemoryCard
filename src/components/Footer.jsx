// eslint-disable-next-line react/prop-types
export default function Footer({handleReset}) {
  return (
    <div className="w-full flex justify-center px-2">
      <button
        onClick={handleReset}
        className="w-full h-auto py-2 md:w-1/3 bg-slate-900 active:bg-slate-700 text-stone-50 active:text-stone-400 font-mono font-bold text-xl rounded-md"
        >
          RESET
        </button>
    </div>
  )
}
