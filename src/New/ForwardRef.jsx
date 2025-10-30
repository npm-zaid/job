import React from 'react'
import { Minus } from 'lucide-react'

const ForwardRef = ({ref}) => {

    const func =()=>{
        ref.current.style.backgroundColor='red'
    }
  return (
         <button
            onClick={func}
            className="p-3 bg-red-400/90 active:bg-red-300/50 transition-all duration-150 active:scale-95 uppercase font-extrabold text-red-100 rounded-xl"
          >
           <Minus size={60} />
          </button>
  )
}

export default ForwardRef