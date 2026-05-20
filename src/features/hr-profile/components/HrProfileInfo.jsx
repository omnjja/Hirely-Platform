import { Mail, Phone, Building2, Pencil } from "lucide-react";
import ButtonComponent from "@/components/ui/ButtonComponent";
import hr_pic from "@/assets/topMatch.webp";

const HrProfileInfo = ({ data, onEdit }) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-5">
    <div className="flex items-center gap-4">
      <div className="border-[#6DBCBD] border-2 rounded-full w-18 h-18 shrink-0 overflow-hidden">
        <img
          src={hr_pic}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h2 className="text-base font-semibold text-gray-900 truncate">
          {data.fullName}
        </h2>
        <p className="text-sm text-gray-500 truncate">{data.jobTitle}</p>
        <span className="inline-flex items-center gap-1 text-xs bg-teal-50 text-teal-700 rounded-full px-2.5 py-0.5 mt-1">
          <Building2 className="w-3 h-3 shrink-0" /> {data.companyName}
        </span>
      </div>

      <ButtonComponent
        text="Edit Profile"
        rounded="lg"
        gradientBorder={true}
        onClick={onEdit}
        className="shrink-0"
      >
        <Pencil className="w-3.5 h-3.5" />
      </ButtonComponent>
    </div>

    <hr className="my-4 border-gray-100" />

    <div className="flex flex-wrap gap-x-9 md:gap-x-40 gap-y-2">
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Mail className="w-4 h-4 shrink-0 text-gray-400" />
        <span>{data.email}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <Phone className="w-4 h-4 shrink-0 text-gray-400" />
        <span>{data.phoneNumber}</span>
      </div>
    </div>
  </div>
);

export default HrProfileInfo;
