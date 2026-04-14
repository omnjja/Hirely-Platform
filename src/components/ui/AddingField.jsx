import React, { useState } from "react";
import { useFieldArray } from "react-hook-form";
import InputFieldWithLabel from "@/components/ui/InputFieldWithLabel";
import AddButton from "@/components/ui/AddButton";

const AddingField = ({
  name,
  listName,
  control,
  errors,
  bottomText,
  placeholder,
  withBtn = true,
  required = false,
}) => {
  const { fields, append, remove } = useFieldArray({
    name: listName,
    control,
  });
  const [value, setValue] = useState("");

  const handleAdd = () => {
    if (value.trim() === "") return;
    append({ value: value.trim() });
    setValue("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!withBtn) handleAdd();
    }
  };

  return (
    <div>
      <div className="grid grid-cols-[1fr_auto] gap-4 items-center">
        <InputFieldWithLabel
          name={name}
          label={name}
          required={required}
          placeholder={placeholder}
          bottomText={bottomText}
          error={errors[name]?.message}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          onKeyDown={handleKeyDown}
        />
        {withBtn && (
          <AddButton className="mb:8 md:mb-2.5" onClick={handleAdd} />
        )}
      </div>
      <div className="flex flex-wrap gap-2 mb-1">
        {fields.map((field, index) => (
          <span
            key={field.id}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center gap-2"
          >
            {field.value}
            <button type="button" onClick={() => remove(index)}>
              ✕
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default AddingField;
