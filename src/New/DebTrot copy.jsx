import React, { useEffect, useState, useRef } from 'react'
import { Plus } from 'lucide-react';


const DebTrot = () => {
    const [counter, setCounter] = useState(0)
    const isThrottle = useRef(false)

    const func = () => {
        console.log('hello')
    }


    useEffect(() => {
        const id = setTimeout(() => {
            func()
        }, 2000)
        return () => clearTimeout(id)
    }, [counter])

    // throttle
    const Throttle = () => {
        if (isThrottle.current) return
        isThrottle.current = true
        func()
        setTimeout(() => {
            isThrottle.current = false
        }, 5000)
    }





    return (
        <div className='bg-[#333333] text-white p-4 rounded-lg h-[calc(100vh-10vh)] flex gap-4 items-center justify-center'>
            <button onClick={() => setCounter(counter + 1)} className="p-3 bg-[#ba181b] active:bg-sky-300/50 transition-all duration-150 active:scale-95 uppercase font-extrabold text-sky-100 rounded-xl" >
                <Plus size={60} /></button>

            <button onClick={Throttle} className="p-3 bg-[#669bbc] active:bg-sky-300/50 transition-all duration-150 active:scale-95 uppercase font-extrabold text-sky-100 rounded-xl" >
                <Plus size={60} /></button>
        </div>



    )
}

export default DebTrot