type Props = {
  title: string;
  value: string;
  sub: string;
  primary?: boolean;
  color?: string;
};

export default function StatCard({ title, value, sub, primary, color }: Props) {
  return (
    <div
      className={`h-[160px] rounded-2xl p-5 flex flex-col justify-between shadow-lg ${
        primary
          ? "bg-gradient-to-r from-[#1A4D6D] to-teal-500 text-white"
          : "bg-[#f5f5f7] text-[#1d1d1d]"
      }`}
    >
      <p className="text-[14px] opacity-90 font-semibold">{title}</p>
      <div>
        <p className="text-[32px] font-bold">{value}</p>
        <p className={`text-[12px] font-semibold ${color || "opacity-80"}`}>
          {sub}
        </p>
      </div>
    </div>
  );
}
