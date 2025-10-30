import  { useState } from 'react'
import { createContext } from 'react'



export const Store = createContext()

const Context = ({children}) => {
 

 const value={
    name : 'Zaid',
    age : 20,
    job : 'Front-end Developer',
  }

  return (
   <Store.Provider value={value}>
   {children}
   </Store.Provider>
  )
}

export default Context
