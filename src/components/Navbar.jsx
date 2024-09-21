import React, { useEffect, useState } from 'react';
import { FiImage, FiSearch, FiBell } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";

const Navbar = () => {
  const [placeholder, setPlaceholder] = useState("Select Products..");
  const [searchIcon, setSearchIcon] = useState(<FiSearch />);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setPlaceholder("Search Products (e.g. Magic Book, Bedsheets etc)");
        setSearchIcon(
          <button
            onClick={() => alert("Pressed button")}
            className="flex items-center justify-center bg-black px-4 gap-1 py-2 text-white rounded-sm mx-3 text-xs"
          >
            <span><FiSearch className="text-xl" /></span> Search
          </button>
        );
      } else {
        setPlaceholder("Select Products...");
        setSearchIcon(
          <button onClick={() => alert("Pressed button")} className='bg-black rounded-sm text-white p-2 '>
            <FiSearch className="text-xl" />
          </button>
        );
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container block items-center justify-between md:flex space-y-3 md:space-y-0">
      {/* brand name */}
      <div className="flex items-center justify-between text-center md:text-left space-x-2">
        <div className="flex flex-col items-center font-extrabold leading-none">
          <h1 className="font-bold text-lg ml-8 leading-none">
            ropos
            <span className="text-lg bg-clip-text text-transparent bg-gradient-to-r from-black via-yellow-500 via-pink-500 to-blue-900">
              O
            </span>
          </h1>
          <h1 className="text-3xl font-bold ml-3 leading-none">clout</h1>
        </div>
        <div className="h-10 border-l-2 border-gray-300"></div>
        <p className="text-gray-700">Marketplace</p>

        <div className="flex items-center text-xl space-x-3 md:hidden">
          <FiBell className="text-4xl hover:bg-black hover:text-white rounded-full p-2" />
          <LuUser2 className="text-4xl hover:bg-black hover:text-white rounded-full p-2" />
        </div>
      </div>

      {/* search bar */}
      <div className="flex items-center">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full md:w-96 px-4 py-2 border border-gray-300 rounded-md focus:outline-none shadow-md"
        />
        <div className="h-6 mx-2 border-l-2 border-gray-300"></div>
        <FiImage className="text-2xl hidden md:flex" />
        {searchIcon}  
      </div>

      <div className=" hidden md:flex items-center gap-5">
        <FiBell className="text-4xl hover:bg-black hover:text-white rounded-full p-2" />
        <LuUser2 className="text-4xl hover:bg-black hover:text-white rounded-full p-2" />
      </div>
    </div>
  );
};

export default Navbar;
