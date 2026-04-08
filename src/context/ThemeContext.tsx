import React, { createContext, useContext, useEffect, useState } from "react";
import type { Theme } from "../types/NoteStructure";
import { saveTheme, THEME_KEY } from "../utils/Utilityfunction";

  
  interface ThemeContextType{
    theme:Theme,
    toggleTheme:()=>void
  }


  const ThemeContext=createContext<ThemeContextType | undefined>(undefined)

  export const ThemeProvider=({children}:{children:React.ReactNode})=>{


    const[theme,setTheme]=useState<Theme>(()=>{
     return localStorage.getItem(THEME_KEY)==="dark"?'dark':'light'
    });
    

    useEffect(()=>{
        saveTheme(theme);
        if(localStorage.getItem(THEME_KEY)=== "dark"){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    },[theme])
    const toggleTheme=()=>{
             
      setTheme( prev=>prev === 'dark'?'light':'dark')
        
    }

    return(
     <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
        
    )
  }

  export const useTheme=()=>{
    const ctx=useContext(ThemeContext)

    if(ctx===undefined) throw new Error("Component must be inside the provider")

      return ctx;
  }

