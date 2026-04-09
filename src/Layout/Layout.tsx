
import {  NavLink, Outlet } from 'react-router';
import { useTheme } from '../context/ThemeContext';

import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";


const Layout = () => {
  const{theme,toggleTheme,setSearch}=useTheme();
   


  return (
    <div className='  min-h-screen justify-center  bg-zinc-50 dark:bg-[#222831] text-zinc-900 dark:text-zinc-100 transition-colors duration-200 font-sans'>
      
       <div className='flex sticky top-0 z-50 bg-zinc-50 dark:bg-[#222831] shadow-md items-center justify-around p-8 '>
         <nav>
             <NavLink to={"/"} className={({isActive})=>isActive?"font-bold ":""}><AiFillHome className='text-2xl' /></NavLink>
        </nav>
         {/* Search */}
              <div className="relative w-full max-w-md">
                <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
        
                <input
                  type="text"
                  placeholder="Search notes..."
                  onChange={(e) => setSearch(e.target.value)}
                  className="
                    w-full h-11 pl-10 pr-4 rounded-full
                    bg-zinc-200 dark:bg-[#2d3036]
                    shadow-sm focus:shadow-md
                    outline-none transition
                    placeholder:text-gray-500 dark:placeholder:text-gray-400
                    focus:ring-2 focus:ring-blue-500
                  "
                />
              </div>
        <nav className='flex items-center gap-5'>
            <NavLink to={"/new"} className={({isActive})=>isActive?"font-bold ":""}>New Note</NavLink>
           <button onClick={toggleTheme} >{theme==="dark"?<CiDark  className='text-2xl '/>:<CiLight  className='text-2xl ' />}</button>
        </nav>
       </div>
        
          
        <Outlet />
        
    </div>
  )
}

export default Layout