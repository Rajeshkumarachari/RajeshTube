import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { TOGGLE_LOGO, USERACCOUTN, YOUTUBELOGO } from "../Utils/constant";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid  w-[800px] mx-20 sm:mx-0 sm:w-full grid-flow-col p-2 m-2 shadow-lg ">
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
          Search
        </button>
        <div className=" bg-gray-100 h-12 w-12 rounded-3xl ml-3 cursor-pointer">
          <img
            className=" h-7 m-3 bg-gray-100 w-7 rounded-2xl pb-1 br-2"
            src="https://www.svgrepo.com/show/445247/mic-solid.svg"
            alt="mic"
          />
        </div>
      </div>

      <div className=" col-span-2 flex">
        <img
          className="h-10 hidden sm:block w-12 pt- mt-2 bg-none cursor-pointer mx-8 hover:bg-gray-100 rounded-3xl"
          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/create-4911912-4083720.png?f=webp&w=256"
          alt="create_logo"
        />
        <img
          className="h-9 mt-3 hidden sm:block mr-6 cursor-pointer hover:bg-gray-100 rounded-3xl  "
          src="https://www.svgrepo.com/show/500410/notification.svg"
          alt="notification_logo"
        />

        <img
          className=" hidden sm:block h-10 w-10 mt-2 ml-11 "
          src={USERACCOUTN}
          alt="user_account"
        />
      </div>
    </div>
  );
};

export default Head;
