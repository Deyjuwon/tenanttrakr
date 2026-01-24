import Image from "next/image";
import profile from "../../../public/profileHead.png";

type Props = {
  title: string;
};

const tenants = [
  { name: "Adebayo Chinedu", house: "Jay’s House", amount: "₦3,500,000" },
  { name: "Ibrahim Musa", house: "Green Court", amount: "₦1,200,000" },
  { name: "Funke Adele", house: "Palm View", amount: "₦850,000" },
];

export default function TenantList({ title }: Props) {
  const amountColor =
    title === "Overdue Tenants" ? "text-red-500" : "text-green-500";

  return (
    <div className="bg-white rounded-2xl p-5 flex flex-col gap-4">
      <h2 className="font-bold text-[16px] text-[#1d1d1d]">{title}</h2>

      {tenants.map((tenant, i) => (
        <div
          key={i}
          className="flex justify-between items-center border-b last:border-none pb-3"
        >
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="relative h-10 w-10 rounded-full overflow-hidden">
              <Image src={profile} alt="tenant" fill className="object-cover" />
            </div>

            <div>
              <p className="font-semibold text-[14px] text-[#1d1d1d]">{tenant.name}</p>
              <p className="text-[13px] text-gray-500">{tenant.house}</p>
            </div>
          </div>

          <p className={`${amountColor} font-semibold text-[14px]`}>
            {tenant.amount}
          </p>
        </div>
      ))}
    </div>
  );
}
