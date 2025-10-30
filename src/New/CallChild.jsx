import React, { useEffect, useState  ,memo} from 'react'

const CallChild = ({fooa}) => {
    const [no,setNo]= useState(0);

    useEffect(()=>{
        console.log("child rendered")
    })

  return (
    <div className='w-1/3 h-1/3 bg-amber-300/50 flex flex-col gap-2  items-center justify-center text-4xl'>
          <h1 className='text-5xl font-bold uppercase'>{no}</h1>
        <button onClick={()=>
            setNo(no+1)} className='bg-amber-300 active:bg-blue-400/40 active:scale-90 px-3 text-[3vw] uppercase transition-all duration-200'>
          go
        </button>

    </div>
  )
}

export default memo(CallChild)