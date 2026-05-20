// import React from 'react'
import img from "../Img/download.png";
import icon from "../Img/icons8-engineering-32.png"
import icon2 from "../Img/chevron-direction-bottom-icon.png"
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div class="flex flex-col justify-center items-center p-1.5  "> 
        <NavLink to="/">

          <div class="flex  justify-end items-center w-full gap-4 px-7 py-4 "  >
           <p class="text-[20px] font-semibold text-gray-100 leading-relaxed tracking-wide">سامانه پیام رسان</p>
            <img src={img} alt="" class="w-12 h-12 rounded-full"  />
         </div>
        </NavLink>

        <div class="flex flex-col justify-center items-end w-full p-5 gap-4" >
          <NavLink    class="text-[14px] font-medium text-gray-300 leading-relaxed" to="/">پروفایل<img src={icon} class="inline-block px-2 w-10 h-full  " alt="" /></NavLink>

        <p class="mt-3 mr-3 text-[13px]   font-bold text-gray-500 leading-relaxed">پیام رسان ها </p>
        <NavLink class="text-[14px] font-medium text-gray-300 leading-relaxed" to="/massage"><img src={icon2} class="inline-block px-3.5 m-auto w-10 h-full   invert brightness-0 sepia hue-rotate-180 " alt="" />ارسال پیام<img src={icon} class="inline-block px-2 w-10 h-full  " alt="" /></NavLink>
        <NavLink class="text-[14px] font-medium text-gray-300 leading-relaxed" to="/massageAll"><img src={icon2} class="inline-block px-3.5 w-10 h-full invert brightness-0 sepia hue-rotate-180  " alt="" />ارسال پیام گروهی<img src={icon} class="inline-block px-2 w-10 h-full  " alt="" /></NavLink>

        <p class="mt-3 mr-3 text-[13px]  font-bold text-gray-500 leading-relaxed" >داشبورد</p>
        <NavLink class="text-[14px] font-medium text-gray-300 leading-relaxed" to="/request">درخواست شارژ حساب<img src={icon} class="inline-block px-2 w-10 h-full  " alt="" /></NavLink>
        <NavLink class="text-[14px] font-medium text-gray-300 leading-relaxed" to="/requestAll">درخواست ها<img src={icon} class="inline-block px-2 w-10 h-full  " alt="" /></NavLink>
        </div>

    </div>
  )
}
