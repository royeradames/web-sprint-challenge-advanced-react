import React, { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {
    //states
    const [storedValue, setStoreValue] = useState(() => {

        //get local storage by key
        const item = JSON.parse(window.localStorage.getItem(key))
        //parse and return stored json or, if undefined, return initialValue
        return item ? JSON.parse(item) : initialValue
    })
    const setValue = value => {
        //save state
        setStoreValue(value)
        //save to local storage
        window.localStorage.setItem(key, JSON.stringify(value))
        
    }
    return [storedValue, setValue]
}