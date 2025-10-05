import React from 'react'
import newChatIcon from '../assets/New_chat.png'
import TempChatIcon from '../assets/Temp_Chat.png'
import History from './History'

const SideBar = () => {
  return (
    <div className="sidebar overflow-hidden h-screen flex flex-col justify-between bg-[#282a2c] text-[#A2A9B0] font-google pt-3 pl-2">
      <div>
        <div className="newchat flex justify-between items-center mx-3 my-2">
          <div className="flex gap-3 items-center">
            <img className="h-5" src={newChatIcon} alt="new chat" />
            <span>New chat</span>
          </div>
          <img className="h-6" src={TempChatIcon} alt="temp chat" />
        </div>

        <div className="overflow-y-auto h-[85dvh]">
          <History />
        </div>
      </div>
    </div>
  )
}

export default SideBar
