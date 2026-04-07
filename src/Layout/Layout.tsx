import React from 'react'
import { Link, Outlet } from 'react-router';
const Layout = () => {
  return (
    <div>
        <nav>
            <Link to={"/"}>Home</Link>
        </nav>

        <nav>
            <Link to={"/new"}>New Note</Link>
           <button>Mode</button>
        </nav>

        <Outlet/>
    </div>
  )
}

export default Layout