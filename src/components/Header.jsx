
export default function Header() {
  return (
    <header className="flex flex-col items-center md:flex-row md:justify-between px-4 gap-2">
       <h2 className="text-2xl font-bold font-mono">Memory Card Game</h2>
       <div className="flex gap-3 bg-slate-900 px-4 rounded-md text-xl text-stone-100 font-mono font-semibold">
           <span>Score: 0</span>
           <span>Best Score: 10</span>
       </div>
     </header>
  )
}
