import { useState } from "react"
import { useEffect } from "react"
import { options } from "../options"

function useDetails(id,type) {
     const [show,setCurrentShow]=useState(null)
     const [credits,setCredits]=useState(null)
     const [loading,setLoading]=useState(false)
     const [recommendations,setRecommendations]=useState(null)
     const [similar,setSimilar]=useState(null)

     //fetch details
     const fetchDetails=async()=>{
        setLoading(true)
     const response= await fetch(`https://api.themoviedb.org/3/${type}/${id}?append_to_response=videos`, options)
     const data=await response.json()
     await setCurrentShow(data)
        setLoading(false)
    }
    //fetch cast
       const fetchCast=async()=>{
        setLoading(true)
     const response= await fetch(`https://api.themoviedb.org/3/${type}/${id}/credits`, options)
     const data=await response.json()
      await setCredits(data)
      setLoading(false)

   }
   
       //fetch recommended
       const fetchRecommendations=async()=>{
        setLoading(true)
     const response= await fetch(`https://api.themoviedb.org/3/${type}/${id}/recommendations`, options)
     const data=await response.json()
      await setRecommendations(data)
      setLoading(false)

   }
   
          //fetch similar
       const fetchSimilar=async()=>{
        setLoading(true)
     const response= await fetch(`https://api.themoviedb.org/3/${type}/${id}/similar`, options)
     const data=await response.json()
      await setSimilar(data)
      setLoading(false)

   } 
    useEffect(()=>{
    fetchDetails()
    fetchCast()
    fetchRecommendations()
    fetchSimilar()
    },[])
    return {show , cast:credits?credits.cast:null,loading,recommendations,similar}

}

export default useDetails