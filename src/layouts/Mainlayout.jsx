// import React from 'react'
import {Sidebar} from "../components/Sidebar"
import {Footer} from "../components/Footer"
import { Outlet } from "react-router-dom"

export default function Mainlayout() {
  return (
    <div>

      <main>
       <Outlet /> 
       <Footer />  

      </main>
      
      <Sidebar />

    </div>
  )
}
