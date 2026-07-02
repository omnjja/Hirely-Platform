import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ApplicantInflowCard = ({ data }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  const {inflowData, totalApplications} = data;

  const labels = inflowData.map((item) =>
    item.month.split(" ")[0].toUpperCase(),
  );

  const applications = inflowData.map((item) => item.total_applications);

  const average = inflowData.length
    ? Math.round(totalApplications / inflowData.length)
    : 0;

  const peakMonth = inflowData.reduce((max, item) =>
    item.total_applications > max.total_applications ? item : max,
  );

  const maxValue = Math.max(...applications);

  const colors = applications.map((value, i) =>
    value === maxValue ? "#0576D6" : i === 2 ? "#1FA4A7" : "#CBD5E1",
  );

  useEffect(() => {
    chartRef.current?.destroy();
    chartRef.current = new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            data: applications,
            backgroundColor: colors,
            borderRadius: 2,
            borderSkipped: false,
            categoryPercentage: 1,
            barPercentage: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: { label: (ctx) => ` ${ctx.parsed.y} applicants` },
            backgroundColor: "#0f172a",
            padding: 10,
            cornerRadius: 6,
          },
        },
        scales: {
          x: {
            grid: { display: false },
            border: { display: false },
            ticks: { color: "#94a3b8", font: { size: 11, weight: "500" } },
          },
          y: { display: false },
        },
      },
    });

    return () => chartRef.current?.destroy();
  }, [inflowData]);

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
          Last {labels.length} months
        </span>
      </div>

      <div className="relative h-56">
        <canvas ref={canvasRef} />
      </div>

      <div className="flex justify-around mt-4 pt-4 border-t border-slate-100">
        {[
          [
            "Peak Month",
            `${peakMonth.month.split(" ")[0]} — ${peakMonth.total_applications}`,
          ],
          [`${labels.length}-mo Total`, totalApplications],
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
