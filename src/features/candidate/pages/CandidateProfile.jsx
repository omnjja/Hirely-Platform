import { React, useEffect } from "react";
import CandidateLayout from "@/components/layout/CandidateLayout";
import ProfileInfo from "../components/ProfileComponents/ProfileInfo";
import ProfileTabs from "../components/ProfileComponents/ProfileTabs";
import { profileSections } from "@/constants/profileSections";
import ExperienceSection from "../components/ProfileComponents/ExperienceSection";
import SkillsSection from "../components/ProfileComponents/SkillsSection";
import EmploymentSection from "../components/ProfileComponents/EmploymentSection";
import { getCandidateProfile } from "../services/candidateService";

const CandidateProfile = () => {
  async function fetchProfileData() {
    try {
      const data = await getCandidateProfile();
      console.log("Profile Data:", data);
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  }

  useEffect(() => {
    fetchProfileData();
  }, []);
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
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Django",
    "SQL",
    "Git",
    "Docker",
    "AWS",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Django",
    "SQL",
    "Git",
    "Docker",
    "AWS",
  ];
  return (
    <CandidateLayout>
      <ProfileInfo />
      <ProfileTabs sections={profileSections} />
      <div id="personal" className=" py-4">
        Personal Section
      </div>

      <div id="education" className=" py-4">
        <ExperienceSection header="Education" items={educationItems} />
      </div>

      <div id="experience" className=" py-4">
        <ExperienceSection header="Work Experience" items={experienceItems} />
      </div>

      <div id="skills" className="py-4">
        <SkillsSection skills={skills} />
      </div>

      <div id="equal" className="py-4">
        <EmploymentSection />
      </div>
    </CandidateLayout>
  );
};

export default CandidateProfile;
