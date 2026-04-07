import { useEffect, useRef } from "react"
import { Form } from "react-router"

const NewNote = () => {
    const inputRef=useRef<HTMLInputElement>(null);

    useEffect(()=>{
        document.title=`Note App | Create New Note`
          inputRef.current?.focus();
return ()=>{document.title="Note App"}
    },[])
  return (
   <>
   <h1>Create Note</h1>

   <Form method="post">
    
     <input ref={inputRef} type="text" name="title" placeholder=" title ..."/>
     <textarea name="content" id="" rows={5} placeholder="content..."></textarea>
     <button type="submit">Create</button>
   </Form>
   
   </>
  )
}

export default NewNote