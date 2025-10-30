import React from 'react'
import Error from './Error'
import { useReducer } from 'react'
import { Plus, Trash2 } from 'lucide-react';




const Page1 = () => {

  const reducer=(state, action)=>{
    switch(action.type){
      case 'increment':
      return { count : state.count+1}; 
     case 'decrement':
        return { count : state.count-1}; 
     case 'reset':
        return { count : 0}; 
       default:
        return state;    
    }
  } 
  
  const [state,dispatch] = useReducer(reducer,{count:0})

   

  return (
    <div className='bg-fuchsia-500/30 h-screen w-full flex gap-3 items-center justify-center text-white'>
        <h1 className='text-5xl font-bold uppercase'>{state.count}</h1>
          <button
            onClick={()=>dispatch({type:'increment'})}
            className="p-3 bg-sky-400/90 active:bg-sky-300/50 transition-all duration-150 active:scale-95 uppercase font-extrabold text-sky-100 rounded-xl"
          >
            <Plus size={24} />
          </button>

            <button
            onClick={()=>dispatch({type:'decrement'})}
            className="p-3 bg-red-400/90 active:bg-red-300/50 transition-all duration-150 active:scale-95 uppercase font-extrabold text-red-100 rounded-xl"
          >
            <Plus size={24} />
          </button>

            <button
            onClick={()=>dispatch({type:'reset'})}
            className="p-3 bg-green-400/90 active:bg-green-300/50 transition-all duration-150 active:scale-95 uppercase font-extrabold text-green-100 rounded-xl"
          >
            <Plus size={24} />
          </button>

          
    </div>

  )
}

export default Page1