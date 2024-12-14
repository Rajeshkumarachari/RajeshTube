import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className=" col-span-2 sm:col-span-10">
      <ButtonList className="  w-screen max-w-full overflow-hidden" />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
