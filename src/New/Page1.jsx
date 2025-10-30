import React, { useRef } from 'react'
import ForwardRef from './ForwardRef.jsx'
import useCounter from './useCounter.jsx'
import { Plus ,Minus ,RotateCcw } from 'lucide-react';



import { ErrorBoundary } from 'react-error-boundary'
import { div } from 'three/tsl'
import Parent from './HOC/Parent.jsx'
import Child from './HOC/Child.jsx'

const HOC = Parent(Child)


// const Doubt =()=>{
//   throw new Error('doubt')  
// }

// const Fallback =({error})=>{
//   return (
//     <div className='h-screen w-full bg-red-300 absolute  flex italic justify-center items-center'>
//       <h1 className='text-red-500'>{error.message}</h1>
//     </div>
//   )
// }

const Page1 = () => {

const ref = useRef(null)

const {count,increment,decrement,reset} = useCounter(10)

  return (
    <div ref={ref} className='h-screen bg-sky-300/30 flex justify-center items-center'>
        <h1 className='uppercase text-white text-[5vw]'>{count}</h1>
        {/* <ForwardRef  ref={ref}/> */}
        <div>
             <button
           onClick={increment}
            className="p-3 bg-sky-400/90 active:bg-sky-300/50 transition-all duration-150 active:scale-95 uppercase font-extrabold text-sky-100 rounded-xl"
          >
            <Plus size={60} />
          </button>

               <button
            onClick={()=>decrement()}
            className="p-3 bg-red-400/90 active:bg-red-300/50 transition-all duration-150 active:scale-95 uppercase font-extrabold text-red-100 rounded-xl"
          >
           <Minus size={60} />
          </button>

            <button
            onClick={()=>reset()}
            className="p-3 bg-green-400/90 active:bg-green-300/50 transition-all duration-150 active:scale-95 uppercase font-extrabold text-green-100 rounded-xl"
          >
            <RotateCcw size={60} />
          </button>
        </div>
        {/* <HOC/> */}
        {/* <ErrorBoundary FallbackComponent={Fallback}>  
          <Doubt/>
        </ErrorBoundary> */}
        <div className='h-screen bg-green-400'></div>
    </div>
  )
}

export default Page1