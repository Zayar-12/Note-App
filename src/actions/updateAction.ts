import { redirect, type ActionFunctionArgs } from "react-router";
import { editNote } from "../utils/Utilityfunction";


export const updatedNote= async({request}:ActionFunctionArgs)=>{
 const formData=request.formData();

 const id=(await formData).get("id") as string;
 const title=(await formData).get("title") as string;
 const content=(await formData).get("content") as string;

 const updatedNote={
    id:id,
    title:title,
    content:content,
    createdAt:new Date().toDateString()
 }
 
editNote(updatedNote)
 
 return redirect("/")
}