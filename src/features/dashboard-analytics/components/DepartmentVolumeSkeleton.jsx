import Skeleton from "@/components/ui/Skeleton";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DepartmentVolumeSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl border border-black p-6">
      <div className="flex items-center justify-between mb-5">
        <Skeleton className="h-3.5 w-40" />
        <Skeleton className="h-5 w-5 rounded" />
      </div>

      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="mb-4">
          <div className="flex justify-between mb-1">
            <Skeleton className="h-3 w-36" />
            <Skeleton className="h-3 w-24" />
          </div>
          <Skeleton className="h-3 w-full rounded" />
        </div>
      ))}

      <div className="flex items-center justify-between mt-5 pt-4 border-t border-slate-100">
        <Skeleton className="h-3 w-20" />
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 flex items-center justify-center rounded-lg border border-slate-200 opacity-40">
            <ChevronLeft size={16} style={{ color: "#566166" }} />
          </div>
          <div className="w-7 h-7 flex items-center justify-center rounded-lg border border-slate-200 opacity-40">
            <ChevronRight size={16} style={{ color: "#566166" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentVolumeSkeleton;
