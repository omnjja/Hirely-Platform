import { React, useState, useRef, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Pencil,
  UserRound,
} from "lucide-react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ButtonComponent from "@/components/ui/ButtonComponent";
import useUpdateProfilePicture from "../../hooks/useUpdateProfilePicture";

const ProfileInfo = ({ profileData, onEdit }) => {
  const fileInputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [fileError, setFileError] = useState("");
  const { mutate: uploadPhoto } = useUpdateProfilePicture();

  if (!profileData) {
    return <div>Loading...</div>;
  }

  const handleChangePhoto = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedTypes.includes(file.type)) {
      setFileError("Only JPG/PNG files are allowed.");
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      setFileError("File must be under 2MB.");
      return;
    }

    setFileError("");
    // local preview
    const reader = new FileReader();
    reader.onloadend = () => setPreviewUrl(reader.result);
    reader.readAsDataURL(file);

    uploadPhoto(file, {
      onSuccess: () => setPreviewUrl(null),
      onError: () => setPreviewUrl(null),
    });
    e.target.value = "";
  };

  const displayPhoto = previewUrl || profileData.profilePictureUrl;

  return (
    <div className="bg-white border border-gray-500 rounded-2xl p-4 md:p-6  flex flex-col md:flex-row gap-4 md:gap-5">
      {/* photo + Buttons in mobile */}
      <div className="flex items-start gap-4 md:contents">
        <div className="shrink-0">
          {profileData.profilePictureUrl ? (
            <img
              src={displayPhoto}
              alt="User Avatar"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-teal-500 object-cover"
            />
          ) : (
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-teal-500 flex items-center justify-center bg-gray-100">
              <UserRound size={28} className="text-gray-400" />
            </div>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept=".jpg,.jpeg,.webp"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        <div className="flex md:hidden flex-col gap-2 ml-auto shrink-0">
          <ButtonComponent
            text="Change Photo"
            rounded="lg"
            gradientBorder={true}
            onClick={handleChangePhoto}
          />
          <ButtonComponent
            text="Edit Profile"
            rounded="lg"
            gradientBorder={true}
            onClick={onEdit}
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
              {profileData.fullName}
            </h2>
            <p className="text-gray-500 text-sm mb-2">
              {profileData.currentJobTitle}
            </p>
            <p className="text-gray-400 text-sm max-w-lg leading-relaxed mb-4">
              {profileData.profileSummary}
            </p>
          </div>
          {/* Buttons */}

          <div className="hidden md:flex flex-col gap-2 ml-4 shrink-0">
            <ButtonComponent
              text="Change Photo"
              rounded="lg"
              gradientBorder={true}
              onClick={handleChangePhoto}
            />
            <ButtonComponent
              text="Edit Profile"
              rounded="lg"
              gradientBorder={true}
              className="flex items-center"
              onClick={onEdit}
            >
              <Pencil className="w-3.5 h-3.5" />
            </ButtonComponent>
          </div>
        </div>
        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Mail className="w-4 h-4" /> {profileData.email}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Phone className="w-4 h-4" /> {profileData.mobileNumber}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <MapPin className="w-4 h-4" /> {profileData.country}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Briefcase className="w-4 h-4" /> {profileData.profileStatus}
          </div>
        </div>
        {/* Social Links */}
        <div className="flex items-center gap-5">
          <a
            href={profileData.linkedin}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#1B41AA] transition"
          >
            <LinkedInIcon className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href={profileData.github}
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#1B41AA] transition"
          >
            <GitHubIcon className="w-4 h-4" /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
