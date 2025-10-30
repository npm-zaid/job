import React, { useMemo } from 'react'
import Parent from './components/Parent'
import Child from './components/Child'


import { Store } from './components/Context.jsx'
import { lazy ,Suspense } from 'react'
const Page1 = lazy(() => import('./components/Page1.jsx'))
const Page2 = lazy(() => import('./components/Page2.jsx'))
const Todo = lazy(() => import('./components/Todo.jsx'))

import Page3 from './Redux/Page3.jsx'
import EmployeeList from './components/EmployeeList.jsx'
import Employees from './components/Employees.jsx'
import Gsap from './components/Gsap.jsx'
import JobTracker from './components/JobTracker.jsx'
import R3FScene from './components/R3FScene.jsx'
import Model from './components/Model.jsx'
import FormValidation from './components/FormValidation.jsx'
import Cursor from './components/Cursor.jsx'
import Form from './components/Form.jsx'




import { BrowserRouter, Routes, Route, } from 'react-router-dom'

import { Link, NavLink } from "react-router-dom";

const Wrapper = Parent(Child)

const App = () => {


const  M = useMemo(()=>{
  return 'hello'
},[])

console.log(M)

  return (
   <div className='bg-zinc-900'>
   
    <BrowserRouter>
     <div className='fixed flex bg-zinc-900 gap-5  p-3 w-full'>
      <NavLink to='/' className={({isActive})=>(isActive?'text-white': 'text-white/40')}>Page 1</NavLink>
      <NavLink to='/2' className={({isActive})=>(isActive?'text-white': 'text-white/40')}>Page 2</NavLink>
      <NavLink to='/todo' className={({isActive})=>(isActive?'text-white': 'text-white/40')}>Todo</NavLink>
      <NavLink to='/form' className={({isActive})=>(isActive?'text-white': 'text-white/40')}>Form</NavLink>
      <NavLink to='/3' className={({isActive})=>(isActive?'text-white': 'text-white/40')}>Redux</NavLink>
      <NavLink to='/form' className={({isActive})=>(isActive?'text-white': 'text-white/40')}>Form</NavLink>    
      <NavLink to='/formValidation' className={({isActive})=>(isActive?'text-white': 'text-white/40')}>Form Validation</NavLink>
      <NavLink to='/cursor' className={({isActive})=>(isActive?'text-white': 'text-white/40')}>Cursor</NavLink>
      <NavLink to='/emp2' className={({isActive})=>(isActive?'text-white': 'text-white/40')}>Emp</NavLink>
      <NavLink to='/emp' className={({isActive})=>(isActive?'text-white': 'text-white/40')}>Emp clone</NavLink>
      <NavLink to='/gsap' className={({isActive})=>(isActive?'text-white': 'text-white/40')}>Gsap</NavLink>
      <NavLink to='/job' className={({isActive})=>(isActive?'text-white': 'text-white/40')}>Job Tracker</NavLink>
      <NavLink to='/r3f' className={({isActive})=>(isActive?'text-white': 'text-white/40')}>R3F</NavLink>
      <NavLink to='/model' className={({isActive})=>(isActive?'text-white': 'text-white/40')}>Model</NavLink>

    </div>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path='/' element={<Page1/>}/>
      <Route path='/2' element={<Page2/>}/>
      <Route path='/todo' element={<Todo/>}/>
      <Route path='/formValidation' element={<FormValidation/>}/>
      <Route path='/form' element={<Form/>}/>


      <Route path='/cursor' element={<Cursor/>}/>
      <Route path='/3' element={<Page3/>}/>
       <Route path='/emp' element={<Employees/>}/>
      <Route path='/emp2' element={<EmployeeList/>}/>
      <Route path='/gsap' element={<Gsap/>}/>
      <Route path='/job' element={<JobTracker/>}/>
      <Route path='/r3f' element={<R3FScene/>}/>
      <Route path='/model' element={<div className='bg-radial-[at_50%_75%] from-fuchsia-400 to-black/70 to-90%'><Model/></div>}/>
      <Route path='/form' element={<Form/>}/>
      

    </Routes>
    </Suspense>
      </BrowserRouter>
   </div>
  )
}

export default App