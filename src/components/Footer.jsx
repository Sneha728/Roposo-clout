import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { PiMoneyLight } from "react-icons/pi";
import { FiHome, FiUser } from "react-icons/fi";
import { PiCaretDoubleRightDuotone } from "react-icons/pi";
import { BsGraphUpArrow } from "react-icons/bs";

const Footer = () => {
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
    <div className="fixed bottom-0 w-full flex items-center justify-around bg-white p-2 lg:hidden">
        {choices.map((option) => (
       <div key={option.id} className="flex-1">
       <Link
        to={option.route}
        className={`flex items-center justify-center w-full p-2 rounded-md ${
          selected === option.route
            ? 'bg-black text-white'
            : 'hover:font-bold hover:text-black'
        }`}
        onClick={() => handleClick(option.route)}
      >
        <span className="flex flex-col items-center space-y-1">
          <span className="text-lg">{option.icon}</span>
          <span className="font-semibold text-[10px]">{option.title}</span>
        </span>
      </Link>
    </div>
  ))}
</div>
  );
}

export default Footer;
