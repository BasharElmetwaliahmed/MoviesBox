import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

export const getWatchList=async(userData)=>{
  
const docRef = doc(db, "watchList", userData.user.uid);
const docSnap = await getDoc(docRef);
return docSnap.data().watchlist

}