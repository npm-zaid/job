import React, { useEffect, useState } from 'react'
import axios from 'axios'
import gsap from 'gsap'



const Employees = () => {
    const [allEmp,setAllEmp] = useState([])
    const [filteredEmp,setFilteredEmp] = useState([])   
    const [search,setSearch] = useState('')
    const [gender,setGender] = useState('')
    const [loading,setLoading] = useState(true)

    const api= axios.create({
        baseURL: 'https://dummyjson.com',
    })


useEffect(()=>{
const fetching = async()=>{
const res = await api.get('/users?limit=100')
let Users = res.data.users
setAllEmp(Users.slice(0,10))
 setFilteredEmp(Users.slice(0,10))
setLoading(false)
}
fetching()
},[])

useEffect(()=>{
    let filteredEmp = allEmp
    if(search.trim()){
        filteredEmp = filteredEmp.filter((item) => item.firstName.toLowerCase().includes(search.toLowerCase()))
    }
    if(gender){
        filteredEmp = filteredEmp.filter((item) => item.gender === gender)
    }
    setFilteredEmp(filteredEmp)

},[search,gender])

//gsap


useEffect(()=>{

    gsap.fromTo('.box',{
        x:-20,
        duration:1,
        stagger:0.2,
        opacity:0,
    },{
        x:0,
        duration:1,
        stagger:0.2,
        opacity:1,
    })
  
},[search,gender])
  
  return (
    loading ? 
        <div className='min-h-screen bg-[#283618] pt-20 px-8'>
            <h1 className='text-4xl font-bold text-white text-center mb-6'>Loading...</h1>
        </div>
     : 
    <div className='min-h-screen bg-[#283618] pt-20 px-8'>
<h1 className='text-4xl font-bold text-white text-center mb-6'>Employee List</h1>
<div className='flex justify-center items-center gap-3'>
<input onChange={(e)=>setSearch(e.target.value)} value={search} type="text" placeholder='Search by name' className='w-1/2 p-2 rounded-lg outline-none mb-4 bg-[#4A572C] text-white'/> 
<select onChange={(e)=>setGender(e.target.value)} value={gender} name="gender" id="" className=' p-2 rounded-lg outline-none mb-4 bg-[#4A572C] text-white'>
    <option value="">All</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
</select>
</div>
        <div className='grid grid-cols-3'>
            {
                 filteredEmp.map((item) => (
                    <div key={item.id} className='box shadow-lg shadow-[#a5bc59]/30 bg-gradient-to-r from-[#606c38] to-[#283618] text-white/80 flex justify-between items-center rounded-lg p-2 m-2'>
                       <div className=' items-center'>
                         <h1 className='text-2xl font-bold'>{item.firstName}</h1>
                        <p className='text-sm italic'>{item.company.title} ({item.gender})</p>
                        <p className='text-sm italic'>{item.phone}</p>
                       </div>

                       
                        <img src={item.image} alt="" className='w-16 h-16 rounded-full'/>
                       
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Employees