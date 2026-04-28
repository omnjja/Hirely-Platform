import { React, useState, useEffect } from "react";

const ProfileTabs = ({ sections }) => {
  const [activeTab, setActiveTab] = useState("personal");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    document.getElementById(tab)?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-10% 0px -90% 0px",
      },
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <div className="flex gap-4 md:gap-6 border-b mt-5 sticky top-0 z-10 bg-white py-3">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => handleTabChange(section.id)}
          className={`
            pb-2 relative
            text-xs md:text-sm font-medium
            ${activeTab === section.id ? "text-[#1B41AA]" : "text-gray-500"}
          `}
        >
          {section.label}

          {activeTab === section.id && (
            <span
              className="
                absolute
                left-0
                md:bottom-0
                -bottom-3.25
                w-full
                h-0.5
                bg-linear-to-r
                from-[#1B41AA]
                to-[#0FB07C]
                transition-all duration-300
              "
            />
          )}
        </button>
      ))}
    </div>
  );
};

export default ProfileTabs;
