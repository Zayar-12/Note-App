import React, { useEffect, useRef, useState } from 'react'
import { redirect, useLoaderData } from 'react-router'
import type { Note } from '../types/NoteStructure'
import { Form } from 'react-router'
import { deletNote } from '../utils/Utilityfunction'


const NoteDetail = () => {
    const note=useLoaderData() as Note;
  const[edit,setedit]=useState(false);
  const[title,setTitle]=useState(note.title);
  const[content,setContent]=useState(note.content);

  const titleRef=useRef<HTMLInputElement>(null)


  const handleClick=()=>{
     deletNote(note.id);
     return redirect('/')
  }
   

    useEffect(()=>{
      if(edit){
        titleRef.current?.focus()
      }
   document.title=`Note App | ${note.title}`
      
   return ()=>{document.title="Note App"}
    },[])

  return (
  <>
  <h1>Note Detail</h1>
  <button onClick={()=>{setedit(!edit)}}>{edit?"Editing Mode":"View Only Mode"}</button>
  {
   note && edit?
 <Form method='put'>
  <input type="hidden" value={note.id} name='id' />
    <input type="text" value={title} ref={titleRef} name='title' placeholder='title' onChange={(e)=>{setTitle(e.target.value)}} /><br />
    <textarea name="content" id="" value={content} onChange={(e)=>{setContent(e.target.value)}}></textarea>
    <button type='submit'>Update</button>
     <button onClick={handleClick}>Delete</button>
</Form>
    
   
   :
   <div>
     <h2>{note.title}</h2>
    <p>{note.content}</p>
    <p>{new Date(note.createdAt).toLocaleString()}</p>
   
   </div>
  }
  </>
  )
}

export default NoteDetail