import React from 'react'

const CompanyLogo = ({job}) => {
  return (
    <div className="shrink-0 flex items-center justify-center bg-black text-white font-bold w-9 h-9 sm:w-12 sm:h-12 rounded-lg">
      {job.companyName[0]}
    </div>
  );
}

export default CompanyLogo
