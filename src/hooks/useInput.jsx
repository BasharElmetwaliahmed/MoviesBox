/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';

function useInput(validate) {
    const [enteredValue,setEnteredValue]=useState('');
    const [inputIsTouched,setInputIsTouched]=useState(false)
    const valueIsValid=validate(enteredValue)
    const hasError=inputIsTouched && !valueIsValid 
 

        const valueOnChangeHandler=(e)=>{
        setEnteredValue(e.target.value)

                                       }
        const valueOnBlurHandler=()=>{
        setInputIsTouched(true) 
    }
        const reset=()=>{
            setEnteredValue('')
            setInputIsTouched(false)
            console.log('reseted')
        }

  return {
    value:enteredValue,
    hasError,
    valueOnBlurHandler,
    valueOnChangeHandler,
    reset,
    valueIsValid
  }
}

export default useInput