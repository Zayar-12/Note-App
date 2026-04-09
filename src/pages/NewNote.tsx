// import { useEffect, useRef } from "react"
// import { Form } from "react-router"

// const NewNote = () => {
//     const inputRef=useRef<HTMLInputElement>(null);

//     useEffect(()=>{
//         document.title=`Note App | Create New Note`
//           inputRef.current?.focus();
// return ()=>{document.title="Note App"}
//     },[])
//   return (
//    <>
//    <h1>Create Note</h1>

//    <Form method="post">
    
//      <input ref={inputRef} type="text" name="title" placeholder=" title ..."/>
//      <textarea name="content" id="" rows={5} placeholder="content..."></textarea>
//      <button type="submit">Create</button>
//    </Form>
   
//    </>
//   )
// }

// export default NewNote


import { useEffect, useRef } from "react"
import { Form } from "react-router"

const NewNote = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    document.title = `Note App | Create New Note`
    inputRef.current?.focus()
    return () => { document.title = "Note App" }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center py-10 gap-6">

      {/* Title */}
      <h1 className="text-3xl font-semibold tracking-wide">
        Create New Note
      </h1>

      {/* Form Card */}
      <Form
        method="post"
        className="w-full max-w-xl flex flex-col gap-5 p-6 rounded-2xl shadow-lg
        bg-zinc-200 dark:bg-[#2d3036]"
      >

        {/* Title Input */}
        <input
          ref={inputRef}
          type="text"
          name="title"
          placeholder="Title..."
          className="text-2xl font-bold bg-transparent outline-none border-b-2 border-gray-400 focus:border-blue-500 pb-2  placeholder:text-gray-500 dark:placeholder:text-gray-400"
        />

        {/* Content */}
        <textarea
          name="content"
          rows={6}
          placeholder="Write your note..."
          className="resize-none rounded-md p-3 bg-white dark:bg-[#393E46]
          outline-none focus:ring-2 focus:ring-blue-500  placeholder:text-gray-500 dark:placeholder:text-gray-400"
        />

        {/* Button */}
        <button
          type="submit"
          className="mt-2 px-4 py-2 rounded-md bg-blue-500 text-white
          hover:bg-blue-600 transition"
        >
          Create Note
        </button>

      </Form>
    </div>
  )
}

export default NewNote