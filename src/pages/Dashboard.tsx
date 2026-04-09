// import React, { useState } from 'react'
// import { Link, useLoaderData } from 'react-router'
// import type { Note } from '../types/NoteStructure'
// import { CiSearch } from "react-icons/ci";

// const Dashboard = () => {
//     const notes=useLoaderData() as Note[];

//     const[search,setSearch]=useState("");

//     const filteredNotes=notes.filter(note => note && note.title)
//     .filter((note)=>note.title.toLowerCase().includes(search.toLowerCase()))
    

//   return (
//     <div className=' flex items-center flex-col justify-center gap-10' >
// <h1 className='text-5xl font-mono'>DashBoard</h1>

// <div className="relative w-1/3">
//   {/* Icon */}
//   <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />

//   {/* Input */}
//   <input
//     type="text"
//     placeholder="Search..."
//     onChange={(e) => setSearch(e.target.value)}
//     className="w-full h-10 pl-10 pr-4 rounded-md dark:bg-[#2d3036] bg-zinc-200  placeholder:text-gray-500 dark:placeholder:text-gray-400"
//   />
// </div>
   
   
//  <div className='grid grid-cols-3 gap-6 w-1/2 '>
//     {
//     filteredNotes.length ? filteredNotes.map(note=>(
   
     
//           <Link to={`/new/${note.id}`} >
//      <div className='dark:bg-[#2d3036]  rounded-md p-5 overflow-hidden bg-zinc-200 hover:bg-zinc-300 dark:hover:bg-[#393E46]   shadow-xl'>
//        <h2  className=' font-bold text-2xl mb-2  ' key={note.id}>{note.title}</h2>
//         <p className="line-clamp-6 text-gray-700 dark:text-gray-300" >{note.content}</p>
//      </div>
        

//         </Link>
      

        
       
//     )): <h2>No Note</h2>
   

//    }
//  </div>
//     </div>
   
   
   
//   )
// }

// export default Dashboard


import React, { useState } from 'react'
import { Link, useLoaderData } from 'react-router'
import type { Note } from '../types/NoteStructure'
import { useTheme } from '../context/ThemeContext'

const Dashboard = () => {

  const{search}=useTheme();
  
 const notes = useLoaderData() as Note[];
 const filteredNotes = notes
    .filter(note => note && note.title)
    .filter(note =>
      note.title.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 gap-10">

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-semibold tracking-wide">
        Dashboard
      </h1>

     

      {/* Notes Grid */}
      <div className="
        w-full max-w-6xl
        grid gap-6
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
      ">

        {filteredNotes.length ? (
          filteredNotes.map(note => (
            <Link key={note.id} to={`/new/${note.id}`}>
              <div className="
                group h-72 p-5 rounded-2xl
                bg-zinc-200 dark:bg-[#2d3036]
                shadow-md hover:shadow-xl
                transition-all duration-200
                hover:-translate-y-1
                flex flex-col
              ">

                {/* Title */}
                <h2 className="
                  font-bold text-xl mb-3
                  group-hover:text-blue-500
                  transition
                ">
                  {note.title}
                </h2>

                {/* Content */}
                <p className="
                  text-gray-700 dark:text-gray-300
                  line-clamp-6 flex-1
                ">
                  {note.content}
                </p>

                {/* Footer hint */}
                <p className="text-xs text-gray-500 mt-3">
                  Click to open →
                </p>

              </div>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            <p className="text-lg">No notes found 🫠</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Dashboard;