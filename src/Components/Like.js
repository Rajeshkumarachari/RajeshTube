import React from "react";

const Like = () => {
  return (
    <div className="flex m-10 mr-0 sm:mr-44  w-1/2  ml-1 sm:ml-72 shadow-sm">
      <button className="flex  text-white px-2 sm:px-4 py-2  rounded-xl sm:rounded-3xl ml-20 mr-10 hover: bg-gray-800">
        Subscribe
      </button>
      <button className="flex bg-gray-100 p-2 rounded-r-full sm:rounded-r-none rounded-l-full sm:rounded-l-3xl  hover:bg-gray-200">
        <img
          className="h-6 pr-2 pb-1  hidden sm:block"
          src="https://www.svgrepo.com/show/139967/like.svg"
          alt="like_logo"
        />
        33k
      </button>
      <button className="bg-gray-100  hidden sm:block rounded-r-3xl hover:bg-gray-200 px-4">
        <img
          className=" h-7  hidden sm:block bg-gray-100 pr-2"
          src="https://www.svgrepo.com/show/201326/dislike.svg"
          alt="dis_like_logo"
        />
      </button>
      <button className="flex bg-gray-100 ml-5 py-2 px-3 rounded-3xl font-bold hover:bg-gray-200">
        <img
          className="h-7 hidden sm:block"
          src="https://www.svgrepo.com/show/522661/share.svg"
          alt="share_logo"
        />
        Share
      </button>
      <button className="flex bg-gray-100 ml-2 sm:ml-10 py-2  sm:px-4 rounded-3xl hover:bg-gray-200">
        <img
          className="h-7 hidden sm:block"
          src="https://www.svgrepo.com/show/510957/download.svg"
          alt="download_logo"
        />
        Download
      </button>
      <button className="bg-gray-100 hidden sm:block w-11 rounded-3xl pb-2 ml-5 font-bold hover:bg-gray-200">
        ...
      </button>
    </div>
  );
};

export default Like;
