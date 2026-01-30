"use client";

import { useEffect, useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import TopBar from "../components/layout/TopBar";

type Tenant = {
  id: string;
  fullName: string;
  phone: string;
  propertyId: string;
  rent: number;
  paymentFrequency: string;
  moveInDate: string;
};

type Property = {
  id: string;
  name: string;
};

type RentRecord = {
  id: string;
  tenantId: string;
  period: string;
  amount: number;
  dueDate: string;
  status: "Paid" | "Partial" | "Overdue" | "Unpaid";
};

export default function RentPage() {
  const [tenants, setTenants] = useState<Tenant[]>([]);
  const [properties, setProperties] = useState<Property[]>([]);
  const [rentRecords, setRentRecords] = useState<RentRecord[]>([]);

  useEffect(() => {
    const storedTenants = localStorage.getItem("tenants");
    const storedProperties = localStorage.getItem("properties");
    const storedRent = localStorage.getItem("rent");

    if (storedTenants) setTenants(JSON.parse(storedTenants));
    if (storedProperties) setProperties(JSON.parse(storedProperties));
    if (storedRent) setRentRecords(JSON.parse(storedRent));
  }, []);

  const getTenantName = (tenantId: string) =>
    tenants.find((t) => t.id === tenantId)?.fullName || "Unknown";

  const getPropertyName = (tenantId: string) => {
    const tenant = tenants.find((t) => t.id === tenantId);
    return (
      properties.find((p) => p.id === tenant?.propertyId)?.name || "-"
    );
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
                Rent
              </h1>
              <p className="text-[13px] text-gray-600">
                Track rent due, paid, and overdue
              </p>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-4 gap-4">
            <SummaryCard title="Total Due" value="₦0" />
            <SummaryCard title="Collected" value="₦0" />
            <SummaryCard title="Outstanding" value="₦0" />
            <SummaryCard title="Overdue" value="0" />
          </div>

          {/* Rent Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden flex-1">
            {/* Table Header */}
            <div className="grid grid-cols-7 gap-4 px-6 py-4 bg-gray-50 text-[12px] font-semibold text-gray-600">
              <p>Tenant</p>
              <p>Property</p>
              <p>Period</p>
              <p>Amount</p>
              <p>Due Date</p>
              <p>Status</p>
              <p className="text-right">Actions</p>
            </div>

            {/* Empty State */}
            {rentRecords.length === 0 && (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-3">
                <p className="text-[15px] font-medium text-gray-700">
                  No rent records yet
                </p>
                <p className="text-[13px] text-gray-500">
                  Rent records will appear once tenants are added
                </p>
              </div>
            )}

            {/* Rent Rows */}
            {rentRecords.map((rent) => (
              <div
                key={rent.id}
                className="grid grid-cols-7 gap-4 px-6 py-4 text-[14px] border-t items-center"
              >
                <p className="font-medium text-[#1A4D6D]">
                  {getTenantName(rent.tenantId)}
                </p>

                <p>{getPropertyName(rent.tenantId)}</p>

                <p>{rent.period}</p>

                <p>₦{rent.amount.toLocaleString()}</p>

                <p className="text-[13px] text-gray-600">
                  {rent.dueDate}
                </p>

                <StatusBadge status={rent.status} />

                <div className="flex justify-end gap-3 text-[13px]">
                  <button className="text-[#1A4D6D] hover:underline">
                    View
                  </button>
                  <button className="text-green-600 hover:underline">
                    Record Payment
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

function SummaryCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <p className="text-[12px] text-gray-500">{title}</p>
      <p className="text-[20px] font-bold text-[#1A4D6D] mt-1">
        {value}
      </p>
    </div>
  );
}

function StatusBadge({
  status,
}: {
  status: "Paid" | "Partial" | "Overdue" | "Unpaid";
}) {
  const styles = {
    Paid: "bg-green-100 text-green-700",
    Partial: "bg-yellow-100 text-yellow-700",
    Overdue: "bg-red-100 text-red-700",
    Unpaid: "bg-gray-100 text-gray-700",
  };

  return (
    <span
      className={`inline-flex w-fit px-3 py-1 rounded-full text-[12px] ${styles[status]}`}
    >
      {status}
    </span>
  );
}
