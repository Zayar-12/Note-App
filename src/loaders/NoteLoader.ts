import { redirect, useParams, type LoaderFunctionArgs } from "react-router";
import { getNote, getNotes } from "../utils/Utilityfunction"

 
 export const dashboardLoader= async ()=>{
    return getNotes();
 }

 export const detailNote= async({params}:LoaderFunctionArgs)=>{
    
     const id=params.id;

     if(!id) throw redirect('/');
  
     const note=getNote(id);

     if(!note) throw redirect('/')

    
    return  note


 }


