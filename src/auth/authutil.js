import { redirect } from "react-router-dom";

function getUser(){
    if(localStorage.getItem("user")){
        return JSON.parse(localStorage.getItem("user"));
    }
    else
    {
        return null
    }
}

export async function authLoader(){
    if(await !getUser()?.token){
    return redirect('/')
    }
    return 0
}

export async function checkUserLoader(){
    const user=await getUser();
    if(user){
    return user        
    }
    else{
        return null
    }
}