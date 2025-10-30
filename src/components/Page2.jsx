import React from 'react'
import useTheme from './useTheme.jsx'



const Page2 = () => {
    const { theme, toggleTheme } = useTheme()
  return (
    <div className={` h-screen w-full flex items-center justify-center text-white ${theme ? 'bg-sky-500/30' : 'bg-sky-900'}`}>
        <h1 className='text-5xl font-bold uppercase'>Page 2</h1>
        <button onClick={toggleTheme} className='bg-white text-black p-2 rounded-md'>Toggle Theme</button>
    </div>
  )
}

export default Page2