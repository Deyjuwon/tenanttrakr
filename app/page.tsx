import Image from "next/image";
import logo from "../public/logo.png";
import profile from "../public/profileHead.png";

import { MdDashboard } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoIosSettings, IoIosHelpCircle } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

export default function Home() {
  return (
    <div className="flex h-screen bg-[#F6F7F9] gap-4 p-4">

      {/* ================= Sidebar ================= */}
      <aside className="w-[15%] bg-[#E5E7EB] rounded-lg px-4 pb-5 flex flex-col gap-6">
        
        {/* Logo */}
        <Image
          src={logo}
          alt="Tenanttrakr logo"
          className="w-[75%]"
          priority
        />

        {/* MENU */}
        <div className="flex flex-col gap-2 text-[15px]">
          <p className="text-[10px] text-gray-500 uppercase">Menu</p>

          <div className="relative flex items-center gap-4 px-3 py-2 bg-white rounded-md cursor-pointer font-medium transition">
            <span className="absolute left-0 top-0 h-full w-[3px] bg-teal-500 rounded-r" />
            <MdDashboard size={20} color="#1A4D6D" />
            <p>Dashboard</p>
          </div>

          <div className="flex items-center gap-4 px-3 py-2 rounded-md cursor-pointer transition hover:bg-white">
            <FaHouse size={20} color="#1A4D6D" />
            <p>Properties</p>
          </div>

          <div className="flex items-center gap-4 px-3 py-2 rounded-md cursor-pointer transition hover:bg-white">
            <BsFillPeopleFill size={20} color="#1A4D6D" />
            <p>Rent</p>
          </div>
        </div>

        {/* GENERAL */}
        <div className="flex flex-col gap-2 text-[15px] mt-auto">
          <p className="text-[10px] text-gray-500 uppercase">General</p>

          <div className="flex items-center gap-4 px-3 py-2 rounded-md cursor-pointer transition hover:bg-white">
            <IoIosSettings size={20} color="#1A4D6D" />
            <p>Settings</p>
          </div>

          <div className="flex items-center gap-4 px-3 py-2 rounded-md cursor-pointer transition hover:bg-white">
            <IoIosHelpCircle size={20} color="#1A4D6D" />
            <p>Help</p>
          </div>

          <div className="flex items-center gap-4 px-3 py-2 rounded-md cursor-pointer transition hover:bg-white text-red-600">
            <IoLogOut size={20} />
            <p>Logout</p>
          </div>
        </div>
      </aside>

      {/* ================= Main ================= */}
      <main className="w-[85%] flex flex-col gap-4">

        {/* ================= Top Bar ================= */}
        <div className="h-[70px] bg-[#E5E7EB] rounded-lg flex items-center justify-end px-6">
          <div className="flex items-center gap-6">

            {/* Notification */}
            <div className="relative cursor-pointer transition hover:scale-105">
              <FaRegBell size={20} />
              <span className="absolute -top-1 -right-1 h-[16px] w-[16px] bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full">
                3
              </span>
            </div>

            {/* Profile */}
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="relative h-[36px] w-[36px] rounded-full overflow-hidden border border-gray-300 hover:ring-2 hover:ring-teal-500 transition">
                <Image
                  src={profile}
                  alt="profile"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col leading-tight">
                <p className="text-[12px] font-semibold text-gray-900">
                  Adejuwon Oshindoro
                </p>
                <p className="text-[11px] text-gray-500">
                  temitayoadejuwon@gmail.com
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ================= Content ================= */}
        <div className="flex-1 bg-[#E5E7EB] rounded-lg p-4 flex flex-col gap-5">

          {/* Header */}
          <div className="flex items-center justify-between pt-5 pb-5">
            <p className="text-[24px] font-bold text-[#1A4D6D]">Dashboard</p>
            <div className="flex gap-3 items-center">
              <button className="px-5 py-2.5 rounded-lg text-white font-medium 
                bg-gradient-to-r from-[#1A4D6D] to-teal-500
                hover:from-teal-500 hover:to-[#1A4D6D]
                transition-all duration-300 shadow-md text-[14px] cursor-pointer">
                + Add Property
              </button>

              <button className="px-5 py-2.5 rounded-lg font-medium text-[#1A4D6D]
                border border-[#1A4D6D]
                hover:bg-[#1A4D6D] hover:text-white
                transition-all duration-300 text-[14px] cursor-pointer">
                + Add Tenant
              </button>
            </div>
          </div>

          {/* Top Cards */}
          <div className="grid grid-cols-4 gap-5">
            <div className="h-[160px] rounded-2xl bg-gradient-to-r from-[#1A4D6D] to-teal-500 
              text-[#f5f5f7] p-5 flex flex-col justify-between shadow-lg">
              <p className="text-[14px] font-medium opacity-90">
                Total Income
              </p>
              <div>
                <p className="text-[32px] font-bold tracking-tight">
                ₦10,000,000
                </p>
                <p className="text-[11px] opacity-80 font-semibold">
                This Month
                </p>
              </div>
              
            </div>

            <div className="h-[160px] rounded-2xl bg-[#f5f5f7] 
              text-[#1d1d1d] p-5 flex justify-between flex-col shadow-lg">
              <p className="text-[14px] font-medium opacity-90">
                Outstanding
              </p>
              <div>
                <p className="text-[32px] font-bold tracking-tight">
                ₦1,000,000
                </p>
                <div className="">
                  <p className="text-[11px] opacity-80 text-red-500 font-semibold">
                  2 Overdue
                  </p>
                </div>
                
              </div>
            </div>
            <div className="h-[160px] rounded-2xl bg-[#f5f5f7] 
              text-[#1d1d1d] p-5 flex justify-between flex-col shadow-lg">
              <p className="text-[14px] font-medium opacity-90">
                Occupied Units
              </p>
              <div>
                <p className="text-[32px] font-bold tracking-tight">
                10/10
                </p>
                <div className="">
                  <p className="text-[11px] opacity-80 text-green-500 font-semibold">
                  100% Filled
                  </p>
                </div>
                
              </div>
            </div>
            <div className="h-[160px] rounded-2xl bg-[#f5f5f7] 
              text-[#1d1d1d] p-5 flex justify-between flex-col shadow-lg">
              <p className="text-[14px] font-medium opacity-90">
                Upcoming Payments
              </p>
              <div>
                <p className="text-[32px] font-bold tracking-tight">
                ₦3,500,000
                </p>
                <div className="">
                  <p className="text-[11px] opacity-80 text-yellow-500 font-semibold">
                  2 Due Soon
                  </p>
                </div>
                
              </div>
            </div>
          </div>

          {/* Bottom Section - fills remaining space */}
          <div className="grid grid-cols-2 gap-5 flex-1">
            <div className="rounded-2xl bg-white h-full"></div>
            <div className="rounded-2xl bg-white h-full"></div>
          </div>

        </div>

      </main>
    </div>
  );
}
