import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { TOGGLE_LOGO, USERACCOUTN, YOUTUBELOGO } from "../Utils/constant";
import { GoPlus } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid  bg-white sm:mx-0 sm:w-full grid-flow-col shadow-lg sticky top-0 z-30">
      <div className="flex col-span-1  ">
        <IoIosMenu
          className=" size-12 w-[40px] h-[40px] my-5  ml-2 cursor-pointer hover:bg-gray-200 rounded-full "
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img
            className="h-20 w-20 mb-2 pt-1  mx-3"
            src="https://t3.ftcdn.net/jpg/06/34/31/96/240_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg"
            alt="youtube_logo"
          />
        </a>
      </div>

      <div className=" col-span-9 px-2 sm:px-10 pt-4 flex">
        <input
          className=" w-1/4 sm:w-1/2 border   border-gray-400  p-2 rounded-l-full pl-4 h-12 "
          type="text"
          placeholder="Search"
        />
        <button className="border  border-gray-400 p-2 rounded-r-full bg-gray-100 h-12 ">
          <CiSearch className="w-5 h-5" />
        </button>
        <div className=" bg-gray-100 h-12 w-12 rounded-full mx-2 hidden sm:flex  justify-center items-center  cursor-pointer">
          <img
            className="  bg-gray-100 w-8 h-8 rounded-2xl flex justify-center items-center "
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-25-512.png"
            alt="mic"
          />
        </div>
      </div>

      <div className=" col-span-2 flex gap-3  items-center">
        <div className=" hover:bg-gray-200 rounded-3xl    bg-gray-100 flex items-center cursor-pointer p-2 ">
          <GoPlus className=" size-12" />
          <p className="  ">Create</p>
        </div>
        <IoIosNotificationsOutline className="w-8 h-8 hidden sm:flex  " />

        <FaUserCircle className="w-8 h-8 " />
      </div>
    </div>
  );
};

export default Head;
