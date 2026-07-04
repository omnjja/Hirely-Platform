import LandingHeader from "@/features/landing-page/components/LandingHeader";
import LandingButtons from "@/features/landing-page/components/LandingButtons";
import LandingContent from "@/features/landing-page/components/LandingContent";
import LeftLogo from "@/components/ui/LeftLogo";

const LandingPage = () => {
  return (
    <div className="reltaive flex flex-col md:flex-row w-full min-h-screen">
      <div className="hidden md:block md:w-1/2">
        <LeftLogo />
      </div>
      <main className="w-full bg-white px-8 py-10 flex gap-7 md:gap-10 flex-col items-center justify-center overflow-hidden">
        <LandingHeader />
        <LandingButtons />
        <LandingContent />
      </main>
    </div>
  );
};

export default LandingPage;
