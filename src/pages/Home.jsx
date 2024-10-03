import React, { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { FaShopify } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { PiCrownSimple, PiClockLight, PiUserFocus, PiMoney } from "react-icons/pi";
import { GiConfirmed } from "react-icons/gi";
import Accessories from '../components/Accessories';
import VideoSection from '../components/VideoSection';
import Footer from "../components/Footer";
import SHome from './SHome';

const Home = ({options}) => {
  
 

 

  return (
    <section>
      
      <div className='hidden lg:block lg:relative xl:mx-auto xl:ml-9 xl:mr-9 lg:ml-4 lg:mr-4 lg:mx-auto ' >
        <div className='lg:absolute lg:ml-56 lg:items-center lg:h-auto lg:mt-20'>
          
          <div className='lg:h-36 lg:bg-neutral-200 rounded-lg lg:flex items-center justify-evenly'>
            <span className='bg-black w-11 h-36 rounded-s-lg'></span>
            <div className='block justify-center lg:flex flex-col'>
              <div className='flex flex-col items-center'>
                <div className='h-[1px] w-full md:w-[380px] lg:w-[280px] xl:w-[340px] bg-black xl:ml-16 lg:ml-8'></div>

                <div className='bg-black px-3 py-1 mb-2 rounded-b-xl xl:ml-16 lg:ml-8 md:w-80 lg:w-64 lg:py-0 xl:w-80 flex items-center justify-between lg:px-5'>
                  <div className='flex flex-col font-extrabold leading-none text-white'>
                    <h1 className='font-bold text-lg leading-none lg:text-2xl ml-1'>
                      ropos
                      <span className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-500 via-pink-500 to-blue-900">O</span>
                    </h1>
                    <h1 className='text-3xl font-bold leading-none  lg:text-3xl'>clout</h1>
                  </div>
                  <div><RxCross2 className='text-white  lg:text-xl' /></div>
                  <div>
                    <span className='text-white flex text-2xl  lg:text-2xl font-bold italic font-lato gap-1'>
                      <FaShopify className='text-[#7cd312] text-3xl lg:text-4xl' />
                      shopify
                    </span>
                  </div>
                </div>
              </div>

              <div className='block text-center lg:flex flex-col justify-center xl:ml-8 lg:ml-4 w-full'>
                <h1 className='font-bold tracking-wide md:text-2xl xl:text-lg lg:text-sm'>
                  Announcing Partnership with Shopify
                </h1>
                <p className='text-sm tracking-wide md:text-xl xl:text-sm lg:mb-3 lg:text-xs'>
                  to empower digital entrepreneurs in India!
                </p>

               
              </div>
            </div>

            <div className='hidden lg:flex flex-col w-full'>
              <div className='flex items-center justify-around'>
                <span className='text-2xl flex items-center gap-2'>
                  <BsBoxSeam /> <span className='text-sm lg:text-[10.5px] xl:text-sm font-semibold'>Unlimited Stock of <br /> Varied Winning Products</span>
                </span>

                <span className='text-2xl flex items-center gap-2'>
                  <PiCrownSimple /><span className='text-sm lg:text-[10.5px] xl:text-sm font-semibold'>Zero Dependencies<br />on Supplier</span>
                </span>

                <span className='text-2xl flex items-center gap-2'>
                  <PiClockLight /><span className='text-sm lg:text-[10.5px] xl:text-sm  font-semibold'>Same Day &<br />24 Hours Dispatch</span>
                </span>
              </div>
              <hr className='my-4 border-neutral-400 mx-4' />
             
              <div className='flex items-center justify-around'>
                <span className='text-2xl flex items-center gap-2'>
                  <GiConfirmed /> <span className='text-sm lg:text-[10.5px] xl:text-sm font-medium'>Order Confirmation &<br />NDR Management</span>
                </span>

                <span className='text-2xl flex items-center gap-2'>
                  <PiUserFocus /> <span className='text-sm lg:text-[10.5px] xl:text-sm  font-medium'>Dedicated<br />Key Account Manager</span>
                </span>

                <span className='text-2xl flex items-center gap-2'>
                  <PiMoney /><span className='text-sm  lg:text-[10.5px] xl:text-sm font-medium'>Get Daily<br />Payments</span>
                </span>
              </div>
            </div>
            <span className='bg-black w-11 h-36 rounded-e-lg'></span>
          </div>

          <div className='mt-24 lg:mt-14 w-full xl:mt-10 ' >
            <Accessories />
          </div>

          <div className='mt-10 lg:mt-10 w-full'><VideoSection /></div>
          
        </div>
      </div>

      
      <div className=" lg:hidden">
        <SHome />
      </div>
    </section>
  );
};

export default Home;
