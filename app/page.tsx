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
        <Image src={logo} alt="Tenanttrakr logo" className="w-[75%]" priority />

        {/* MENU */}
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

        {/* GENERAL */}
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

      {/* ================= Main ================= */}
      <main className="w-[85%] flex flex-col gap-4">

        {/* Top Bar */}
        <div className="h-[70px] bg-[#E5E7EB] rounded-lg flex justify-end items-center px-6">
          <div className="flex items-center gap-6">
            <div className="relative">
              <FaRegBell size={20} />
              <span className="absolute -top-1 -right-1 h-4 w-4 text-[10px] bg-red-500 text-white rounded-full flex items-center justify-center">
                3
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 rounded-full overflow-hidden border">
                <Image src={profile} alt="profile" fill className="object-cover" />
              </div>
              <div className="text-[12px]">
                <p className="font-semibold">Adejuwon Oshindoro</p>
                <p className="text-gray-500">temitayoadejuwon@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= Content ================= */}
        <div className="flex-1 bg-[#E5E7EB] rounded-lg p-5 flex flex-col gap-5">

          {/* Header */}
          <div className="flex justify-between items-center">
            <h1 className="text-[24px] font-bold text-[#1A4D6D]">Dashboard</h1>
            <div className="flex gap-3">
              <button className="px-5 py-2.5 rounded-lg text-white bg-gradient-to-r from-[#1A4D6D] to-teal-500 text-[14px] shadow-md">
                + Add Property
              </button>
              <button className="px-5 py-2.5 rounded-lg border border-[#1A4D6D] text-[#1A4D6D] text-[14px] hover:bg-[#1A4D6D] hover:text-white transition">
                + Add Tenant
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-5">
            <StatCard title="Total Income" value="₦10,000,000" sub="This Month" primary />
            <StatCard title="Outstanding" value="₦1,000,000" sub="2 Overdue" color="text-red-500" />
            <StatCard title="Occupied Units" value="10 / 10" sub="100% Filled" color="text-green-500" />
            <StatCard title="Upcoming Payments" value="₦3,500,000" sub="2 Due Soon" color="text-yellow-500" />
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-2 gap-5 flex-1">

            {/* Overdue Tenants */}
            <div className="bg-white rounded-2xl p-5 flex flex-col gap-4">
              <h2 className="font-bold text-[16px]">Overdue Tenants</h2>

              {[
                { name: "Adebayo Chinedu", house: "Jay’s House", amount: "₦3,500,000" },
                { name: "Ibrahim Musa", house: "Green Court", amount: "₦1,200,000" },
                { name: "Funke Adele", house: "Palm View", amount: "₦850,000" },
              ].map((tenant, i) => (
                <div key={i} className="flex justify-between items-center border-b last:border-none pb-3">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden">
                      <Image src={profile} alt="tenant" fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-[14px]">{tenant.name}</p>
                      <p className="text-[13px] text-gray-500">{tenant.house}</p>
                    </div>
                  </div>
                  <p className="text-red-500 font-semibold text-[14px]">{tenant.amount}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-5 flex flex-col gap-4">
              <h2 className="font-bold text-[16px]">Due This Month</h2>

              {[
                { name: "Adebayo Chinedu", house: "Jay’s House", amount: "₦3,500,000" },
                { name: "Ibrahim Musa", house: "Green Court", amount: "₦1,200,000" },
                { name: "Funke Adele", house: "Palm View", amount: "₦850,000" },
              ].map((tenant, i) => (
                <div key={i} className="flex justify-between items-center border-b last:border-none pb-3">
                  <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 rounded-full overflow-hidden">
                      <Image src={profile} alt="tenant" fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-[14px]">{tenant.name}</p>
                      <p className="text-[13px] text-gray-500">{tenant.house}</p>
                    </div>
                  </div>
                  <p className="text-green-500 font-semibold text-[14px]">{tenant.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* ================= Helpers ================= */
function StatCard({ title, value, sub, primary, color }) {
  return (
    <div
      className={`h-[160px] rounded-2xl p-5 flex flex-col justify-between shadow-lg ${
        primary
          ? "bg-gradient-to-r from-[#1A4D6D] to-teal-500 text-white"
          : "bg-[#f5f5f7] text-[#1d1d1d]"
      }`}
    >
      <p className="text-[14px] opacity-90">{title}</p>
      <div>
        <p className="text-[32px] font-bold">{value}</p>
        <p className={`text-[12px] font-semibold ${color || "opacity-80"}`}>
          {sub}
        </p>
      </div>
    </div>
  );
}
