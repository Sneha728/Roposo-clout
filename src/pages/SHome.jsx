import React from "react";
import { HiBadgeCheck } from "react-icons/hi";
import { FaShippingFast } from "react-icons/fa";
import { PiMoneyLight } from "react-icons/pi";
import { BsBoxSeam } from "react-icons/bs";
import Accessories from "../components/Accessories";
import VideoSection from "../components/VideoSection";
import { FiHome, FiUser } from "react-icons/fi";
import { PiCaretDoubleRightDuotone } from "react-icons/pi";
import { BsGraphUpArrow } from "react-icons/bs";
import { useState} from "react";
import { Link } from "react-router-dom";

const SHome = () => {
  const [selected, setSelected] = useState(''); 
  const handleClick = (route) => {
    setSelected(route); 
  };
  const choices = [
    {
      id:0,
      icon:<FiHome />,
      title:"Home",
      route:"/"
    },
    {
      id:1,
      icon:<PiCaretDoubleRightDuotone />,
      title:"Discover",
      route:"/discover"
    },
    {
      id:2,
      icon:<PiMoneyLight />,
      title:"Payments",
      route: "/payments",
    },
    {
      id:3,
      icon:<BsGraphUpArrow />,
      title:"Analytics",
      route:"/analytics"
    },
    {
      id:4,
      icon:<FiUser />,
      title:"Account",
      route:"/account"
    },
  ]
    return (
        <div className=' mt-11  space-y-8 h-screen'>
      <div  className="flex flex-col items-center">
      <span className="w-full bg-purple-200 h-[1px]"></span>
        
        {/* features */}
        <div className="bg-purple-200 md:h-20 w-full flex  items-center justify-between space-x-3 p-3">
          <span className="flex items-center gap-1"  ><HiBadgeCheck className="text-2xl" /><span className="text-[8px] md:text-sm">Quality Assured products</span></span>
          <span className="flex items-center gap-1"  ><FaShippingFast className="text-2xl  "/><span className="text-[8px] md:text-sm">Free Shipping</span></span>
          <span className="flex items-center gap-1"  ><PiMoneyLight className="text-2xl  " /><span className="text-[8px] md:text-sm">Cash on delivery</span></span>
          <span className="flex items-center gap-1"  ><BsBoxSeam  className="text-xl  " /><span className="text-[8px] md:text-sm">5 days Easy Return</span></span>
          
        </div>
        <span className="w-full bg-purple-300 h-[0.2px]"></span>
        </div>
  
       
        <div className="">
          <Accessories />
        </div>
  
        
        <div>
          <VideoSection />
        </div>
  
       
</div>
    );

  }
  
  export default SHome;
  