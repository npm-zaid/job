import { useState, useEffect } from 'react'

const Cursor = () => {
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  })

  // 🔁 Mouse move handle karne ke liye function
  const handleMouseMove = (e) => {
    setCursorPosition({
      x: e.clientX -40,
      y: e.clientY -40,
    })
  }

  // 🔁 Component mount hone par mouse move event add karne ke liye useEffect
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);



 
const a1 = {
    name:'ziad',
    age:20,
}

const a2 = Object.create(a1)
a2.age=21
console.log(a2.__proto__)




  return (
    <div className='bg-zinc-800 h-screen relative'>
        <div className='h-20 w-20 bg-white rounded-full '
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        }}
        ></div>
    </div>
  )
}

export default Cursor