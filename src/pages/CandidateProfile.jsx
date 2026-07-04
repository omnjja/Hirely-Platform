import { React, useState } from "react";
import ProfileInfo from "@/features/candidate/profile/components/profileComponents/ProfileInfo";
import ProfileTabs from "@/features/candidate/profile/components/profileComponents/ProfileTabs";
import ExperienceSection from "@/features/candidate/profile/components/profileComponents/ExperienceSection";
import SkillsSection from "@/features/candidate/profile/components/profileComponents/SkillsSection";
import EmploymentSection from "@/features/candidate/profile/components/profileComponents/EmploymentSection";
import { getCandidateProfile } from "@/features/candidate/profile/services/candidateService";
import useUpdateProfileMutation from "@/features/candidate/profile/hooks/useUpdateProfileMutation";
import { updatedCandidatePayload } from "@/constants/updatedCandidatePayload";
import EditProfile from "@/features/candidate/profile/components/EditProfile";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import CandidateProfileSkeleton from "@/features/candidate/profile/components/profileComponents/CandidateProfileSkeleton";
import CvSection from "@/features/candidate/profile/components/profileComponents/CvSection";
import toast from "react-hot-toast";

const CandidateProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    data: profileData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["candidateProfile"],
    queryFn: getCandidateProfile,
  });

  const { mutateAsync: updateProfile, isPending } = useUpdateProfileMutation();

  const handleUpdate = async (formData) => {
    try {
      const payload = updatedCandidatePayload(formData);
      await updateProfile(payload);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  if (isLoading) return <CandidateProfileSkeleton />;
  if (isError)
    return toast.error("error while fetching data. Please try again.");

  return (
    <>
      <ProfileInfo
        profileData={profileData}
        onEdit={() => setIsModalOpen(true)}
      />
      <ProfileTabs />
      <div id="cv">
        <CvSection cv={profileData?.cvFileUrl} />
      </div>

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
