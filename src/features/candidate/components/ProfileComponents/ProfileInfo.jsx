import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Globe,
  Pencil,
  UserRound,
} from "lucide-react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ButtonComponent from "@/components/ui/ButtonComponent";

const ProfileInfo = () => {
  const user = {
    avatar: "",
    name: "Malak Elbehairy",
    title: "Senior Frontend Developer",
    bio: "Passionate frontend developer with 5+ years of experience building modern web applications. Specialized in React, TypeScript, and creating exceptional user experiences.",
    email: "youssef@email.com",
    phone: "+1 (555) 123-4567",
    location: "United States",
    status: "Open to opportunities",
    linkedin: "#",
    github: "#",
    portfolio: "#",
  };

  return (
    <div className="bg-white border border-gray-500 rounded-2xl p-4 md:p-6  flex flex-col md:flex-row gap-4 md:gap-5">
      {/* Avatar + Buttons in mobile */}
      <div className="flex items-start gap-4 md:contents">
        <div className="shrink-0">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-teal-500 object-cover"
            />
          ) : (
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-teal-500 flex items-center justify-center bg-gray-100">
              <UserRound size={28} className="text-gray-400" />
            </div>
          )}
        </div>

        <div className="flex md:hidden flex-col gap-2 ml-auto shrink-0">
          <ButtonComponent
            text="Change Photo"
            rounded="lg"
            gradientBorder={true}
          />
          <ButtonComponent
            text="Edit Profile"
            rounded="lg"
            gradientBorder={true}
          >
            <Pencil className="w-3.5 h-3.5" />
          </ButtonComponent>
        </div>
      </div>

      {/* Info */}
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg md:text-xl font-bold text-[#1B41AA]">
              {user.name}
            </h2>
            <p className="text-gray-500 text-sm mb-2">{user.title}</p>
            <p className="text-gray-400 text-sm max-w-lg leading-relaxed mb-4">
              {user.bio}
            </p>
          </div>
          {/* Buttons */}

          <div className="hidden md:flex flex-col gap-2 ml-4 shrink-0">
            <ButtonComponent
              text="Change Photo"
              rounded="lg"
              gradientBorder={true}
              className=""
            />
            <ButtonComponent
              text="Edit Profile"
              rounded="lg"
              gradientBorder={true}
              className="flex items-center"
            >
              <Pencil className="w-3.5 h-3.5" />
            </ButtonComponent>
          </div>
        </div>
        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Mail className="w-4 h-4" /> {user.email}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Phone className="w-4 h-4" /> {user.phone}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin className="w-4 h-4" /> {user.location}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Briefcase className="w-4 h-4" /> {user.status}
          </div>
        </div>
        {/* Social Links */}
        <div className="flex items-center gap-5">
          <a
            href={user.linkedin}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#1B41AA] transition"
          >
            <LinkedInIcon className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href={user.github}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#1B41AA] transition"
          >
            <GitHubIcon className="w-4 h-4" /> GitHub
          </a>
          <a
            href={user.portfolio}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#1B41AA] transition"
          >
            <Globe className="w-4 h-4" /> Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
