import React, { useState, useRef, lazy,Suspense } from 'react';
import { BrowserRouter,Routes,Route, NavLink } from 'react-router-dom';

import Page2 from './New/Page2.jsx';
import Page1 from './New/Page1.jsx';
import Page3 from './New/Page3.jsx';
import Todo from './New/Projects/Todo.jsx';
import Employees from './New/Projects/Employees.jsx';
import FormValidation from './New/Projects/FormValidation.jsx';
import DebTrot from './New/DebTrot.jsx';
import ECommerceCart from './New/Projects/ECommerceCart.jsx';
import MultiStepForm from './New/Projects/MultiStepForm.jsx';
import FormPractise from './New/Projects/FormPractise.jsx';
import InfiniteScrollFeed from './New/Projects/InfiniteScrollFeed.jsx';
import Gsap from './New/Gsap.jsx'



const Page4 = lazy(()=>(import('./New/Page4.jsx')))




const App2 = () => {

  

  const [counter, setCounter] = useState(0);
  const id = useRef(null);

  const start = () => {
    if (id.current) return; // prevent multiple intervals
    id.current = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(id.current);
    id.current = null;
  };

  const reset = () => {
    stop();
    setCounter(0)
  };



  return (
   
    // <div className='min-h-screen bg-black text-white flex flex-col justify-center items-center text-[8vw]'>
    //   <div className='flex  justify-between items-center text-lg text-gray-300' >
    //       <div>{name}</div>
    //     <div>{age}</div>
    //     <button onClick={foo} className='bg-blue-300 active:bg-blue-400/40 active:scale-90 px-3 text-[3vw] uppercase transition-all duration-200'>
    //       foo
    //     </button>
    //   </div>
    //   <div>{counter}</div>
    //   <div className='mt-3 flex gap-4'>
    //     <button onClick={start} className='bg-green-300 active:bg-green-400/40 active:scale-90 px-3 text-[3vw] uppercase transition-all duration-200'>
    //       start
    //     </button>
    //     <button onClick={stop} className='bg-red-300 active:bg-red-400/40 active:scale-90 px-3 text-[3vw] uppercase transition-all duration-200'>
    //       stop
    //     </button>
    //     <button onClick={reset} className='bg-yellow-300 active:bg-yellow-400/40 active:scale-90 px-3 text-[3vw] uppercase transition-all duration-200'>
    //       reset
    //     </button>
    //   </div>
    //   <Memo/>
    // </div>
  
  <div className='bg-zinc-900'>
    <BrowserRouter>
    <div className='w-full bg-black relative top-0 p-4  flex gap-3  '>
      <NavLink to="/" className={({isActive})=>(isActive?'text-white':'text-gray-400')}>home</NavLink>
       <NavLink to="/two"  className={({isActive})=>(isActive?'text-white':'text-gray-400')}>page 2</NavLink>
       <NavLink to="/three"  className={({isActive})=>(isActive?'text-white':'text-gray-400')}>page 3</NavLink>
       <NavLink to="/four"  className={({isActive})=>(isActive?'text-white':'text-gray-400')}>page 4</NavLink>
        <NavLink to="/todo"  className={({isActive})=>(isActive?'text-white':'text-gray-400')}>todo</NavLink>
        <NavLink to="/employees"  className={({isActive})=>(isActive?'text-white':'text-gray-400')}>employees</NavLink>
        <NavLink to="/form"  className={({isActive})=>(isActive?'text-white':'text-gray-400')}>form validation</NavLink>
        <NavLink to="/deb"  className={({isActive})=>(isActive?'text-white':'text-gray-400')}>deb/trot</NavLink>
        <NavLink to="/cart"  className={({isActive})=>(isActive?'text-white':'text-gray-400')}>cart app</NavLink>
        <NavLink to="/multi"  className={({isActive})=>(isActive?'text-white':'text-gray-400')}>MSF</NavLink>
        <NavLink to="/formPractise"  className={({isActive})=>(isActive?'text-white':'text-gray-400')}>Form</NavLink>
        <NavLink to="/InfiScroll"  className={({isActive})=>(isActive?'text-white':'text-gray-400')}>InfiScroll</NavLink>
        <NavLink to="/Gsap"  className={({isActive})=>(isActive?'text-white':'text-gray-400')}>Gsap</NavLink>


    </div>
    <Routes>
      <Route path='/' element={<Page1/>}></Route>
       <Route path='/two' element={<Page2/>}></Route>
       <Route path='/three' element={<Page3/>}></Route>
       <Route path='/todo' element={<Todo/>}></Route>
       <Route path='/employees' element={<Employees/>}></Route>
       <Route path='/form' element={<FormValidation/>}></Route>
       <Route path='/cart' element={<ECommerceCart/>}></Route>
       <Route path='/four' element={<Suspense fallback={<div>loading</div>}><Page4/></Suspense>}></Route>
       <Route path='/deb' element={<DebTrot/>}></Route>
       <Route path='/multi' element={<MultiStepForm/>}></Route>
         <Route path='/InfiScroll' element={<InfiniteScrollFeed/>}></Route>
       <Route path='/formPractise' element={<FormPractise/>}></Route>
        <Route path='/Gsap' element={<Gsap/>}></Route>
    </Routes>
    </BrowserRouter>

  </div>
  );
};

export default App2;
