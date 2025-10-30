import React from 'react'

import { useState } from 'react'

const useCounter = (initialValue = 0) => {
    const [count,setCount] = useState(initialValue)
    const increment = ()=>setCount(count+1)
    const decrement = ()=>setCount(count-1)
    const reset =()=>setCount(0)
  return {count,increment,decrement,reset}
}
export default useCounter