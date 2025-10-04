import React ,{useState} from 'react'
import hamburger from '../assets/ham_burger.png'
import dropdown from '../assets/dropdown.svg'
import profile from "../assets/profile_gemini.jpg"
const Navbar = () => {
    const [expand, setExpand] = useState(false);
    const ChangeExpand=()=>{
        setExpand(!expand);
        console.log(!expand);
    }
  return (
    <div className="nav flex font-google text-[#A2A9B0] ">
        <div className={`left ${expand?'lg:w-64':'lg:w-16'} lg:h-screen lg:bg-[#282a2c] flex transition-all lg:cursor-pointer ${expand?'w-[60dvw] bg-[#282a2c] h-screen':''}`}>
            <div className="w-4 h-4 m-3  sm:m-4" onClick={()=>{ChangeExpand()}}>
                <img className="cursor-pointer ml-2 pt-2" src={hamburger} alt="hambuger_icon"/>
                {/* #282a2c left menu bar color on lg screens  */}
            </div>
        </div>
        <div className="right ml-3 mt-2 flex flex-1 justify-between ">
            <div className="right-left max-h-fit">
                <div className="up text-[#A2A9B0] text-[20px] font-google font-medium cursor-pointer">
                    <span>Gemini</span>
                </div>
                <div className="drop-down cursor-pointer">
                        <span className=" font-semibold bg-[#282a2c] hover:bg-[#343739] text-sm pl-3 pr-2 py-1 rounded-xl">2.5 Pro <img className="inline" src={dropdown} alt="down_icon"/></span>
                </div>
            </div>
            <div className="right-right flex gap-2 align-middle max-h-fit ">
                <div className="pro py-[8px] max-h-fit ">
                    <span className=" bg-[#282a2c] text-sm px-3 py-1 rounded-xl">PRO</span>
                </div>
                <div className="profile overflow-hidden cursor-pointer max-h-fit">
                    <img className="w-10 h-10 rounded-full overflow-hidden" src={profile} alt="profile_picture" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
