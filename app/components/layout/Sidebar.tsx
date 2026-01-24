import Image from "next/image";
import logo from "../../../public/logo.png";

import { MdDashboard } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoIosSettings, IoIosHelpCircle } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

export default function Sidebar() {
  return (
    <aside className="w-[15%] bg-[#E5E7EB] rounded-lg px-4 pb-5 flex flex-col gap-6 text-[#1d1d1d]">
      <Image src={logo} alt="Tenanttrakr logo" className="w-[75%]" priority />

      <div className="flex flex-col gap-2 text-[15px]">
        <p className="text-[10px] text-gray-500 uppercase">Menu</p>

        <div className="relative flex items-center gap-4 px-3 py-2 bg-white rounded-md font-medium">
          <span className="absolute left-0 top-0 h-full w-[3px] bg-teal-500 rounded-r" />
          <MdDashboard size={20} color="#1A4D6D" />
          <p>Dashboard</p>
        </div>

        <div className="flex items-center gap-4 px-3 py-2 rounded-md hover:bg-white">
          <FaHouse size={20} color="#1A4D6D" />
          <p>Properties</p>
        </div>

        <div className="flex items-center gap-4 px-3 py-2 rounded-md hover:bg-white">
          <BsFillPeopleFill size={20} color="#1A4D6D" />
          <p>Rent</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-[15px] mt-auto">
        <p className="text-[10px] text-gray-500 uppercase">General</p>

        <div className="flex items-center gap-4 px-3 py-2 rounded-md hover:bg-white">
          <IoIosSettings size={20} color="#1A4D6D" />
          <p>Settings</p>
        </div>

        <div className="flex items-center gap-4 px-3 py-2 rounded-md hover:bg-white">
          <IoIosHelpCircle size={20} color="#1A4D6D" />
          <p>Help</p>
        </div>

        <div className="flex items-center gap-4 px-3 py-2 rounded-md hover:bg-white text-red-600">
          <IoLogOut size={20} />
          <p>Logout</p>
        </div>
      </div>
    </aside>
  );
}
