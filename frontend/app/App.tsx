import React from "react";
import Sidebar from "./components/Sidebar";
const page = () => {
  return (
    <div className="felx sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      {/* <MessageContainer /> */}
    </div>
  );
};

export default page;
