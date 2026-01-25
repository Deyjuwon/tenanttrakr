// app/properties/new/page.tsx
"use client";

import Link from "next/link";

export default function AddPropertyPage() {
  return (
    <div className="flex-1 bg-[#E5E7EB] rounded-lg p-6 flex flex-col gap-6 h-screen">
      
      {/* Header */}
      <div>
        <h1 className="text-[22px] font-bold text-[#1A4D6D]">
          Add New Property
        </h1>
        <p className="text-[13px] text-gray-600">
          Fill in the details below to add a property to TenantTrakr
        </p>
      </div>

      {/* Form */}
      <form className="bg-white rounded-lg p-6 grid grid-cols-2 gap-5 shadow-sm">
        
        {/* Property Name */}
        <div className="col-span-2">
          <label className="text-[13px] font-medium text-gray-700">
            Property Name
          </label>
          <input
            type="text"
            placeholder="e.g. GreenVille Apartments"
            className="mt-1 w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Property Type */}
        <div>
          <label className="text-[13px] font-medium text-gray-700">
            Property Type
          </label>
          <select className="mt-1 w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500">
            <option>Apartment</option>
            <option>House</option>
            <option>Hostel</option>
            <option>Commercial</option>
          </select>
        </div>

        {/* Total Units */}
        <div>
          <label className="text-[13px] font-medium text-gray-700">
            Number of Units
          </label>
          <input
            type="number"
            placeholder="e.g. 10"
            className="mt-1 w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Rent Amount */}
        <div>
          <label className="text-[13px] font-medium text-gray-700">
            Rent Amount (₦)
          </label>
          <input
            type="number"
            placeholder="e.g. 500000"
            className="mt-1 w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Payment Cycle */}
        <div>
          <label className="text-[13px] font-medium text-gray-700">
            Payment Cycle
          </label>
          <select className="mt-1 w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500">
            <option>Monthly</option>
            <option>Quarterly</option>
            <option>Yearly</option>
          </select>
        </div>

        {/* Address */}
        <div className="col-span-2">
          <label className="text-[13px] font-medium text-gray-700">
            Property Address
          </label>
          <textarea
            rows={3}
            placeholder="Full property address"
            className="mt-1 w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>

        {/* Actions */}
        <div className="col-span-2 flex justify-end gap-3 mt-4">
          <Link href="/">
            <button
              type="button"
              className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
            >
              Cancel
            </button>
          </Link>

          <button
            type="submit"
            className="px-6 py-2.5 rounded-lg text-white bg-gradient-to-r from-[#1A4D6D] to-teal-500 shadow-md hover:opacity-90 transition"
          >
            Save Property
          </button>
        </div>

      </form>
    </div>
  );
}
