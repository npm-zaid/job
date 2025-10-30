import React, { useState } from 'react'



const useTheme = () => {
    const [theme, setTheme] = useState(true)
    const toggleTheme = () => {
        setTheme(!theme)
    }
  return (
    { theme, toggleTheme }
  )
}

export default useTheme