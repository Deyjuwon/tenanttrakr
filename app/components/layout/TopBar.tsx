import Image from "next/image";
import profile from "../../../public/profileHead.png";
import { FaRegBell } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="h-[70px] bg-[#E5E7EB] rounded-lg flex justify-end items-center px-6">
      <div className="flex items-center gap-6">
        <div className="relative">
          <FaRegBell size={20} color="#1d1d1d" />
          <span className="absolute -top-1 -right-1 h-4 w-4 text-[10px] bg-red-500 text-white rounded-full flex items-center justify-center">
            3
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative h-9 w-9 rounded-full overflow-hidden border">
            <Image src={profile} alt="profile" fill className="object-cover" />
          </div>
          <div className="text-[12px]">
            <p className="font-semibold text-[#1d1d1d]">Adejuwon Oshindoro</p>
            <p className="text-gray-500">temitayoadejuwon@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
