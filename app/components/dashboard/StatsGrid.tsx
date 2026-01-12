import StatCard from "./StatCard";

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-4 gap-5">
      <StatCard title="Total Income" value="₦10,000,000" sub="This Month" primary />
      <StatCard title="Outstanding" value="₦1,000,000" sub="2 Overdue" color="text-red-500" />
      <StatCard title="Occupied Units" value="10 / 10" sub="100% Filled" color="text-green-500" />
      <StatCard title="Upcoming Payments" value="₦3,500,000" sub="2 Due Soon" color="text-yellow-500" />
    </div>
  );
}
