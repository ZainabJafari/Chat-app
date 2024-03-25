import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-300 rounded p-2 py-1 cursor-pointer ">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="" alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col felx-1">
          <p className="font-bold"></p>
        </div>
      </div>
    </>
  );
};

export default Conversation;
