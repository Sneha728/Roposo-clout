import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { BsGraphUpArrow } from "react-icons/bs";


const SideNav = ({ options }) => {
 
  const [selected, setSelected] = useState(''); 
  

  const handleClick = (route) => {
    setSelected(route); 
  };

  return (
    <section className='fixed left-0 z-50 top-16'>
      <div className='hidden lg:block'>
        <div className="w-56 lg:w-52 xl:w-56 bg-neutral-100 border-r-2 border-gray-200 p-3 flex flex-col h-screen">
          <div className="mt-5 mb-3">
            <Link
              to="/analytics"
              className={`flex items-center gap-3 p-2  ${
                selected === '/analytics' ? 'bg-black text-white' : 'hover:bg-neutral-200 hover:font-bold hover:text-black'
              }`}
              onClick={() => handleClick('/analytics')}
            >
              <BsGraphUpArrow className='text-2xl' />
              <span className='text-xs'>Analytics</span>
            </Link>
          </div>
          <span className='w-[200px] h-[1px] bg-neutral-300 mb-2'></span>

          <div className="mb-4">
            <Link
              to="/"
              className={`flex items-center gap-3 p-2 ${
                selected === '/' ? 'bg-black text-white' : 'hover:bg-neutral-200 hover:font-bold hover:text-black'
              }`}
              onClick={() => handleClick('/')}
            >
              <FiHome className='text-2xl' />
              <span className='text-xs'>Home</span>
            </Link>
          </div>

          {options.map((item) => (
            <div key={item.id} className="mb-4">
              <Link
                to={item.route}
                className={`flex items-center gap-3 p-2  ${
                  selected === item.route ? 'bg-black text-white' : 'hover:bg-neutral-200 hover:font-bold hover:text-black'
                }`}
                onClick={() => handleClick(item.route)}
              >
                <span className='text-2xl'>{item.icon}</span>
                <span className='text-xs'>{item.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

     

      
    </section>
  );
};

export default SideNav;
