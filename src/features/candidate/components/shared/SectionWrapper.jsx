const SectionWrapper = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold text-gray-700 border-b border-gray-100 pb-1">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>
    </div>
  );
};

export default SectionWrapper;
