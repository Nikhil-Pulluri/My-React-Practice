import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home'
import About from './components/About/About'
import User from './components/User/User'
import Github from './components/Github/Github'
import { githubInfoLoader } from './components/Github/Github'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about/' element={<About/>}/>
      <Route path='user/' element={<User/>}>
          <Route path=':userid' element={<User/>}/>
      </Route>
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github/>}/>
      <Route path='*' element={<div>Not Found</div>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
