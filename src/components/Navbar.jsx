import React, { useEffect, useState } from 'react';
import { FiImage, FiSearch, FiBell, FiHeart } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import SearchPopUp from './SearchPopUp';

const Navbar = () => {
  const [placeholder, setPlaceholder] = useState("eg : saree , T-shirt , USB cable etc");
  const [searchIcon, setSearchIcon] = useState(<FiSearch />);
  const [smallSearch , setSmallSearch] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setPlaceholder("Search Products (e.g. Magic Book, Bedsheets etc)");
        setSearchIcon(
          <button
            onClick={() => alert("Pressed button")}
            className="flex items-center justify-center bg-black gap-1 px-4 py-3 w-full text-white rounded-md text-md font-bold"
          >
            <span><FiSearch className="text-xl" /></span> Search
          </button>
        );
      } else {
        setPlaceholder("eg : saree , T-shirt , USB cable etc");
        setSearchIcon(
          <button
            onClick={() => alert("Pressed button")}
            className='bg-black rounded-sm text-white p-2'
          >
            <FiSearch className="text-xl" />
          </button>
        );
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearch = () => {
    setSmallSearch(!smallSearch);
  }

  return (
    <div>
      <div className="fixed top-0 z-50 w-full h-14 md:h-[57px] lg:h-16 bg-white shadow-md">
        <div className="lg:mx-3">
          <div className="flex items-center justify-between md:justify-between mb-2 md:flex-row flex-col">
            <div className="flex items-center justify-between w-full lg:justify-between mb-2 lg:flex-row">
              <div className="flex items-center space-x-2 md:space-x-2">
                <div className="flex flex-col items-center font-extrabold">
                  <span className="font-bold text-lg lg:text-lg md:text-lg ml-4">
                    ropos
                    <span className="text-base md:text-base lg:text-lg bg-clip-text text-transparent bg-gradient-to-r from-black via-yellow-500 via-pink-500 to-blue-900">
                      O
                    </span>
                    <br />
                    <span className="text-xl md:text-2xl lg:text-3xl font-bold">clout</span>
                  </span>
                </div>
                <div className="h-8 md:h-8 lg:h-8 border-l-2 border-gray-300"></div>
                <p className="text-gray-700 text-lg lg:text-base md:text-xl">Marketplace</p>
              </div>

              <div className="lg:hidden flex items-center text-xl md:text-2xl space-x-4 md:space-x-5">
                <FiSearch onClick={handleSearch} />
                <FiHeart />
                <FiBell />
              </div>

              {/* Search bar */}
              <div className="hidden lg:flex items-center my-3 md:my-0">
                <div className="relative w-full md:w-full">
                  <input
                    type="text"
                    placeholder={placeholder}
                    className="w-[550px] px-5 py-3 rounded-md focus:outline-none shadow-md pr-14 hover:border border-gray-900"
                  />
                  <span className="absolute inset-y-0 left-[400px] flex items-center border-l-2 border-gray-300 h-6 my-auto"></span>
                  <span className="absolute inset-y-0 left-[410px] flex items-center">
                    <FiImage className="text-2xl hidden md:flex" />
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center">
                    {searchIcon}
                  </span>
                </div>
              </div>

              <div className="hidden lg:flex items-center gap-4">
                <FiBell className="text-2xl" />
                <LuUser2 className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conditionally render the SearchPopUp */}
      {smallSearch && <SearchPopUp smallSearch={smallSearch} setSmallSearch={setSmallSearch}  />}
    </div>
  );
};

export default Navbar;
