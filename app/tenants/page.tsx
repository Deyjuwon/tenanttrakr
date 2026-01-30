"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Sidebar from "@/app/components/layout/Sidebar";
import TopBar from "@/app/components/layout/TopBar";

type Tenant = {
  id: string;
  name: string;
  phone: string;
  propertyId: string;
  rent: number;
  dueDate: string;
  status: "paid" | "pending";
};

type Property = {
  id: string;
  name: string;
};

export default function TenantsPage() {
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [properties, setProperties] = useState<Property[]>([]);

  useEffect(() => {
    const storedTenants = localStorage.getItem("tenants");
    const storedProperties = localStorage.getItem("properties");

    if (storedTenants) setTenants(JSON.parse(storedTenants));
    if (storedProperties) setProperties(JSON.parse(storedProperties));
  }, []);

  const getPropertyName = (propertyId: string) =>
    properties.find((p) => p.id === propertyId)?.name || "Unknown";

  const handleDelete = (id: string) => {
    const updated = tenants.filter((t) => t.id !== id);
    setTenants(updated);
    localStorage.setItem("tenants", JSON.stringify(updated));
  };

  return (
    <div className="flex h-screen bg-[#F6F7F9] gap-4 p-4">
      <Sidebar />

      <main className="w-[85%] flex flex-col gap-4">
        <TopBar />

        <div className="flex-1 bg-[#E5E7EB] rounded-lg p-6 flex flex-col gap-6">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-[22px] font-bold text-[#1A4D6D]">
                Tenants
              </h1>
              <p className="text-[13px] text-gray-600">
                Manage tenants across all properties
              </p>
            </div>

            <Link href="/tenant/new">
              <button className="px-5 py-2.5 rounded-lg text-white bg-gradient-to-r from-[#1A4D6D] to-teal-500 text-[14px] shadow-md hover:opacity-90 transition">
                + Add Tenant
              </button>
            </Link>
          </div>

          {/* Tenants Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden flex-1">
            {/* Table Header */}
            <div className="grid grid-cols-7 gap-4 px-6 py-4 bg-gray-50 text-[12px] font-semibold text-gray-600">
              <p>Tenant</p>
              <p>Phone</p>
              <p>Property</p>
              <p>Rent</p>
              <p>Due Date</p>
              <p>Status</p>
              <p className="text-right">Actions</p>
            </div>

            {/* Empty State */}
            {tenants.length === 0 && (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-3">
                <p className="text-[15px] font-medium text-gray-700">
                  No tenants added yet
                </p>
                <p className="text-[13px] text-gray-500">
                  Add tenants to start tracking rent and occupancy
                </p>

                <Link href="/tenant/new">
                  <button className="mt-3 px-5 py-2.5 rounded-lg text-white bg-[#1A4D6D] text-[14px] hover:opacity-90">
                    + Add Tenant
                  </button>
                </Link>
              </div>
            )}

            {/* Tenant Rows */}
            {tenants.map((tenant) => (
              <div
                key={tenant.id}
                className="grid grid-cols-7 gap-4 px-6 py-4 text-[14px] border-t items-center"
              >
                <p className="font-medium text-[#1A4D6D]">
                  {tenant.name}
                </p>

                <p>{tenant.phone}</p>

                <p>{getPropertyName(tenant.propertyId)}</p>

                <p>₦{tenant.rent.toLocaleString()}</p>

                <p className="text-[13px] text-gray-600">
                  {tenant.dueDate}
                </p>

                <StatusBadge status={tenant.status} />

                <div className="flex justify-end gap-3 text-[13px]">
                  <Link
                    href={`/properties/${tenant.propertyId}`}
                    className="text-[#1A4D6D] hover:underline"
                  >
                    View
                  </Link>

                  <button
                    onClick={() => handleDelete(tenant.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

/* ---------- Components ---------- */

function StatusBadge({
  status,
}: {
  status: "paid" | "pending";
}) {
  return (
    <span
      className={`inline-flex w-fit px-3 py-1 rounded-full text-[12px]
        ${
          status === "paid"
            ? "bg-green-100 text-green-700"
            : "bg-yellow-100 text-yellow-700"
        }`}
    >
      {status === "paid" ? "Paid" : "Pending"}
    </span>
  );
}
