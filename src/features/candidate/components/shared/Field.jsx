const Field = ({ label, error, children }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs text-gray-500">{label}</label>
      <div className="[&>input]:w-full [&>input]:border [&>input]:border-gray-300 [&>input]:rounded-lg [&>input]:px-3 [&>input]:py-2 [&>input]:text-sm [&>input]:outline-none [&>input]:focus:border-[#1B41AA] [&>textarea]:w-full [&>textarea]:border [&>textarea]:border-gray-300 [&>textarea]:rounded-lg [&>textarea]:px-3 [&>textarea]:py-2 [&>textarea]:text-sm [&>textarea]:outline-none [&>textarea]:focus:border-[#1B41AA] [&>select]:w-full [&>select]:border [&>select]:border-gray-300 [&>select]:rounded-lg [&>select]:px-3 [&>select]:py-2 [&>select]:text-sm [&>select]:outline-none">
        {children}
      </div>
      {error && <span className="text-xs text-red-500">{error.message}</span>}
    </div>
  );
};

export default Field;
