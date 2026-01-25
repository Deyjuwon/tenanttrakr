"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Sidebar from "../../components/layout/Sidebar";
import TopBar from "../../components/layout/TopBar";

export default function AddPropertyPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    type: "Apartment",
    units: "",
    address: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProperty = {
      id: crypto.randomUUID(),
      name: form.name,
      type: form.type,
      units: Number(form.units),
      address: form.address,
    };

    const stored = localStorage.getItem("properties");
    const properties = stored ? JSON.parse(stored) : [];

    localStorage.setItem(
      "properties",
      JSON.stringify([...properties, newProperty])
    );

    router.push("/properties");
  };

  return (
    <div className="flex h-screen bg-[#F6F7F9] gap-4 p-4">
        <Sidebar />
        <main className="w-[85%] flex flex-col gap-4">
            <TopBar /> 
    <div className="flex-1 bg-[#E5E7EB] rounded-lg p-6 flex flex-col gap-6">
      {/* Header */}
      <div>
        <h1 className="text-[22px] font-bold text-[#1A4D6D]">
          Add New Property
        </h1>
        <p className="text-[13px] text-gray-600">
          Property details only — tenants will be added separately
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg p-6 grid grid-cols-2 gap-5 shadow-sm max-w-3xl"
      >
        {/* Property Name */}
        <div className="col-span-2">
          <label className="text-[13px] font-medium">Property Name</label>
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. GreenVille Apartments"
            className="mt-1 w-full px-4 py-2.5 rounded-lg border"
          />
        </div>

        {/* Property Type */}
        <div>
          <label className="text-[13px] font-medium">Property Type</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2.5 rounded-lg border"
          >
            <option>Apartment</option>
            <option>House</option>
            <option>Hostel</option>
            <option>Commercial</option>
          </select>
        </div>

        {/* Units */}
        <div>
          <label className="text-[13px] font-medium">Number of Units</label>
          <input
            name="units"
            type="number"
            required
            value={form.units}
            onChange={handleChange}
            placeholder="e.g. 10"
            className="mt-1 w-full px-4 py-2.5 rounded-lg border"
          />
        </div>

        {/* Address */}
        <div className="col-span-2">
          <label className="text-[13px] font-medium">Property Address</label>
          <textarea
            name="address"
            rows={3}
            required
            value={form.address}
            onChange={handleChange}
            placeholder="Full property address"
            className="mt-1 w-full px-4 py-2.5 rounded-lg border"
          />
        </div>

        {/* Actions */}
        <div className="col-span-2 flex justify-end gap-3">
          <Link href="/properties">
            <button
              type="button"
              className="px-5 py-2.5 rounded-lg border text-gray-600"
            >
              Cancel
            </button>
          </Link>

          <button
            type="submit"
            className="px-6 py-2.5 rounded-lg text-white bg-gradient-to-r from-[#1A4D6D] to-teal-500"
          >
            Save Property
          </button>
        </div>
      </form>
    </div>
    </main>
    </div>
  );
}
