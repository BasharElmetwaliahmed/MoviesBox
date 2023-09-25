/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
let init=false
function Pagination({pages,currentPage,setCurrentPage}) {

   const [showedNumbers,setShowedNumbers]=useState([1,2,3,4,pages])
    useEffect(()=>{
   
        if(pages<5){
            let range=[]
            for(let i=1;i<=pages;i++){
                range.push(i)
            }
            setShowedNumbers(range)

        }
    else if(init){
            console.log(init)

             if(currentPage==1 ||currentPage==2 ){
      setShowedNumbers([1,2,3,4,pages])
     }
    else if(currentPage==pages || currentPage==pages-1){
            setShowedNumbers([1,pages-3,pages-2,pages-1,pages])

     }  
     else {
        setShowedNumbers([1,currentPage-1,currentPage,currentPage+1,pages])
     }
    }
    init=true
         console.log(showedNumbers)  

    
   },[currentPage])
 let paginationBtns=showedNumbers.map(pageNumber=>{
 if(pageNumber!=currentPage)
  return <button key={pageNumber} className="pagination-btn" onClick={()=>{setCurrentPage(pageNumber)}}>{pageNumber}</button>
 else return <button key={pageNumber} className="pagination-btn text-white bg-rose-700" onClick={()=>{setCurrentPage(pageNumber)}}>{pageNumber}</button>
})
  return (
    <div className="flex gap-3 max-auto justify-center">
        { pages>1 &&
   <>
           <button className="pagination-btn ">Prev</button>
    {paginationBtns}

        <button className="pagination-btn">Next</button></>}
    </div>
  )
}

export default Pagination