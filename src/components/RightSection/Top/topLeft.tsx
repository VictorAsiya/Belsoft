import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from 'recharts';

const data = [
  { month: 'Jan', productA: 20, productB: 40 },
  { month: 'Feb', productA: 90, productB: 55 },
  { month: 'Mar', productA: 10, productB: 55 },
  { month: 'Apr', productA: 60, productB: 45 },
  { month: 'May', productA: 55, productB: 48 },
  { month: 'Jun', productA: 55, productB: 45 },
  { month: 'Jul', productA: 60, productB: 98 },
  { month: 'Aug', productA: 48, productB: 80 },
  { month: 'Sep', productA: 52, productB: 15 },
  { month: 'Oct', productA: 55, productB: 15 },
  { month: 'Nov', productA: 10, productB: 80 },
  { month: 'Dec', productA: 20, productB: 40 },
];

export function RevenueOverview() {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-4">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800">
          Revenue Overview
        </h2>
        <select className="text-sm p-2 border rounded text-gray-700 w-full sm:w-auto">
          <option>For every month</option>
        </select>
      </div>

      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="productA" fill="#facc15" name="Product A" />
            <Bar dataKey="productB" fill="#3b82f6" name="Product B" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
