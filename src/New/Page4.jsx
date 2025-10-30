import React from 'react'
import useFetch from './useFetch.jsx';

const Page4 = () => {
    const {data:user,loading} = useFetch('https://dummyjson.com/users');
     const {data:product,loading:loadingProduct} = useFetch('https://dummyjson.com/products');
    console.log(user);
    if(loading) return <div>loading</div>


  return (
    <div className='bg-green-300/50 '>
     
   {loadingProduct ? <div>loading</div> :
        <div className='grid grid-cols-3  bg-zinc-800/40 gap-4 p-8 '>
          {product.products.slice(0,9).map((item,index)=>(
            <div key={index} className='bg-black/70 text-white p-4 rounded-lg  uppercase italic'>
              <div>{item.title}</div>
              <div>{item.description}</div>
              <div>{item.price}</div>
            </div>
          ))}   
        </div>
   }


         <div className='grid grid-cols-3  bg-zinc-800/40 mt-10 gap-4 p-8 '>
          {user.users.slice(0,9).map((item,index)=>(
            <div key={index} className='bg-black/70 text-white p-4 rounded-lg  uppercase italic'>
              <div>{item.firstName}</div>
              <div >{item.email}</div>
              <div>{item.phone}</div>
            </div>
          ))}   
        </div>
    </div>
  )
}

export default Page4