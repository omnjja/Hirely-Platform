import { Users } from "lucide-react";

const NoApplicantsFound = () => (
  <div className="flex flex-col items-center justify-center py-24 text-center px-4">

    <h2 className="text-xl font-semibold text-[#2A3439] mb-2">
      No Applicants Yet
    </h2>
    <p className="text-sm text-[#566166] max-w-sm leading-relaxed">
      Your jobs are live but no one has applied yet. Share your postings to
      attract candidates.
    </p>
  </div>
);

export default NoApplicantsFound;
