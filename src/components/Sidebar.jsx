// import React from 'react'

export default function Sidebar() {
  return (
    <div>
        <div>
          <p>سامانه پیام رسان</p>
          <img src="" alt="" />
        </div>

        <navlink to="/">پروفایل</navlink>

        <div>
        <p>پیام رسان ها </p>
        <navlink to="/massage">ارسال پیام</navlink>
        <navlink to="/massageAll">ارسال پیام گروهی</navlink>
        </div>

        <div>
        <p>داشبورد</p>
        <navlink to="/request">درخواست شارژ حساب</navlink>
        <navlink to="/requestAll">درخواست ها</navlink>
        </div>

    </div>
  )
}
