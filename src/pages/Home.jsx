import React, { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { FaShopify } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { PiCrownSimple, PiClockLight, PiUserFocus, PiMoney } from "react-icons/pi";
import { GiConfirmed } from "react-icons/gi";
import Accessories from '../components/Accessories';
import VideoSection from '../components/VideoSection';

const Home = () => {
  const [openFeatures, setOpenFeatures] = useState(false);
  const [features, setFeatures] = useState([]);

  const handleFeatures = () => {
    setOpenFeatures(!openFeatures);

    if (!openFeatures) {
      setFeatures([
        {
          id: 1,
          icon: <BsBoxSeam />,
          des: "Unlimited Stock of Varied Winning Products",
        },
        {
          id: 2,
          icon: <PiCrownSimple />,
          des: "Zero Dependencies on Supplier",
        },
        {
          id: 3,
          icon: <PiClockLight />,
          des: "Same Day & 24 Hours Dispatch",
        },
        {
          id: 4,
          icon: <GiConfirmed />,
          des: "Order Confirmation & NDR Management",
        },
        {
          id: 5,
          icon: <PiUserFocus />,
          des: "Dedicated Key Account Manager",
        },
        {
          id: 6,
          icon: <PiMoney />,
          des: "Get Daily Payments",
        },
      ]);
    }
  };

  return (
    <div className='my-5 relative items-center h-auto  xl:mx-14 lg:mt-10'>
      {/* brand box */}
      <div className='h-40 xl:bg-neutral-200 rounded-lg flex items-center justify-evenly'>
        <div className='block mt-10  xl:mt-3 space-y-3 justify-center xl:flex flex-col  '>
          <div className='flex flex-col items-center'>
            <div className='h-[1px] w-full md:w-[380px] xl:w-[275px]  bg-black lg:ml-16'></div>

            <div className='bg-black px-3 py-1 mb-1 rounded-b-xl lg:ml-16 w-60  md:w-80 lg:py-2 xl:py-0 xl:w-64 flex items-center justify-between'>
              <div className='flex flex-col font-extrabold leading-none text-white'>
                <h1 className='font-bold text-lg leading-none lg:text-2xl '>
                  ropos
                  <span className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-500 via-pink-500 to-blue-900">O</span>
                </h1>
                <h1 className='text-3xl font-bold leading-none lg:text-4xl xl:text-3xl'>clout</h1>
              </div>
              <div><RxCross2 className='text-white lg:text-2xl xl:text-xl' /></div>
              <div>
                <span className='text-white flex text-2xl lg:text-3xl xl:text-2xl font-bold italic font-lato gap-1 '>
                  <FaShopify className='text-[#7cd312] text-3xl lg:text-4xl' />
                  shopify
                </span>
              </div>
            </div>
          </div>

          <div className='block text-center lg:flex flex-col justify-center lg:ml-16 lg:mt-2'>
            <h1 className='font-bold tracking-wide md:text-2xl xl:text-sm'>
              Announcing Partnership with Shopify
            </h1>
            <p className='text-sm tracking-wide md:text-xl xl:text-sm lg:mb-3'>
              to empower digital entrepreneurs in India!
            </p>

            
            <div className='xl:hidden mt-3 relative '>
              <button className='bg-black  text-white p-2 rounded-md' onClick={handleFeatures}>
                {openFeatures ? "Hide Features" : "Show Features"}
              </button>

              {openFeatures && (
                <div className="absolute top-full left-0 w-full mt-2 bg-black bg-opacity-55 text-white opacity-100  p-3 rounded-md z-10">
                  <ul className="space-y-2">
                    {features.map((feature) => (
                      <li key={feature.id} className="flex items-center gap-1 ">
                        <span className="text-xl font-bold">{feature.icon}</span>
                        <span className='text-lg font-bold '>{feature.des}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Slant Line */}
        <div className='relative'>
          <div className='hidden xl:flex w-[160px] h-[1px] bg-black ' style={{ transform: 'rotate(-75deg)' }}></div>
        </div>

        
        <div className='hidden xl:flex flex-col'>
          
          <div className='flex items-center gap-2'>
            <span className='text-2xl'><BsBoxSeam /></span>
            <span className='text-sm'>Unlimited Stock of<br />Varied Winning Products</span>
            <span className='text-2xl'><PiCrownSimple /></span>
            <span className='text-sm'>Zero Dependencies<br />on Supplier</span>
            <span className='text-2xl'><PiClockLight /></span>
            <span className='text-sm'>Same Day &<br />24 Hours Dispatch</span>
          </div>
          <hr className='my-4 border-neutral-400' />
          {/* Second Row of Features */}
          <div className='flex items-center  gap-2'>
            <span className='text-2xl'><GiConfirmed /></span>
            <span className='text-sm'>Order Confirmation &<br />NDR Management</span>
            <span className='text-2xl'><PiUserFocus /></span>
            <span className='text-sm'>Dedicated<br />Key Account Manager</span>
            <span className='text-2xl'><PiMoney /></span>
            <span className='text-sm'>Get Daily<br />Payments</span>
          </div>
        </div>
      </div>
      <div className='mt-24 xl:mt-10'>
      <Accessories  />

      </div >
      <div className='mt-10 lg:mt-10 w-full'><VideoSection /></div>
      
    </div>
    
  );
};

export default Home;
