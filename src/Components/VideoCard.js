import React from "react";

const VideoCard = ({ info }) => {
  //const { snippet, statistics } = info;
  //const { channelTitle, thumbnails, title } = snippet;

  return (
    <div className=" m-2 w-80 h-80 grid ">
      <img
        className=" rounded-lg"
        src={info?.snippet?.thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <ul>
        <li className=" font-bold text-lg ">{info?.snippet?.title} </li>
        <li className=" text-gray-800">{info?.snippet?.channelTitle} </li>
        <li className=" text-gray-800 ">
          {info?.statistics?.viewCount / 1000}k views{" "}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
