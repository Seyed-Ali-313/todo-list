// import React from 'react';
import { Routes, Route } from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout";
import Profile from "./pages/Profile";
import Massage from "./pages/Massage";
import MassageAll from "./pages/MassageAll";
import Request from "./pages/Request";
import RequestAll from "./pages/RequestAll";



export default function App() {
  return (<>
    
    <Routes>

      <Route path="/" element={<Mainlayout />}>
        <Route index element={<Profile/>} />
        <Route path="massage" element={<Massage />} />
        <Route path="massageAll" element={<MassageAll />} />
        <Route path="request" element={<Request />} />
        <Route path="requestAll" element={<RequestAll />} />
      </Route>

    </Routes>
  </>
  );
}
