// import React from 'react'
import icon3 from "../Img/vecteezy_robot-head-icon-futuristic-ai-robot-face-silhouette-for_68801505.jpg"
import icon4 from "../Img/padesignproject2021_986830-scaled.png"
export default function Profile() {
  return (
    <div class="h-full">

      <div class="flex flex-col gap-6">  
        
        <div class="relative w-full h-[210px] flex flex-col justify-center items-center ">
          <img src={icon4} class="absolute inset-0 w-full h-full opacity-15 object-cover" />
          <div class="flex flex-col justify-center items-center">
           <img src={icon3} alt="" class="w-24  h-24  border-x border-y-8 border-5 border-green-700 rounded-full " />
           <div class="  p-2 text-[20px] font-bold text-black-300 leading-relaxed tracking-wide "> ✅اسماعیل تلان</div>
          </div>
            </div>

          <div class="flex justify-center items-center mb-4">
            <div class=" w-[90%] border-b-2  flex justify-end  ">
              <p class="  w-auto text-end text-[18px] font-bold border-b-2 pb-2 border-blue-400 text-blue-800 leading-relaxed tracking-wide">اطلاعات شخصی</p>
            </div>
          </div>

          <div>
            <div class=" flex items-center justify-center  ">
               <div class="grid grid-cols-2 grid-rows-4 border-2 gap-y-6 p-2 w-[90%] px-24 text-right rounded-2xl">
                

                <p class="border-b-2  p-2 text-[14px] font-bold text-gray-500 leading-relaxed tracking-wide ">اسماعیل</p>
                <p class="border-b-2  p-2 text-[14px] font-bold text-gray-500 leading-relaxed tracking-wide">نام</p>
                <p class="border-b-2  p-2 text-[14px] font-bold text-gray-500 leading-relaxed tracking-wide">تلان</p>
                <p class="border-b-2  p-2 text-[14px] font-bold text-gray-500 leading-relaxed tracking-wide">نام خانوادگی</p>
                <p class="border-b-2  p-2 text-[14px] font-bold text-gray-500 leading-relaxed tracking-wide">1289731160</p>
               <p class="border-b-2  p-2 text-[14px] font-bold text-gray-500 leading-relaxed tracking-wide">نام کاربری</p>
               <p class="border-b-2  p-2 text-[14px] font-bold text-gray-500 leading-relaxed tracking-wide">حقیقی</p>
                <p class="border-b-2  p-2 text-[14px] font-bold text-gray-500 leading-relaxed tracking-wide">نوع کاربر</p>

              </div>
            </div>
          </div>


      </div>
      




      
      
      
     </div>
  )
}
