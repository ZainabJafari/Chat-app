import React from "react";
import Sidebar from "../app/components/Sidebar";
import MessageContainer from "../app/components/Messages/MessageContainer";
const index = () => {
  return (
    <div className="felx sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default index;
