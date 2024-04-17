import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { TOGGLE_LOGO, USERACCOUTN, YOUTUBELOGO } from "../Utils/constant";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid  bg-white w-[800px] mx-20 sm:mx-0 sm:w-full grid-flow-col p-2 m-2 shadow-lg sticky top-0 z-30">
      <div className="flex col-span-1  ">
        <img
          onClick={() => toggleMenuHandler()}
          className=" h-10 mt-5 cursor-pointer "
          src={TOGGLE_LOGO}
          alt="menu"
        />
        <a href="/">
          <img
            className="h-20 w-20 mb-2 pt-1  mx-3"
            src={YOUTUBELOGO}
            alt="youtube_logo"
          />
        </a>
      </div>

      <div className=" col-span-9 px-2 sm:px-10 pt-4 flex">
        <input
          className="  w-1/2 border   border-gray-400  p-2 rounded-l-full pl-4 h-12 "
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100 h-12 ">
          <CiSearch className="w-5 h-5" />
        </button>
        <div className=" bg-gray-100 h-12 w-12 rounded-full mx-2 flex justify-center items-center  cursor-pointer">
          <img
            className="  bg-gray-100 w-8 h-8 rounded-2xl flex justify-center items-center "
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-25-512.png"
            alt="mic"
          />
        </div>
      </div>

      <div className=" col-span-2 flex gap-3  items-center">
        <img
          className="h-10 hidden sm:block w-12 pt- mt-2 bg-none cursor-pointer  hover:bg-gray-100 rounded-3xl"
          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/create-4911912-4083720.png?f=webp&w=256"
          alt="create_logo"
        />
        <IoIosNotificationsOutline className="w-8 h-8 " />

        <FaUserCircle className="w-8 h-8 " />
      </div>
    </div>
  );
};

export default Head;
