import React, { useEffect, useState } from 'react'
import {Plus , Minus ,User ,Briefcase ,MapPin,Check, Vault } from 'lucide-react'
import { useForm } from 'react-hook-form'

const FormPractise = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [page,setpage]=useState(1)
  const lastpage = 4
  const inputClass = 'bg-zinc-900 text-white w-full  p-3 outline-none focus:border-amber-300 border border-transparent'
 
   const steps = [
    { number: 1, title: 'Personal', icon: User },
    { number: 2, title: 'Professional', icon: Briefcase },
    { number: 3, title: 'Address', icon: MapPin },
  
  ];

  const next =()=>{
    if(page<lastpage){
      setpage(page+1)
      console.log(page)
    }
  }

    const func =()=>{
      switch(page){
        case 1:
          return(
            <div className='h-1/2 w-full bg-zinc-800 rounded-lg p-4 flex gap-3 flex-col'>
              <h1 className='text-3xl font-bold text-amber-400 uppercase'>personal information</h1>
              <div className='flex gap-3 '>
                <input {...register('firstname')} type="text" className={`${inputClass}`}  name='firstname' placeholder=' first name' />
                {errors.firstname && <p>{errors.firstname.message}</p>}
                <input {...register('lastname')} type="text" className={`${inputClass}`}  name='lastname' placeholder=' last name' /> 
              </div>
              <input {...register('email')} type="email" name="email" placeholder='Email' className={`${inputClass}`} />
               <input {...register('phone')} type="phone" name="Phone" placeholder='Phone' className={`${inputClass}`} />

            </div>
          );
        case 2:
          return(
              <div className=' w-full bg-zinc-800 rounded-lg p-4 flex gap-3 flex-col'>
              <h1 className='text-3xl font-bold text-amber-400 uppercase'>Professional</h1>
              
                <input {...register('company')} type="text" className={`${inputClass}`}  name='Company' placeholder='Company' />
                <input {...register('position')} type="text" className={`${inputClass}`}  name='Positiom' placeholder='Position' /> 
               <input {...register('experience')} type="text" name="Experience" placeholder='Experience' className={`${inputClass}`} />

               <textarea name="Skills" placeholder='key Skills' id="" className={`${inputClass} h-30`}></textarea>

            </div>

          );
        case 3:
          return(
             <div className='h-1/2 w-full bg-zinc-800 rounded-lg p-4 flex gap-3 flex-col'>
              <h1 className='text-3xl font-bold text-amber-400 uppercase'>Adress Info</h1>
              <input {...register('street')} type="text" name="street" placeholder='street' className={`${inputClass}`} />
              <div className='flex gap-3 '>
                <input {...register('city')} type="text" className={`${inputClass}`}  name='city' placeholder=' city' />
                <input {...register('state')} type="text" className={`${inputClass}`}  name='state' placeholder=' state' /> 
              </div>
                <div className='flex gap-3 '>
                <input {...register('zip')} type="text" className={`${inputClass}`}  name='zip' placeholder=' zip' />
                <input {...register('country')} type="text" className={`${inputClass}`}  name='country' placeholder=' country' /> 
              </div>
            </div>
           

          );  
          
           default:
        return (
          <h1 className='text-3xl font-bold text-amber-400 uppercase'>are you gonna submit the form?
           <button  className='bg-amber-400  p-2 uppercase font-extrabold text-black'>Submit</button></h1>
          
        )
      }
     
    }



    
 

  return (
    <div className='bg-gradient-to-l from-zinc-700 to-zinc-900 h-screen flex flex-col gap-4 items-center justify-center'>
       {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isCompleted = page > step.number;
              const isCurrent = page === step.number;

              return (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-md ${
                        isCompleted
                          ? 'bg-green-500 text-white shadow-green-500/40'
                          : isCurrent
                          ? 'bg-blue-600 text-white shadow-blue-500/40'
                          : 'bg-gray-700 text-gray-400'
                      }`}
                    >
                      {isCompleted ? <Check size={24} /> : <Icon size={24} />}
                    </div>
                    <span className={`mt-2 text-sm ${isCurrent ? 'text-blue-400' : 'text-gray-400'}`}>
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-1 flex-1 mx-2 rounded-full ${
                        isCompleted ? 'bg-green-500' : 'bg-gray-700'
                      }`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
       
       
<form className='w-1/2 bg-zinc-800 rounded-lg p-4 flex gap-3 flex-col' action="" onSubmit={handleSubmit(onSubmit)}>
    {func()}
</form>


    
    <div className=' flex gap-4'>
       <button disabled={(page <= 1)? true: false} className='bg-amber-400  p-2 rounded-l-full disabled:bg-gray-500'  onClick={()=>setpage(page-1)}><Minus size={30}/></button>
       {page === lastpage ? (
      <button  className='bg-amber-400  p-2 uppercase font-extrabold'>Submit</button>
    ): <button   disabled={(page >= lastpage)? true: false}  className='bg-amber-400  p-2 rounded-r-full'  onClick={next}><Plus size={30}></Plus></button>}
     
    </div>
    </div>
  )
}

export default FormPractise