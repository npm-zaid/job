import React from 'react'

const Parent = (Child) => {
  return ()=>(
    <div className='bg-black p-4 text-4xl uppercase italic text-white'>
        <h1>parent</h1> 
        <Child/>
    </div>
  )
}

export default Parent