import React from 'react'
import { createContext } from "react";

export const Store = createContext()

const Context = ({children}) => {
    const value ={
        name:"zaid",
        age:20,
        foo: () => console.log("foo")
    }

  return (
    <Store.Provider value={value}>
        {children}
    </Store.Provider>
  )
}

export default Context