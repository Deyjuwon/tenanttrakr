"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Sidebar from "@/app/components/layout/Sidebar";
import TopBar from "@/app/components/layout/TopBar";

type Property = {
  id: string;
  name: string;
};

export default function AddTenantPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const preselectedProperty = searchParams.get("propertyId");

  const [properties, setProperties] = useState<Property[]>([]);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    propertyId: preselectedProperty || "",
    rent: "",
    dueDate: "",
    status: "pending",
  });

  useEffect(() => {
    const stored = localStorage.getItem("properties");
    if (stored) {
      setProperties(JSON.parse(stored));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newTenant = {
      id: crypto.randomUUID(),
      propertyId: form.propertyId,
      name: form.name,
      phone: form.phone,
      rent: Number(form.rent),
      dueDate: form.dueDate,
      status: form.status as "paid" | "pending",
    };

    const stored = localStorage.getItem("tenants");
    const tenants = stored ? JSON.parse(stored) : [];

    localStorage.setItem(
      "tenants",
      JSON.stringify([...tenants, newTenant])
    );

    router.push(`/properties/${form.propertyId}`);
  };

  return (
    <div className="flex h-screen bg-[#F6F7F9] gap-4 p-4">
      <Sidebar />

      <main className="w-[85%] flex flex-col gap-4">
        <TopBar />

        <div className="bg-[#E5E7EB] rounded-lg p-6 flex flex-col gap-6 max-w-4xl">
          {/* Header */}
          <div>
            <h1 className="text-[22px] font-bold text-[#1A4D6D]">
              Add Tenant
            </h1>
            <p className="text-[13px] text-gray-600">
              Tenant rent and occupancy details
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg p-6 grid grid-cols-2 gap-5 shadow-sm"
          >
            {/* Full Name */}
            <div className="col-span-2">
              <label className="text-[13px] font-medium">
                Full Name
              </label>
              <input
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className="mt-1 w-full px-4 py-2.5 rounded-lg border"
              />
            </div>

            {/* WhatsApp */}
            <div>
              <label className="text-[13px] font-medium">
                WhatsApp Number
              </label>
              <input
                name="phone"
                required
                value={form.phone}
                onChange={handleChange}
                placeholder="e.g. 2348012345678"
                className="mt-1 w-full px-4 py-2.5 rounded-lg border"
              />
              <p className="text-[11px] text-gray-500 mt-1">
                Used for rent reminders
              </p>
            </div>

            {/* Property */}
            <div>
              <label className="text-[13px] font-medium">
                Property
              </label>
              <select
                name="propertyId"
                required
                value={form.propertyId}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2.5 rounded-lg border"
              >
                <option value="">Select property</option>
                {properties.map((property) => (
                  <option key={property.id} value={property.id}>
                    {property.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Rent */}
            <div>
              <label className="text-[13px] font-medium">
                Rent Amount (₦)
              </label>
              <input
                name="rent"
                type="number"
                required
                value={form.rent}
                onChange={handleChange}
                placeholder="e.g. 500000"
                className="mt-1 w-full px-4 py-2.5 rounded-lg border"
              />
            </div>

            {/* Due Date */}
            <div>
              <label className="text-[13px] font-medium">
                Rent Due Date
              </label>
              <input
                name="dueDate"
                type="date"
                required
                value={form.dueDate}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2.5 rounded-lg border"
              />
            </div>

            {/* Status */}
            <div className="col-span-2">
              <label className="text-[13px] font-medium">
                Payment Status
              </label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2.5 rounded-lg border"
              >
                <option value="pending">Pending</option>
                <option value="paid">Paid</option>
              </select>
            </div>

            {/* Actions */}
            <div className="col-span-2 flex justify-end gap-3 mt-2">
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
                Save Tenant
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
