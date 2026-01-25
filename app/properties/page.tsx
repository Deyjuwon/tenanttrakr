import Link from "next/link";
import Sidebar from "../components/layout/Sidebar";

export default function PropertiesPage() {
  return (
    <div className="flex h-screen bg-[#F6F7F9] gap-4 p-4">
        <Sidebar />
    
    <div className="flex-1 bg-[#E5E7EB] rounded-lg p-6 flex flex-col gap-6">
      
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[22px] font-bold text-[#1A4D6D]">
            Properties
          </h1>
          <p className="text-[13px] text-gray-600">
            Manage all your properties in one place
          </p>
        </div>

        <Link href="/properties/new">
          <button className="px-5 py-2.5 rounded-lg text-white bg-gradient-to-r from-[#1A4D6D] to-teal-500 text-[14px] shadow-md hover:opacity-90 transition">
            + Add Property
          </button>
        </Link>
      </div>

      {/* Properties Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        
        {/* Table Header */}
        <div className="grid grid-cols-6 gap-4 px-6 py-4 bg-gray-50 text-[12px] font-semibold text-gray-600">
          <p>Property Name</p>
          <p>Type</p>
          <p>Units</p>
          <p>Rent</p>
          <p>Status</p>
          <p className="text-right">Actions</p>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-16 text-center gap-3">
          <p className="text-[15px] font-medium text-gray-700">
            No properties added yet
          </p>
          <p className="text-[13px] text-gray-500">
            Start by adding your first property
          </p>

          <Link href="/properties/new">
            <button className="mt-3 px-5 py-2.5 rounded-lg text-white bg-[#1A4D6D] hover:opacity-90 transition text-[14px]">
              + Add Property
            </button>
          </Link>
        </div>

        {/* 
          Later this is where rows will render:
          map(properties) → PropertyRow
        */}
      </div>
    </div>
    </div>
  );
}
