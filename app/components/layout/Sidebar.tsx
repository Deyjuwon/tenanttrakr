"use client";

import Image from "next/image";
import logo from "../../../public/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { MdDashboard } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoIosSettings, IoIosHelpCircle } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const linkClasses = (active: boolean) =>
    `relative flex items-center gap-4 px-3 py-2 rounded-md cursor-pointer transition
     ${active ? "bg-white font-medium" : "hover:bg-white"}`;

  return (
    <aside className="w-[15%] bg-[#E5E7EB] rounded-lg px-4 pb-5 flex flex-col gap-6 text-[#1d1d1d]">
      <Image src={logo} alt="Tenanttrakr logo" className="w-[75%]" priority />

      {/* MENU */}
      <div className="flex flex-col gap-2 text-[15px]">
        <p className="text-[10px] text-gray-500 uppercase">Menu</p>

        <Link href="/">
          <div className={linkClasses(isActive("/"))}>
            {isActive("/") && (
              <span className="absolute left-0 top-0 h-full w-[3px] bg-teal-500 rounded-r" />
            )}
            <MdDashboard size={20} color="#1A4D6D" />
            <p>Dashboard</p>
          </div>
        </Link>

        <Link href="/properties">
          <div className={linkClasses(isActive("/properties"))}>
            {isActive("/properties") && (
              <span className="absolute left-0 top-0 h-full w-[3px] bg-teal-500 rounded-r" />
            )}
            <FaHouse size={20} color="#1A4D6D" />
            <p>Properties</p>
          </div>
        </Link>

        <Link href="/rent">
          <div className={linkClasses(isActive("/rent"))}>
            {isActive("/rent") && (
              <span className="absolute left-0 top-0 h-full w-[3px] bg-teal-500 rounded-r" />
            )}
            <BsFillPeopleFill size={20} color="#1A4D6D" />
            <p>Rent</p>
          </div>
        </Link>
      </div>

      {/* GENERAL */}
      <div className="flex flex-col gap-2 text-[15px] mt-auto">
        <p className="text-[10px] text-gray-500 uppercase">General</p>

        <Link href="/settings">
          <div className={linkClasses(isActive("/settings"))}>
            <IoIosSettings size={20} color="#1A4D6D" />
            <p>Settings</p>
          </div>
        </Link>

        <Link href="/help">
          <div className={linkClasses(isActive("/help"))}>
            <IoIosHelpCircle size={20} color="#1A4D6D" />
            <p>Help</p>
          </div>
        </Link>

        <div className="flex items-center gap-4 px-3 py-2 rounded-md hover:bg-white text-red-600 cursor-pointer">
          <IoLogOut size={20} />
          <p>Logout</p>
        </div>
      </div>
    </aside>
  );
}
