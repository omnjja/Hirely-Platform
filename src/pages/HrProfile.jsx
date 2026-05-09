import React, { use, useState } from "react";
import HrProfileInfo from "../features/hr-profile/components/HrProfileInfo";
import CompanyCard from "../features/hr-profile/components/CompanyCard";
import { getHrProfile } from "../features/hr-profile/services/JobService";
import { useQuery } from "@tanstack/react-query";

const data = {
  fullName: "Sarah Mitchell",
  jobTitle: "Senior HR Manager",
  phoneNumber: "+1 (555) 304-7821",
  email: "s.mitchell@novatech.io",
  companyName: "NovaTech Solutions",
  companyWebsite: "https://novatech.io",
  companySummary:
    "NovaTech Solutions is a fast-growing SaaS company building the next generation of enterprise productivity tools. We believe in people-first culture and continuous growth.",
  companySize: "201–500 employees",
  companyIndustry: "Software / SaaS",
};

const HrProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: hrData, isLoading } = useQuery({
    queryKey: ["hrProfile"],
    queryFn: getHrProfile,
  });

  if (hrData) {
    console.log(hrData);
  }

  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <span className="text-gray-500">Loading profile...</span>
        </div>
      ) : (
        <div className="flex flex-col gap-4 py-4 w-full">
          <HrProfileInfo data={hrData} onEdit={() => setIsModalOpen(true)} />
          <CompanyCard data={hrData} />

          {isModalOpen && (
            <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
              <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl">
                <h2 className="text-lg font-semibold text-[#1B41AA] mb-4">
                  Edit profile
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="border px-4 py-2 rounded-lg hover:bg-gray-50 text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default HrProfile;
