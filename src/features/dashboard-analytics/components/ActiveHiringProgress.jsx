const roles = [
  {
    name: "Lead Data Scientist",
    priority: "High",
    department: "Engineering",
    progress: 80,
    targetDate: "Oct 24, 2023",
  },
  {
    name: "Creative Director",
    priority: "Medium",
    department: "Design",
    progress: 45,
    targetDate: "Nov 12, 2023",
  },
  {
    name: "Account Executive",
    priority: "Low",
    department: "Sales",
    progress: 15,
    targetDate: "Dec 05, 2023",
  },
];

const priorityStyles = {
  High: { color: "text-[#4C58A6]", bar: "bg-[#4C58A6]" },
  Medium: { color: "text-slate-500", bar: "bg-slate-500" },
  Low: { color: "text-slate-400", bar: "bg-slate-400" },
};

const ActiveHiringProgress = () => {
  return (
    <div className="bg-white rounded-2xl border border-black p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-sm  md:text-base font-semibold text-[#2A3439]">
          Active Hiring Progress
        </h2>
        <button className="text-[10px] md:text-[11px] font-semibold tracking-widest uppercase text-[#4C58A6]">
          View all openings
        </button>
      </div>

      <table className="w-full table-fixed border-collapse">
        <thead>
          <tr className="bg-[#EFF4F7]">
            {[
              "Role Name",
              "Department",
              "Hiring Progress",
              "Target Date",
              "Action",
            ].map((h) => (
              <th
                key={h}
                className="text-[9px] font-semibold text-[#566166] tracking-widest uppercase text-left px-3 py-2.5"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => {
            const styles = priorityStyles[role.priority];
            return (
              <tr key={role.name} className="border-t border-slate-100">
                <td className="px-3 py-4">
                  <p className="text-[12px] md:text-sm font-semibold text-[#2A3439]">
                    {role.name}
                  </p>
                  <span
                    className={`text-[8px] md:text-[10px] font-semibold uppercase tracking-wide ${styles.color}`}
                  >
                    Priority: {role.priority}
                  </span>
                </td>
                <td className="px-3 py-4  text-[12px] md:text-sm text-[#566166]">
                  {role.department}
                </td>
                <td className="px-3 py-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${styles.bar}`}
                        style={{ width: `${role.progress}%` }}
                      />
                    </div>
                    <span className="text-[12px] md:text-sm font-medium text-slate-700 min-w-8.5">
                      {role.progress}%
                    </span>
                  </div>
                </td>
                <td className="px-3 py-4 text-[12px] md:text-sm text-[#2A3439]">
                  {role.targetDate}
                </td>
                <td className="px-3 py-4">
                  <button className="md:w-8 md:h-8 h-4 w-4 inline-flex items-center justify-center text-[#566166] hover:bg-slate-50">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ActiveHiringProgress;
