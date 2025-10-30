import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Plus ,Minus ,RotateCcw } from 'lucide-react';
import { increment,decrement,reset } from './CounterSlice';


const Page3 = () => {

  const state = useSelector((state)=>state.Counter.value)
  const dispatch = useDispatch()
  
  return (
    <div className='h-screen bg-zinc-800 flex justify-center items-center text-white gap-4'>
         <h1 className='text-5xl font-bold uppercase'>{state}</h1>
          <button
           onClick={()=>dispatch(increment())}
            className="p-3 bg-sky-400/90 active:bg-sky-300/50 transition-all duration-150 active:scale-95 uppercase font-extrabold text-sky-100 rounded-xl"
          >
            <Plus size={24} />
          </button>

               <button
            onClick={()=>dispatch(decrement())}
            className="p-3 bg-red-400/90 active:bg-red-300/50 transition-all duration-150 active:scale-95 uppercase font-extrabold text-red-100 rounded-xl"
          >
           <Minus size={24} />
          </button>

            <button
            onClick={()=>dispatch(reset())}
            className="p-3 bg-green-400/90 active:bg-green-300/50 transition-all duration-150 active:scale-95 uppercase font-extrabold text-green-100 rounded-xl"
          >
            <RotateCcw size={24} />
          </button>
    </div>
  )
}

export default Page3