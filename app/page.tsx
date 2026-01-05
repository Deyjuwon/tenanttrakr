import Image from "next/image";
import logo from '../public/logo.png';
import { MdDashboard } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoIosSettings } from "react-icons/io";
import { IoIosHelpCircle } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

export default function Home() {
  return (
    <div className="flex h-screen bg-[#F6F7F9] gap-4 p-4">
      
      {/* Sidebar */}
      <aside className="w-[15%] bg-[#E5E7EB] rounded-lg p-4 flex flex-col ">
        <Image className="text-[16px] w-[80%]" src={logo} alt="logo"/>
        <div className="flex flex-col gap-4 text-[15px]">
          <p className="text-[10px] pt-5">MENU</p>
          <div className="flex items-center gap-3">
            <MdDashboard size={20} />
            <p>Dashboard</p>
          </div>
          <div className="flex items-center gap-3">
            <FaHouse size={20} />
            <p>Properties</p>
          </div>
          <div className="flex items-center gap-3">
            <BsFillPeopleFill size={20} />
            <p>Rent</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-[15px]">
          <p className="text-[10px] pt-10">GENERAL</p>
          <div className="flex items-center gap-3">
            <IoIosSettings size={20} />
            <p>Settings</p>
          </div>
          <div className="flex items-center gap-3">
            <IoIosHelpCircle size={20} />
            <p>Help</p>
          </div>
          <div className="flex items-center gap-3">
            <IoLogOut size={20} />
            <p>Logout</p>
          </div>
        </div>
      </aside>
      {/* Main content */}
      <main className="w-[85%] flex flex-col gap-4">
        
        {/* Top bar */}
        <div className="h-[40px] bg-[#E5E7EB] border border-[#E5E7EB] rounded-lg flex items-center px-4">
          <p className="font-semibold">Dashboard</p>
        </div>

        {/* Bottom content */}
        <div className="flex-1 bg-[#E5E7EB] border border-[#E5E7EB] rounded-lg p-4">
          <p>Dashboard content goes here</p>
        </div>

      </main>
    </div>
  );
}
