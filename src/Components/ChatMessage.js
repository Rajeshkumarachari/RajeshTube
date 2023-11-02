import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2 ">
      <img
        className="h-7 rounded-2xl"
        src="https://yt4.ggpht.com/ytc/APkrFKYR5pP5mgVq9AsjSj-ETeHwzeEgjnezYDnKxQ=s32-c-k-c0x00ffffff-no-rj"
        alt="chat_user_icon"
      />
      <span className="px-2 text-gray-700">{name} </span>
      <span className=" text-black">{message} </span>
    </div>
  );
};

export default ChatMessage;
