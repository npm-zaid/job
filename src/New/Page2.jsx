import React, {  useReducer } from 'react'



const Page2 = () => {

  const reducer =(state, action)=>{
    switch(action.type){
      case 'increment':
        return {counter:state.counter+1}
      case 'decrement':
        return {counter:state.counter-1}
      case 'reset':  
        return {counter:0}

       default:
        return state
    }

  }

  const [state,dispatch] = useReducer(reducer,{counter:0});

  return (
    <div className='h-screen bg-fuchsia-400/30 flex  justify-center items-center '>
         <div className='text-[8vw] text-white mr-4'>{state.counter}</div>
     <div className='mt-3 flex gap-4'>
       <button onClick={()=>dispatch({type:'increment'})} className='bg-green-300 active:bg-green-400/40 active:scale-90 px-3 text-[3vw] uppercase transition-all duration-200'>
         in
       </button>
       <button onClick={()=>dispatch({type:'decrement'})} className='bg-red-300 active:bg-red-400/40 active:scale-90 px-3 text-[3vw] uppercase transition-all duration-200'>
        de
       </button>
       <button onClick={()=>dispatch({type:'reset'})} className='bg-yellow-300 active:bg-yellow-400/40 active:scale-90 px-3 text-[3vw] uppercase transition-all duration-200'>
         re
       </button>
     
     </div>

    </div>
  )
}

export default Page2