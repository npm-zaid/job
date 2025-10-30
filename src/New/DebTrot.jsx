import React, { useRef } from 'react'
import { Plus, Fish } from 'lucide-react'
import gsap from 'gsap'

const DebTrot = () => {
  const fish = useRef()
  const isThrottle = useRef(false)
  const debounceId = useRef() // ✅ store debounce timer here
  const func = () => {
    gsap.to(fish.current, {
      x: '+=50',
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
    })
  }

  // 🕒 Throttle
  const Throt = () => {
    if (isThrottle.current) return
    isThrottle.current = true
    func()
    setTimeout(() => {
    isThrottle.current = false
    }, 5000)
  }

  // 🕐 Debounce
  const Debo = () => {
    if (debounceId.current) clearTimeout(debounceId.current)
    debounceId.current = setTimeout(() => {
    func()
    }, 2000)
  }

  return (
    <div className='bg-zinc-900 h-screen flex flex-col gap-6 justify-center items-center'>
      <div ref={fish}>
        <Fish size={100} className='text-white' />
      </div>

      <div className='flex gap-4'>
        {/* Normal click */}
        <button onClick={func}>
          <Plus
            size={60}
            className='bg-red-400 active:scale-90 active:bg-red-400/40 transition-all duration-200 p-3'
          />
        </button>

        {/* Debounce */}
        <button onClick={Debo}>
          <Plus
            size={60}
            className='bg-fuchsia-400 active:scale-90 active:bg-fuchsia-400/40 transition-all duration-200 p-3'
          />
        </button>

        {/* Throttle */}
        <button onClick={Throt}>
          <Plus
            size={60}
            className='bg-sky-400 active:scale-90 active:bg-sky-400/40 transition-all duration-200 p-3'
          />
        </button>
      </div>
    </div>
  )
}

export default DebTrot
