import React from "react";

const DetailsFooter = ({ job, app }) => {
  return (
    <div>
      {job.hrName && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
            HR Contact
          </p>
          <p className="text-sm font-semibold text-gray-800">{job.hrName}</p>
        </div>
      )}

      {/* feedback */}
      {app.feedbackSummary && (
        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
          <p className="text-xs font-bold text-amber-500 uppercase tracking-widest mb-2">
            Feedback
          </p>
          <p className="text-sm text-amber-800 leading-relaxed">
            {app.feedbackSummary}
          </p>
        </div>
      )}
    </div>
  );
};

export default DetailsFooter;
