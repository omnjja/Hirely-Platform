import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Mail, Phone, Building2, Pencil } from "lucide-react";
import ButtonComponent from "@/components/ui/ButtonComponent";

const HrProfileInfo = ({ data, onEdit }) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-5">
    <div className="flex items-start gap-4">
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-3 flex-wrap">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              {data.fullName}
            </h2>
            <p className="text-sm text-gray-500 mb-2">{data.jobTitle}</p>
            <span className="inline-flex items-center gap-1.5 text-xs bg-teal-50 text-teal-700 rounded-full px-3 py-1">
              <Building2 className="w-3 h-3" /> {data.companyName}
            </span>
          </div>
          <ButtonComponent
            text="Edit Profile"
            rounded="lg"
            gradientBorder={true}
            onClick={onEdit}
          >
            <Pencil className="w-3.5 h-3.5" />
          </ButtonComponent>
        </div>

        <hr className="my-4 border-gray-100" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Mail className="w-4 h-4 shrink-0" /> {data.email}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Phone className="w-4 h-4 shrink-0" /> {data.phoneNumber}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <LinkedInIcon style={{ fontSize: 16 }} /> LinkedIn
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default HrProfileInfo;
