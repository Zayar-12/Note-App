import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout/Layout'
import Dashboard from './pages/Dashboard'
import NewNote from './pages/NewNote'
import { dashboardLoader, detailNote } from './loaders/NoteLoader'
import { addNewNote } from './actions/formAction'
import NoteDetail from './pages/NoteDetail'
import { updatedNote } from './actions/updateAction'

const App = () => {

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          index:true,
          element:<Dashboard/>,
          loader:dashboardLoader

           
         },
         {
          path:'/new',
          element:<NewNote/>,
          action:addNewNote
         },
          {
          path:'/new/:id',
          element:<NoteDetail/>,
           loader:detailNote,
           action:updatedNote
         }
    ]
    }
  ])
  return (
    
    <RouterProvider router={router}/>

  )
}

export default App