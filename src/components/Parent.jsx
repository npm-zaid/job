import React from 'react'

const Parent = (Child) => {
  return ()=> (
    <div className='bg-amber-500/20 p-6 rounded-md'>
        <h1 className='text-white text-7xl bg-amber-500 text-center mb-6'>Parent</h1>
        <Child/>
    </div>
  )
}

export default Parent