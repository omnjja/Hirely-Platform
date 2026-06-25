import LandingHeader from "@/features/landing-page/components/LandingHeader";
import LandingButtons from "@/features/landing-page/components/LandingButtons";
import LandingContent from "@/features/landing-page/components/LandingContent";
import LandingLogo from "@/assets/authSideLogo.webp";

const LandingPage = () => {
  return (
    <div className=" h-screen overflow-hidden bg-white grid grid-cols-1 md:grid-cols-[1fr_2fr]  w-full">
      <div className="hidden md:flex justify-center items-center">
        <img src={LandingLogo} alt="Landing Logo" />
      </div>
      <div className="bg-white px-8 py-10 flex gap-7 md:gap-10 flex-col items-center justify-center overflow-hidden">
        <LandingHeader />
        <LandingButtons />
        <LandingContent />
      </div>
    </div>
  );
};

export default LandingPage;
