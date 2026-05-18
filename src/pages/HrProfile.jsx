import React, { use, useState } from "react";
import HrProfileInfo from "../features/hr-profile/components/HrProfileInfo";
import CompanyCard from "../features/hr-profile/components/CompanyCard";
import { getHrProfile } from "../features/hr-profile/services/JobService";
import { useQuery } from "@tanstack/react-query";
import EditHrProfileForm from "../features/hr-profile/components/EditHrProfileForm";
import { updateHrProfile } from "../features/hr-profile/services/JobService";
import { useQueryClient } from "@tanstack/react-query";

const HrProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const queryClient = useQueryClient();

  const { data: hrData, isLoading } = useQuery({
    queryKey: ["hrProfile"],
    queryFn: getHrProfile,
  });

  const handleUpdate = async (formData) => {
    try {
      await updateHrProfile(formData);
      await queryClient.invalidateQueries({
        queryKey: ["hrProfile"],
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  if (!hrData && !isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <span className="text-gray-500">Profile not found.</span>
      </div>
    );
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
            <EditHrProfileForm
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              profileData={hrData}
              onSubmit={handleUpdate}
              // isPending={isPending}
            />
          )}
        </div>
      )}
    </>
  );
};

export default HrProfile;
