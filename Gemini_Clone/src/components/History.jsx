import React from "react";
import settingIcon from "../assets/Setting_icon.png";

const History = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-3 font-google text-[#A2A9B0]">
        <div className="gems flex flex-col pl-2">
          <span>Gems</span>
          <div className="flex flex-col mt-1 pl-2">
            <span className="hover:bg-[#343739] p-2 rounded-xl transition-all duration-200 hover:cursor-pointer">
              Storybook
            </span>
            <span className="hover:bg-[#343739] p-2 rounded-xl transition-all duration-200 hover:cursor-pointer">
              Explore Gems
            </span>
          </div>
        </div>

        <div className="history mt-5">
          <span>Recent</span>
          <div className="history_data flex flex-col pl-1 mt-2 gap-3 text-nowrap pr-3 overflow-x-hidden">
            <span>How to Learn React</span>
            <span>How to Learn React</span>
            <span>How to Learn React</span>
            <span>How to Learn React</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 hover:bg-[#343739] p-3 rounded-xl transition-all duration-200 hover:cursor-pointer">
        <img className="h-7" src={settingIcon} alt="settings" />
        <span>Setting & help</span>
      </div>
    </div>
  );
};

export default History;
