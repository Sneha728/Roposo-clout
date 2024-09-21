import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';
import { BsGraphUpArrow } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';

const SideNav = ({ options }) => {
  const [open, setOpen] = useState(false);
 
  

 
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false); 
      }
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  
  const closeMenu = () => {
    setOpen(false);
  };
 
    
  

  return (
    <section>
      <div className='hidden lg:block'>
        <div className="w-60 bg-neutral-100 border-r-2 border-gray-200 p-4 flex flex-col ">
          <div className="my-5">
            <Link
              to="/analytics"
              className="flex items-center gap-3 p-2 rounded-md hover:bg-black hover:text-white"
            >
              <BsGraphUpArrow className='text-xl' />
              <span>Analytics</span>
            </Link>
          </div>
          <div className='mb-3 w-60 border-gray-300 '><hr /></div>
          <div className="mb-4">
            <Link
              to="/"
              className="flex items-center gap-3 p-2 rounded-md hover:bg-black hover:text-white"
            >
              <FiHome className='text-xl' />
              <span >Home</span>
            </Link>
          </div>
          {options.map((item) => (
            <div key={item.id} className="mb-4">
              <Link
                to={item.route}
                className="flex items-center gap-3 p-2 rounded-md hover:bg-black hover:text-white"
              >
                <span className='text-xl'>{item.icon}</span>
                <span>{item.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className='lg:hidden' onClick={() => setOpen(!open)}>
        <MdMenu className='text-2xl' />
      </div>

      <ResponsiveMenu open={open} options={options} closeMenu={closeMenu} />
    </section>
  );
};

export default SideNav;
