import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard.tsx'
import Bar from './pages/bar/Bar.tsx'
import Team from './pages/team/Team.tsx'
import Calendar from './pages/calendar/Calendar.tsx'
import Contacts from './pages/contacts/Contacts.tsx'
import Faq from './pages/faq/Faq.tsx'
const route=createBrowserRouter([
  {
    path:"/",
    element:<App/>,

    children:[
      {
        path:"/dashboard",
        element:<Dashboard/>
      },
      {
        path:"/bar",
        element:<Bar/>
      },
      {
        path:"/team",
        element:<Team/>
      },
      {
        path:"/calendar",
        element:<Calendar/>
      },
      {
        path:"/contacts",
        element:<Contacts/>
      },
      {
        path:"/faq",
        element:<Faq/>
      }
    ]
  },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)
