// import React from 'react'
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"
import  {Outlet}  from "react-router-dom"
import Navbar from "../components/Navbar"

export default function Mainlayout() {
  return (
    <div  class="flex justify-between items-center h-screen" >

      <div class="flex-[8] h-screan ">
        <main class="flex flex-col justify-between h-screen" >
          <Navbar/>
          <Outlet /> 
          <Footer />  
        </main>
      </div>
      
      <div class="flex-[2] h-screen bg-[#0d0d0d]">
       <Sidebar  />
      </div>

    </div>
  )
}
