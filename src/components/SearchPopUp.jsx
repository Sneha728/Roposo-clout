import React, { useState } from 'react';
import { BsArrowLeft } from "react-icons/bs";
import { FiImage, FiSearch } from 'react-icons/fi';
import { PiCamera } from "react-icons/pi";
import { LuUploadCloud } from "react-icons/lu";
import Navbar from './Navbar';

const SearchPopUp = ({ smallSearch, setSmallSearch }) => {
  const handlleArrowClick = () => {
    setSmallSearch(false);
  };

  return (
    <>
     
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

     
      <div className="fixed z-50 bg-white top-0 w-full p-4 space-y-5 flex flex-col items-center">
        <div className="flex items-center justify-start gap-3 w-full">
          <BsArrowLeft className="text-2xl" onClick={handlleArrowClick} />
          <h1 className="font-bold text-xl">Search Products</h1>
        </div>

      
        <div className="w-full px-4">
          <div className="flex w-full">
            <input
              type="text"
              placeholder="e.g. Saree, T-shirt, USB Cable etc"
              className="w-full px-3 py-2 rounded-l-md focus:outline-none shadow-md border border-gray-900"
            />
            <button className="flex items-center bg-black text-white p-2 rounded-r-md">
              <FiSearch className="text-2xl" />
            </button>
          </div>
        </div>

       
        <div className="bg-neutral-100 rounded-md p-2 flex flex-col items-center gap-3 w-full">
          <div className="w-full">
            <span className="flex items-center justify-start gap-2">
              <FiImage className="text-2xl" />
              <span className="text-xs font-semibold">Search by Image</span>
            </span>
          </div>

          <div className="flex mt-3 w-full justify-center gap-2 items-center">
            <button className="border border-black rounded-md px-3 py-2 flex items-center w-full">
              <span className="flex items-center gap-1">
                <PiCamera className="text-2xl" /> 
                <span className="ml-0 text-xs font-bold">Click a photo</span>
              </span>
            </button>
            <button className="border border-black rounded-md px-3 py-2 flex items-center w-full">
              <span className="flex items-center gap-1">
                <LuUploadCloud className="text-2xl" />
                <span className="ml-0 text-xs font-bold">Upload photo</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPopUp;
