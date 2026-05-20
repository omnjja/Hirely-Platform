const Section = ({ title, children, variant = "default" }) => {
  const isWrapper = variant === "wrapper";

  return (
    <div className={isWrapper ? "flex flex-col gap-4" : ""}>
      <h3
        className={
          isWrapper
            ? "text-sm font-semibold text-gray-700 border-b border-gray-100 pb-1"
            : "text-sm font-bold text-gray-400 uppercase tracking-widest mb-3"
        }
      >
        {title}
      </h3>

      {isWrapper ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{children}</div>
      ) : (
        children
      )}
    </div>
  );
};

export default Section;
