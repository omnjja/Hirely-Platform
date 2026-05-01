import { Globe, Building2, Users, Briefcase } from "lucide-react";

const CompanyCard = ({ data }) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-5">
    <h3 className="text-sm font-medium text-gray-900 mb-4">Company details</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {[
        { label: "Company name", value: data.companyName, icon: Building2 },
        { label: "Industry", value: data.companyIndustry, icon: Briefcase },
        { label: "Company size", value: data.companySize, icon: Users },
        { label: "Website", value: data.companyWebsite, icon: Globe },
      ].map(({ label, value, icon: Icon }) => (
        <div key={label}>
          <p className="text-xs text-gray-400 mb-1">{label}</p>
          <div className="flex items-center gap-1.5 text-sm font-medium text-gray-700">
            <Icon className="w-3.5 h-3.5 text-gray-400" /> {value || "—"}
          </div>
        </div>
      ))}
    </div>
    <hr className="my-4 border-gray-100" />
    <p className="text-xs text-gray-400 mb-1">About the company</p>
    <p className="text-sm text-gray-500 leading-relaxed">
      {data.companySummary || "—"}
    </p>
  </div>
);

export default CompanyCard;
