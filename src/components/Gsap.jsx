import React from 'react'
import gsap from 'gsap'
import { useEffect } from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Gsap = () => {



    const func =()=>{
        // gsap.to('.target',{
        //     x:300,
        //     duration:1,
        //     repeat:1,
        //     yoyo:true,
        //     stagger:0.2,
        //     ease:'power1.inOut'
        // })



    }

 const tl = gsap.timeline({ paused: true, defaults: {  duration: 1,ease: "bounce.out"}});
useEffect(()=>{
  tl.to(".target1", { x: 100,backgroundColor: "#ff6b6b" })
  .to(".target2", { x: -100 })
  .to(".target3", { rotation: 360 });
    },[])

    const start =()=>{
        tl.play()
    }
    const stop =()=>{
        tl.pause()
    }
    const reverse =()=>{
        tl.reverse()
    }
    
//page2
    useEffect(()=>{
        gsap.to('.box',{
            x:300,
            duration:1,
            scrollTrigger:{
                trigger:'.page2',
                start:'top 80%',
                end:'bottom 40%',
                scrub:1,
            }
        })
    })

  //page3
      useEffect(()=>{
        gsap.to('.page3 h1',{
            x:-800,
            duration:1,
            scrollTrigger:{
                trigger:'.page3',
                start: "top 0%",
                end: "+=1000",
                scrub:1,
                markers:true,
                pin:true
            }
        })
    })
 
  return (
    <>
    <div className='min-h-screen bg-[#432818] flex justify-center items-center flex-col gap-4'>
        <div className="target1 w-30 h-30 bg-[#fefae0] rounded-lg"></div>
         <div className="target2 w-30 h-30 bg-[#fefae0] rounded-lg"></div>
          <div className="target3 w-30 h-30 bg-[#fefae0] rounded-lg"></div>

  <div className='flex gap-3'>      
        <button onClick={start} className='bg-[#5c7144] active:scale-90 transition-all duration-150 text-white p-3 rounded-lg'>Start</button>
        <button onClick={stop} className='bg-[#5c7144] active:scale-90 transition-all duration-150 text-white p-3 rounded-lg'>Stop</button>
        <button onClick={reverse} className='bg-[#5c7144] active:scale-90 transition-all duration-150 text-white p-3 rounded-lg'>Reverse</button>
        </div>

        
    </div>
    <div className='page2 h-screen bg-[#003049] flex justify-center items-center'>
        <div className="box bg-white h-30 w-30 rounded-lg"></div>
    </div>
     <div className='page3 h-screen bg-[#490b00] flex  items-center'>
        <h1 className='text-white text-[40vw] text-nowrap'>hello world</h1>
     </div>
    </>
  )
}

export default Gsap