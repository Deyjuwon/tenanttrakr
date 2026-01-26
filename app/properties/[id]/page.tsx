"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Sidebar from "../../components/layout/Sidebar";
import TopBar from "../../components/layout/TopBar";

type Property = {
  id: string;
  name: string;
  type: string;
  units: number;
  address: string;
};

type Tenant = {
  id: string;
  propertyId: string;
  name: string;
  phone: string;
  rent: number;
  dueDate: string;
  status: "paid" | "pending";
};

export default function PropertyDetailsPage() {
  const { id } = useParams();
  const [property, setProperty] = useState<Property | null>(null);
  const [tenants, setTenants] = useState<Tenant[]>([]);

  useEffect(() => {
    const storedProperties = localStorage.getItem("properties");
    if (storedProperties) {
      const props: Property[] = JSON.parse(storedProperties);
      setProperty(props.find((p) => p.id === id) || null);
    }

    const storedTenants = localStorage.getItem("tenants");
    if (storedTenants) {
      const allTenants: Tenant[] = JSON.parse(storedTenants);
      setTenants(allTenants.filter((t) => t.propertyId === id));
    }
  }, [id]);

  const handleDeleteTenant = (tenantId: string) => {
    if (!confirm("Are you sure you want to delete this tenant?")) return;

    const stored = localStorage.getItem("tenants");
    if (!stored) return;

    const updatedTenants = JSON.parse(stored).filter(
      (t: Tenant) => t.id !== tenantId
    );

    localStorage.setItem("tenants", JSON.stringify(updatedTenants));

    // Update UI immediately
    setTenants((prev) => prev.filter((t) => t.id !== tenantId));
  };

  if (!property) return null;

  return (
    <div className="flex h-screen bg-[#F6F7F9] gap-4 p-4">
      <Sidebar />

      <main className="w-[85%] flex flex-col gap-4">
        <TopBar />

        <div className="flex-1 bg-[#E5E7EB] rounded-lg p-6 flex flex-col gap-6">
          {/* Property Info */}
          <div>
            <h1 className="text-[22px] font-bold text-[#1A4D6D]">
              {property.name}
            </h1>
            <p className="text-[13px] text-gray-600">
              {property.address}
            </p>
          </div>

          {/* Tenants Table */}
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="grid grid-cols-6 px-6 py-4 bg-gray-50 text-[12px] font-semibold text-gray-600">
              <p>Name</p>
              <p>Phone</p>
              <p>Rent</p>
              <p>Due Date</p>
              <p>Status</p>
              <p className="text-right">Actions</p>
            </div>

            {tenants.length === 0 && (
              <p className="p-6 text-center text-gray-500 text-[14px]">
                No tenants added yet
              </p>
            )}

            {tenants.map((tenant) => {
              const message = encodeURIComponent(
                `Hello ${tenant.name}, this is a reminder that your rent of ₦${tenant.rent.toLocaleString()} is due on ${tenant.dueDate}. Thank you.`
              );

              return (
                <div
                  key={tenant.id}
                  className="grid grid-cols-6 px-6 py-4 text-[14px] border-t items-center"
                >
                  <p className="font-medium">{tenant.name}</p>
                  <p>{tenant.phone}</p>
                  <p>₦{tenant.rent.toLocaleString()}</p>
                  <p>{tenant.dueDate}</p>

                  <span
                    className={`px-3 py-1 rounded-full text-[12px] w-fit ${
                      tenant.status === "paid"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {tenant.status}
                  </span>

                  <div className="flex justify-end gap-4 text-[13px]">
                    <a
                      href={`https://wa.me/${tenant.phone}?text=${message}`}
                      target="_blank"
                      className="text-green-600 hover:underline"
                    >
                      WhatsApp
                    </a>

                    <button
                      onClick={() => handleDeleteTenant(tenant.id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
