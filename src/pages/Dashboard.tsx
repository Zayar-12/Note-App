import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router'
import type { Note } from '../types/NoteStructure'

const Dashboard = () => {
    const notes=useLoaderData() as Note[];

    const[search,setSearch]=useState("");

    const filteredNotes=notes.filter(note => note && note.title)
    .filter((note)=>note.title.toLowerCase().includes(search.toLowerCase()))
    

  return (
   <>
   <h1>DashBoard</h1>

   <input type="text" placeholder='search...' onChange={(e)=>{setSearch(e.target.value)}}/>
   {
    filteredNotes.length ? filteredNotes.map(note=>(
   
        <Link to={`/new/${note.id}`}>
         <h2 key={note.id}>{note.title}</h2>
        <p>{note.content}</p>
        </Link>
       
    )): <h2>No Note</h2>
   

   }
   
   </>
  )
}

export default Dashboard