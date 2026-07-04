import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ApplicantInflowCard = ({ data }) => {
  const { inflowData = {}, totalApplications = 0 } = data;

  const chartData = useMemo(
    () =>
      inflowData.map((item) => ({
        month: item.month.split(" ")[0].toUpperCase(),
        value: item.total_applications,
      })),
    [inflowData],
  );

  const maxValue = useMemo(
    () => Math.max(...chartData.map((d) => d.value)),
    [chartData],
  );

  const peakMonth = useMemo(
    () =>
      inflowData.reduce((max, item) =>
        item.total_applications > max.total_applications ? item : max,
      ),
    [inflowData],
  );

  const average = useMemo(
    () =>
      inflowData.length ? Math.round(totalApplications / inflowData.length) : 0,
    [inflowData, totalApplications],
  );

  const getColor = (value, index) => {
    if (value === maxValue) return "#0576D6";
    if (index === 2) return "#1FA4A7";
    return "#CBD5E1";
  };

  return (
    <div className="bg-white rounded-2xl border border-black p-6">
      <div className="flex items-start justify-between mb-5">
        <div>
          <p className="text-sm font-semibold text-[#2A3439]">
            Applicant Inflow Trend
          </p>
          <p className="text-[10px] md:text-xs text-[#566166]">
            Monthly volume tracking across all roles
          </p>
        </div>
        <span className="text-xs font-medium bg-slate-100 text-slate-500 rounded-full px-3 py-1 border border-slate-200">
          Last {chartData.length} months
        </span>
      </div>

      <div className="h-56">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} barCategoryGap={2} barGap={0}>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8", fontSize: 11, fontWeight: 500 }}
            />
            <Tooltip
              formatter={(value) => [`${value} applicants`, ""]}
              contentStyle={{
                background: "#0f172a",
                border: "none",
                borderRadius: 6,
                color: "#fff",
                fontSize: 12,
              }}
              cursor={{ fill: "transparent" }}
            />
            <Bar dataKey="value" radius={[2, 2, 0, 0]}>
              {chartData.map((entry, index) => (
                <Cell key={index} fill={getColor(entry.value, index)} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-around mt-4 pt-4 border-t border-slate-100">
        {[
          [
            "Peak Month",
            `${peakMonth.month.split(" ")[0]} — ${peakMonth.total_applications}`,
          ],
          [`${chartData.length}-mo Total`, totalApplications],
          ["Monthly Avg", average],
        ].map(([label, val]) => (
          <div key={label} className="text-center">
            <p className="text-[11px] uppercase tracking-wide text-slate-400 mb-0.5">
              {label}
            </p>
            <p className="text-xs md:text-sm font-medium text-slate-700">
              {val}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicantInflowCard;
