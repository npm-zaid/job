import React, { useState } from 'react'
import {Plus} from 'lucide-react'
import { AlwaysStencilFunc } from 'three'

const FormValidation = () => {
    const [formData , setFormData] = useState({name:"" , email:"" ,password:""})
    const [Errors , setErrors] =useState({})

    const handleChange =  (e) => {
        const {name , value} = e.target
        setFormData({ ...formData,[name]: value });
        setErrors({...Errors,[name]:''})
    }

    const validate =()=>{
        let  newErrors ={}
        const {name , email , password} = formData
        if(!name){ newErrors.name = 'fill name'}
        if(!email){ newErrors.email = 'fill email'}
        if(!password){ newErrors.password = 'fill password'}
        return newErrors
    }


    const Submit = (e) => {
         e.preventDefault()
         let ErrorsList = validate()
         setErrors(ErrorsList)
         console.log(ErrorsList)
    }

  return (
    <div className='bg-zinc-800 h-screen w-full flex items-center justify-center'>
        <form onSubmit={Submit} className='bg-zinc-700 min-w-1/2 rounded-lg p-6 flex flex-col gap-6 '>
            <h1 className='uppercase italic text-center text-[5vw] text-white font-extrabold'>login</h1>
            <div><input onChange={handleChange} name='name' value={formData.name} className='block bg-zinc-800 outline-0 p-4 rounded-lg text-white focus:border-sky-500 border border-black text-2xl' placeholder='name' type="text"  />
            {Errors.name && <p className='text-red-300'>plz fill the name</p>}</div>
            <input onChange={handleChange} name='email' value={formData.email} className='block bg-zinc-800 outline-0 p-4 rounded-lg text-white focus:border-sky-500 border border-black text-2xl' placeholder='email' type="email" />
            <input onChange={handleChange} name='password' value={formData.password} className='block bg-zinc-800 outline-0 p-4 rounded-lg text-white focus:border-sky-500 border border-black text-2xl' placeholder='......' type="password" />
            <button className="p-3  bg-sky-400/90 active:bg-sky-300/50 transition-all duration-150 active:scale-95 uppercase font-extrabold text-sky-100 rounded-xl" >
            <Plus size={30} className='block m-auto'/>
           </button>
        </form>
    </div>
  )
}

export default FormValidation