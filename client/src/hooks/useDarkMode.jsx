import React, {useEffect} from 'react'
import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (key) => {
    // just simply composing useLocalStorage inside it and passing those values back to the component.
    const [darkMode, setDarkMode] = useLocalStorage(key)
    return [darkMode, setDarkMode]
} 

