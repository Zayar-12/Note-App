import { redirect, type ActionFunctionArgs } from "react-router"
import { saveNote } from "../utils/Utilityfunction";


export const addNewNote= async( {request}:ActionFunctionArgs)=>{
     const formData= request.formData();
     const title= (await formData).get("title") as string;
     const content= (await formData).get("content") as string;

     saveNote({title,content})

     return redirect("/")
}