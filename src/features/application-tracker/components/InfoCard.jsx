import React from "react";
import {
  MapPin,
  Briefcase,
  Clock,
  DollarSign,
  Users,
  Star,
} from "lucide-react";
import InfoChip from "./InfoChip";

const InfoCard = ({ job, app, statusStyle, comp }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className={`h-1.5 w-full ${statusStyle.barColor}`} />
      <div className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-linear-to-br from-blue-50 to-blue-100 flex items-center justify-center text-[#0576D6] font-extrabold text-xl shadow-inner">
              {job.companyName?.[0] ?? "?"}
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-gray-900">
                {job.title}
              </h1>
              <p className="text-gray-500 font-medium text-sm mt-0.5">
                {job.companyName}
              </p>
            </div>
          </div>
          <span
            className={`self-start sm:self-auto text-xs font-bold uppercase px-4 py-1.5 rounded-full ${statusStyle.detailBg} ${statusStyle.detailText}`}
          >
            {app.status}
          </span>
        </div>

        <div className="flex flex-wrap gap-4 mt-5">
          <InfoChip icon={MapPin} label={job.location} />
          <InfoChip icon={Briefcase} label={job.department} />
          <InfoChip icon={Clock} label={job.jobType?.replace("_", " ")} />
          <InfoChip icon={DollarSign} label={comp} />
          <InfoChip
            icon={Users}
            label={job.companySize ? `${job.companySize} employees` : null}
          />
          <InfoChip
            icon={Star}
            label={
              job.experienceLevel ? `${job.experienceLevel} yrs exp` : null
            }
          />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
