import React from 'react'
import { Outlet } from 'react-router-dom' // this replaces the middle part of the website keeping the header and footer changing
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout
