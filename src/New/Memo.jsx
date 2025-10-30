import React, { useState, useMemo ,useEffect ,useCallback} from 'react'
import CallChild from './CallChild';



const Memo = () => {
    const [counta, setCounta] = useState(0);


    useEffect(()=>{
        console.log("parent rendered")
    })


const funco = useMemo(()=>{
    console.log('hello funcoooo')
    console.log(counta)
},[counta])



    const fooa= useCallback(()=>{
  console.log('foooooooooooa')
},[])



  return (
    <div className='h-screen w-full mt-10 flex items-center justify-center  gap-4 bg-zinc-800  '>

      {/* parent */}
       <div className='w-1/3 h-1/3 bg-fuchsia-500/40 flex flex-col gap-2 items-center justify-center text-4xl'>
          <h1 className='text-5xl font-bold uppercase'>{counta}</h1>
        <button onClick={()=>setCounta(counta+1)} className='bg-fuchsia-500 active:bg-blue-400/40 active:scale-90 px-3 text-[3vw] uppercase transition-all duration-200'>
          go
        </button>

    </div>

    {/* child */}
    <CallChild fooa ={fooa}/>
    </div>
  )
}

export default Memo