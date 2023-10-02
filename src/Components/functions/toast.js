  import { toast } from 'react-toastify';

 const toastify=(msg,type)=>{
    if(type){
toast.success(msg, {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
})}
else{
  toast.error(msg, {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
})  

}

}
export default toastify