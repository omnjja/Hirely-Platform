import React, { useState } from "react";
import HrProfileInfo from "@/features/hr-profile/components/HrProfileInfo";
import CompanyCard from "@/features/hr-profile/components/CompanyCard";
import EditHrProfileForm from "@/features/hr-profile/components/EditHrProfileForm";
import useUpdateProfileMutation from "@/features/hr-profile/hooks/useUpdateHrMutation";
import HrProfileSkeleton from "@/features/hr-profile/components/HrProfileSkeleton";
import useHrProfile from "@/features/hr-profile/hooks/useHrProfile";
import ErrorComponent from "@/components/ui/ErrorComponent";

const HrProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: hrData, isLoading, error, refetch } = useHrProfile();
  const { mutate: updateProfile, isPending } = useUpdateProfileMutation({
    onSuccess: () => setIsModalOpen(false),
  });

  const handleUpdate = (formData) => {
    updateProfile(formData);
  };

  if (error) return <ErrorComponent error={error} action={() => refetch()} />;

  return (
    <>
      {isLoading ? (
        <HrProfileSkeleton />
      ) : (
        <div className="flex flex-col gap-4 py-4 w-full md:mx-4 ">
          <HrProfileInfo data={hrData} onEdit={() => setIsModalOpen(true)} />
          <CompanyCard data={hrData} />

          {isModalOpen && (
            <EditHrProfileForm
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              profileData={hrData}
              onSubmit={handleUpdate}
              isPending={isPending}
            />
          )}
        </div>
      )}
    </>
  );
};

export default HrProfile;
