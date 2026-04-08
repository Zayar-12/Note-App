


import type { Note } from "../types/NoteStructure";


  const STORAGE_KEY="card_note";
  export  const THEME_KEY="theme";
//get All notes
  export const getNotes=():Note[]=>{
      
    const notes=localStorage.getItem(STORAGE_KEY);

    return notes?JSON.parse(notes):[]
  }

//get speicific note
  export const getNote=(id:string):Note |null=>{

    const notes=getNotes();

    return notes.find(note=>note && note.id === id) || null
    

  }


  //save note

  export const saveNote=(note:Omit<Note,"id"|"createdAt">):Note=>{

    const notes=getNotes();

    const newNote:Note={
        ...note,
        id:crypto.randomUUID(),
        createdAt:new Date().toDateString()

    }

    localStorage.setItem(STORAGE_KEY,JSON.stringify([...notes,newNote]));

    return newNote

  }


  export const editNote=(updatedNote:Note ):Note=>{

    const notes=getNotes();

    const newNotes=notes.map(note=>note.id === updatedNote.id ? updatedNote:note)

    localStorage.setItem(STORAGE_KEY,JSON.stringify(newNotes));

    return updatedNote;

    
  }

  export const deletNote=(id:string)=>{
    const notes=getNotes();
    
    const newNotes=notes.filter(note=>note.id !==id)

    localStorage.setItem(STORAGE_KEY,JSON.stringify(newNotes));

    return newNotes;
  }

  export const saveTheme=(theme:string):void=>{
    
    if (theme === 'dark') {
    localStorage.setItem(THEME_KEY, 'dark');
  } else {
    localStorage.removeItem(THEME_KEY);
  }
  }

