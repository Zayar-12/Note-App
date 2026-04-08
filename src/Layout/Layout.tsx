import React from 'react'
import { Link, NavLink, Outlet } from 'react-router';
import { useTheme } from '../context/ThemeContext';
const Layout = () => {
  const{theme,toggleTheme}=useTheme();
  return (
    <div className='min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-200'>
        <nav>
             <NavLink to={"/"} className={({isActive})=>isActive?"font-bold text-blue-500":""}>Home</NavLink>
        </nav>

        <nav>
            <NavLink to={"/new"} className={({isActive})=>isActive?"font-bold text-blue-500":""}>New Note</NavLink>
           <button onClick={toggleTheme}>{theme}Mode</button>
        </nav>

        <Outlet/>
    </div>
  )
}

export default Layout