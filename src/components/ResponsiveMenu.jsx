import React from 'react';
import { Link } from "react-router-dom";
import { BsGraphUpArrow } from "react-icons/bs";
import { FiHome } from 'react-icons/fi';
import { useEffect } from 'react';

const ResponsiveMenu = ({ open, options, closeMenu }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';  
         
    }else{
      document.body.style.overflow = 'auto'; 
    }
    
    return () => {
      document.body.style.overflow = 'auto';    
    };
  }, [open]);

  return (
    <div>
      {open && (
        <>
         <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"
         onClick={closeMenu} 
       ></div>

        <div className="fixed top-36 md:top-20 left-0 w-60 h-full bg-neutral-100 border-r-2 border-gray-200 p-4 z-50">
          
          <div className="my-2">
            <Link
              to="/analytics"
              className="flex items-center gap-3 p-1 rounded-md hover:bg-black hover:text-white"
              onClick={closeMenu} 
            >
              <BsGraphUpArrow className='text-xl' />
              <span>Analytics</span>
            </Link>
          </div>
          <div className='mb-1 w-60 border-gray-300 '><hr /></div>
          <div className="mb-1">
            <Link
              to="/"
              className="flex items-center gap-2 p-2 rounded-md hover:bg-black hover:text-white"
              onClick={closeMenu}  
            >
              <FiHome className='text-xl' />
              <span>Home</span>
            </Link>
          </div>
          {options.map((item) => (
            <div key={item.id} className="mb-1">
              <Link
                to={item.route}
                className="flex items-center gap-2 p-2 rounded-md hover:bg-black hover:text-white"
                onClick={closeMenu}  
              >
                <span className='text-xl'>{item.icon}</span>
                <span>{item.title}</span>
              </Link>
            </div>
          ))}
        </div>
        </>
      )}
    </div>
  );
};

export default ResponsiveMenu;
