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
    },[edit])

  return (
//   <div className='flex items-center justify-center flex-col'>
//   <h1>Note Detail</h1>
//   <button onClick={()=>{setedit(!edit)}}>{edit?"Editing Mode":"View Only Mode"}</button>
//   {
//    note && edit?
//  <Form method='put' className='dark:bg-[#2d3036] rounded-md p-5 overflow-hidden bg-zinc-200 hover:bg-zinc-300 dark:hover:bg-[#393E46] w-1/3 flex flex-col '>
//   <input type="hidden" value={note.id} name='id' />
//     <input   className=' font-bold text-2xl mb-10 ' type="text" value={title} ref={titleRef} name='title' placeholder='title' onChange={(e)=>{setTitle(e.target.value)}} /><br />
//     <textarea rows={5} name="content" id="" value={content} onChange={(e)=>{setContent(e.target.value)}}></textarea>
//    <div className='flex items-center justify-between'>
//      <button type='submit'>Update</button>
//      <button onClick={handleClick}>Delete</button>
//    </div>
// </Form>
    
   
//    :
   
//     <div className='dark:bg-[#2d3036] rounded-md p-5 overflow-hidden bg-zinc-200 hover:bg-zinc-300 dark:hover:bg-[#393E46] w-1/3 '>
//      <h2  className=' font-bold text-2xl '>{note.title}</h2>
//     <p className='mb-10'>{note.content}</p>
//     <hr />
//     <p>{new Date(note.createdAt).toLocaleString()}</p>
   
//    </div>
 
//   }
//  </div>

<div className='flex items-center justify-center flex-col py-10 gap-6'>

  {/* Title */}
  <h1 className='text-3xl font-semibold tracking-wide'>
    Note Detail
  </h1>

  {/* Toggle Mode */}
  <button
    onClick={() => setedit(!edit)}
    className='px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition'
  >
    {edit ? "Editing Mode" : "View Only Mode"}
  </button>

  {
    note && edit ? (

      <Form
        method='put'
        className='w-full max-w-xl flex flex-col gap-4 p-6 rounded-2xl shadow-lg 
        bg-zinc-200 dark:bg-[#2d3036]'
      >
        <input type="hidden" value={note.id} name='id' />

        {/* Title */}
        <input
          className='text-2xl font-bold bg-transparent outline-none border-b-2 border-gray-400 focus:border-blue-500 pb-1'
          type="text"
          value={title}
          ref={titleRef}
          name='title'
          placeholder='Title'
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Content */}
        <textarea
          rows={6}
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className='resize-none rounded-md p-3 bg-white dark:bg-[#393E46] outline-none focus:ring-2 focus:ring-blue-500'
          placeholder="Write your note..."
        />

        {/* Buttons */}
        <div className='flex justify-end gap-3.5 mt-4'>
          <button
            type='submit'
            className='px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 transition'
          >
          Save
          </button>

          <button
            onClick={handleClick}
            className='px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition'
          >
            Delete
          </button>
        </div>
      </Form>

    ) : (

      <div
        className='w-full max-w-xl p-6 rounded-2xl shadow-lg
        bg-zinc-200 dark:bg-[#2d3036] space-y-4'
      >
        {/* Title */}
        <h2 className='text-2xl font-bold'>
          {note.title}
        </h2>

        {/* Content */}
        <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
          {note.content}
        </p>

        <hr className='border-gray-400 dark:border-gray-600' />

        {/* Date */}
        <p className='text-sm text-gray-500'>
          {new Date(note.createdAt).toLocaleString()}
        </p>
      </div>

    )
  }
</div>
  )
}

export default NoteDetail