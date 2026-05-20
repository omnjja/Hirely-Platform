import { React, useState } from "react";
import ProfileInfo from "../features/candidate/profile/components/profileComponents/ProfileInfo";
import ProfileTabs from "../features/candidate/profile/components/profileComponents/ProfileTabs";
import { profileSections } from "@/constants/profileSections";
import ExperienceSection from "../features/candidate/profile/components/profileComponents/ExperienceSection";
import SkillsSection from "../features/candidate/profile/components/profileComponents/SkillsSection";
import EmploymentSection from "../features/candidate/profile/components/profileComponents/EmploymentSection";
import { getCandidateProfile } from "../features/candidate/profile/services/candidateService";
import useUpdateProfileMutation from "../features/candidate/profile/hooks/useUpdateProfileMutation";
import { updatedCandidatePayload } from "@/constants/updatedCandidatePayload";
import EditProfile from "../features/candidate/profile/components/EditProfile";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import CandidateProfileSkeleton from "@/features/candidate/profile/components/profileComponents/CandidateProfileSkelton";

const CandidateProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    data: profileData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["candidateProfile"],
    queryFn: getCandidateProfile,
  });

  const { mutateAsync: updateProfile, isPending } = useUpdateProfileMutation();
  const queryClient = useQueryClient();

  const handleUpdate = async (formData) => {
    try {
      const payload = updatedCandidatePayload(formData);
      await updateProfile(payload);
      await queryClient.invalidateQueries(["candidateProfile"]);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  if (isLoading) return <CandidateProfileSkeleton />;

  return (
    <>
      <ProfileInfo
        profileData={profileData}
        onEdit={() => setIsModalOpen(true)}
      />
      <ProfileTabs sections={profileSections} />

      <div id="education" className=" py-4">
        <ExperienceSection
          header="Education"
          items={profileData?.educations ?? []}
        />
      </div>

      <div id="experience" className=" py-4">
        <ExperienceSection
          header="Work Experience"
          items={profileData?.experiences ?? []}
        />
      </div>

      <div id="skills" className="py-4">
        <SkillsSection skills={profileData?.skills ?? []} />
      </div>

      <div id="equal" className="py-4">
        <EmploymentSection />
      </div>

      <EditProfile
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        profileData={profileData}
        onSubmit={handleUpdate}
        isPending={isPending}
      />
    </>
  );
};

export default CandidateProfile;
