import React from "react";

const DetailsFooter = ({ app }) => {
  return (
    <div>
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
