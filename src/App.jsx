import React from "react";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Empty from "./pages/Empty";
import { PiNotepad, PiCube, PiStorefrontLight, PiLightbulbFilament, PiMoney } from "react-icons/pi";
import { GrNotes } from "react-icons/gr";
import { BsStars } from "react-icons/bs";
import { FiHome, FiTruck } from "react-icons/fi";


function App() {
  const options = [
    
    {
      id: 2,
      icon: <PiNotepad />,
      title: "Manage Orders",
      route: "/manage-orders",
    },
    {
      id: 3,
      icon: <FiTruck />,
      title: "Manage NDR",
      route: "/manage-ndr",
    },
    {
      id: 4,
      icon: <PiCube />,
      title: "Manage Products",
      route: "/manage-products",
    },
    {
      id: 5,
      icon: <PiStorefrontLight />,
      title: "Source a Product",
      route: "/source",
    },
    {
      id: 6,
      icon: <PiLightbulbFilament />,
      title: "RTO Intelligence",
      route: "/rto",
    },
    {
      id: 7,
      icon: <GrNotes />,
      title: "Reports",
      route: "/reports",
    },
    {
      id: 8,
      icon: <PiMoney />,
      title: "Payments",
      route: "/payments",
    },
    {
      id: 9,
      icon: <BsStars />,
      title: "Value added services",
      route: "/services",
    },
  ];

  return (
   
      <BrowserRouter>
        <Navbar />
        <div className="flex h-screen mt-2 border-y-2 shadow-shadowDown ">
        <SideNav options={options} />
        <main className="flex-1 p-4 bg-gray-100 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            {options.map((item) => (
              <Route key={item.id} path={item.route} element={<Empty />} />
            ))}
          </Routes>
        </main>
      </div>
      </BrowserRouter>
    
  );
}

export default App;
