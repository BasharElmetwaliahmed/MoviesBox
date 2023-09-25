import { useEffect } from "react";
import { useState } from "react"
import useInput from "../hooks/useInput";

function LoginForm() {
    const {    value:nameValue,
    hasError,
    valueOnBlurHandler:nameOnBlurHandler,
    valueOnChangeHandler:nameOnchangeHandler,
    valueIsValid:nameIsValid,
    reset:resetName}=useInput(value=>value.trim()!=='')

   const [formIsValid,setFormValid]=useState(true)
    useEffect(()=>{
    if(hasError){
     setFormValid(false)
    }
    else{
        setFormValid(true)
    }
    },[hasError])


    const submitHandler=(e)=>{
        e.preventDefault();
        if(!nameIsValid){
            return
        }
       resetName()
  

    }


const nameInputClasses=!hasError?"border-black ":"bg-rose-700 bg-opacity-40 border-red-800"
  return (
    <form onSubmit={submitHandler} className='h-600px pt-52 flex flex-col items-center justify-center'>
      <div className='form-control flex gap-3 '>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' className={`border-2    ${nameInputClasses}  `} onChange={nameOnchangeHandler} onBlur={nameOnBlurHandler} value={nameValue} />
      </div>
      {hasError && <p className="text-red-600">input must not be empty</p>}
      <div className="form-actions">
        <button disabled={!formIsValid} className="bg-rose-700 my-10 text-white py-2 px-5 disabled:text-yellow-300 disabled:bg-slate-400">Submit</button>
      </div>
    </form>
  )
}

export default LoginForm