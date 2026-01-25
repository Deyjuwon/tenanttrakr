// components/dashboard/DashboardHeader.tsx
import Link from "next/link";

export default function DashboardHeader() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-[24px] font-bold text-[#1A4D6D]">Dashboard</h1>

      <div className="flex gap-3">
        <Link href="/properties/new">
          <button className="px-5 cursor-pointer py-2.5 rounded-lg text-white bg-gradient-to-r from-[#1A4D6D] to-teal-500 text-[14px] shadow-md hover:opacity-90 transition">
            + Add Property
          </button>
        </Link>

        <button className="px-5 cursor-pointer py-2.5 rounded-lg border border-[#1A4D6D] text-[#1A4D6D] text-[14px] hover:bg-[#1A4D6D] hover:text-white transition">
          + Add Tenant
        </button>
      </div>
    </div>
  );
}
