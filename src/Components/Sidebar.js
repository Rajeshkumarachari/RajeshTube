import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-6 shadow-lg w-32 sm:w-48 ">
      <ul className=" text-center font text-md">
        <li className=" cursor-pointer hover:bg-gray-200  rounded-md my-1 p-2 ">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer hover:bg-gray-200  rounded-md my-1  p-2">
          Shorts
        </li>
        <li className="cursor-pointer hover:bg-gray-200  rounded-md my-1 p-2">
          Subscriptions
        </li>
        <li className="cursor-pointer hover:bg-gray-200  rounded-md my-1 p-2 ">
          You
        </li>
        <li className="cursor-pointer hover:bg-gray-200  rounded-md my-1 p-2">
          History
        </li>
      </ul>
      <hr />
      <h1 className=" mt-4 font-semibold   text-lg ml-3">Explore</h1>
      <ul className=" text-center  text-md">
        <li className="cursor-pointer hover:bg-gray-200  rounded-md my-1  p-2">
          Trending
        </li>
        <li className="cursor-pointer hover:bg-gray-200  rounded-md my-1  p-2">
          Shopping
        </li>
        <li className="cursor-pointer hover:bg-gray-200  rounded-md my-1 p-2">
          Music
        </li>
        <li className="cursor-pointer hover:bg-gray-200  rounded-md my-1 p-2">
          Movies
        </li>
        <li className="cursor-pointer hover:bg-gray-200  rounded-md my-1 p-2">
          Live
        </li>
        <li className="cursor-pointer hover:bg-gray-200  rounded-md my-1 p-2">
          Gaming
        </li>
        <li className="cursor-pointer hover:bg-gray-200  rounded-md my-1 p-2">
          News
        </li>
        <li className="cursor-pointer hover:bg-gray-200  rounded-md my-1 p-2">
          Sports
        </li>
        <li className="cursor-pointer hover:bg-gray-200  rounded-md my-1 p-2">
          Learning
        </li>
        <li className="cursor-pointer hover:bg-gray-200  rounded-md my-1 p-2">
          Fashion & Beauty
        </li>
        <li className="cursor-pointer hover:bg-gray-200  rounded-md my-1 p-2">
          Podcasts
        </li>
        <li className="cursor-pointer hover:bg-gray-200  rounded-md my-1 p-2">
          Browse channel
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
