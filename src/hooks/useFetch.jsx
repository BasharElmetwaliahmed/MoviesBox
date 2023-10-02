import { useState } from 'react'
import { useEffect } from 'react'
import { options } from '../options'

function useFetch(url,category) {
   const [collection,setCollection]=useState(null)
   const [isLoading,setLoading]=useState(false)
   const fetchData=async()=>{
            setLoading(true)
            const response= await fetch(url,options)
            const data=await response.json()
            setCollection(data)
            setLoading(false)
   }
    useEffect(()=>{
        fetchData()
    },[url,category])

  return {collection,isLoading}
}

export default useFetch