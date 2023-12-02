import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../Utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //api polling2q
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(25) + "🚀",
        })
      );
    }, 3000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className=" my-8 sm:my-0  max-sm:w-[700px] sm:w-full h-[600px] ml-2 p-2 bor border border-black  bg-slate-100 rounded-md overflow-y-scroll  flex flex-col-reverse">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full mt-3 p-2 ml-2 border rounded-md border-black flex"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form submited", liveMessage);
          dispatch(addMessage({ name: "Rajesh", message: liveMessage }));
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-96  rounded-md border  border-blue-400  "
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
          type="text"
        />
        <button className="px-4 rounded-lg mx-3 py-2 bg-green-500">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
