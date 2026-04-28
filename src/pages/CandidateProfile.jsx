import { React, useState } from "react";
import CandidateLayout from "@/components/layout/CandidateLayout";
import ProfileInfo from "../features/candidate/components/ProfileComponents/ProfileInfo";
import ProfileTabs from "../features/candidate/components/ProfileComponents/ProfileTabs";
import { profileSections } from "@/constants/profileSections";
import ExperienceSection from "../features/candidate/components/ProfileComponents/ExperienceSection";
import SkillsSection from "../features/candidate/components/ProfileComponents/SkillsSection";
import EmploymentSection from "../features/candidate/components/ProfileComponents/EmploymentSection";
import { getCandidateProfile } from "../features/candidate/services/candidateService";
import useUpdateProfileMutation from "../features/candidate/hooks/useUpdateProfileMutation";
import { updatedCandidatePayload } from "@/constants/updatedCandidatePayload";
import EditProfile from "../features/candidate/components/EditProfile";
import { useQuery, useQueryClient } from "@tanstack/react-query";

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
      await queryClient.invalidateQueries(["profile"]);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const educationItems = [
    {
      date: "2015 - 2019",
      title: "Bachelor of Science in Computer Science",
      description: "University of Example, 2015 - 2019",
    },
    {
      date: "2019 - 2021",
      title: "Master of Science in Software Engineering",
      description: "Example State University, 2019 - 2021",
    },
  ];
  const experienceItems = [
    {
      date: "2021 - Present",
      title: "Software Engineer",
      description: "Tech Company, 2021 - Present",
    },
    {
      date: "2019 - 2021",
      title: "Junior Developer",
      description: "Startup Inc., 2019 - 2021",
    },
    {
      date: "2018 - 2019",
      title: "Intern",
      description: "Software Solutions, 2018 - 2019",
    },
  ];

  // if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <CandidateLayout>
        <ProfileInfo
          profileData={profileData}
          onEdit={() => setIsModalOpen(true)}
        />
        <ProfileTabs sections={profileSections} />
        <div id="personal" className=" py-4">
          Personal Section
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
      </CandidateLayout>

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
