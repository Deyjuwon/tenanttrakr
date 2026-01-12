export default function DashboardHeader() {
  return (
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
  );
}
