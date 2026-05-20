// import React from 'react'
import { NavLink } from "react-router-dom"
import icon3 from "../Img/vecteezy_robot-head-icon-futuristic-ai-robot-face-silhouette-for_68801505.jpg"
export default function Navbar() {
  return (

    <div class="flex justify-start items-center px-5 py-5 gap-3 ">
        <img src={icon3} alt="" class="w-14  h-14  border-x border-y-4 border-5 border-blue-700 rounded-full " />
        <span class="text-[14px] text-green-600 bg-green-200 rounded-xl p-3 font-semibold leading-relaxed tracking-wide ">شارژ : 1.200.000 ریال</span>

    
    </div>
  )
}
