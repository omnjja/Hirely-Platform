import React, { useState } from "react";
import { useFieldArray } from "react-hook-form";
import InputFieldWithLabel from "@/components/ui/InputFieldWithLabel";
import AddButton from "@/components/ui/AddButton";

const AddingField = ({
  suggestionsList = [],
  name,
  control,
  errors,
  bottomText,
  placeholder,
  required = true,
  labelStyle,
}) => {
  const { fields, append, remove } = useFieldArray({
    name: name,
    control,
  });

  const [value, setValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const addValue = (value) => {
    const newValue = value.trim();
    if (!newValue) return;
    const isDuplicate = fields.some(
      (item) => item.value.toLowerCase() === newValue.toLowerCase(),
    );
    if (isDuplicate) {
      setErrorMsg(`${newValue} already exist`);
      return;
    }
    setErrorMsg("");
    append({ value: value.trim() });
    setValue("");
    setShowSuggestions(false);
  };

  const handleAdd = () => {
    addValue(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (showSuggestions && suggestions.length > 0) {
        addValue(suggestions[0]);
      } else {
        handleAdd();
      }
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);

    if (val.trim()) {
      const filtered = suggestionsList.filter((item) =>
        item.toLowerCase().includes(val.toLowerCase()),
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  return (
    <div>
      <div className="relative">
        <div className="grid grid-cols-[1fr_auto] gap-4 items-center">
          <InputFieldWithLabel
            name={name}
            label={name}
            required={required}
            placeholder={placeholder}
            bottomText={bottomText}
            error={errors[name]?.message}
            onChange={handleChange}
            value={value}
            labelStyle={labelStyle}
            onKeyDown={handleKeyDown}
          />
          <AddButton className="mb:8 md:mb-2.5" onClick={handleAdd} />
        </div>

        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute left-0 right-12 z-50 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden max-h-48 overflow-y-auto">
            {/* header count */}
            <div className="px-3 py-1.5 border-b border-gray-100 bg-gray-50">
              <span className="text-xs text-gray-400">
                {suggestions.length} suggestion
                {suggestions.length !== 1 ? "s" : ""}
              </span>
            </div>

            {suggestions.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  setValue(item);
                  setShowSuggestions(false);
                }}
                className="group flex items-center justify-between px-3 py-2 hover:bg-blue-50 cursor-pointer transition-colors"
              >
                {/* highlight matched part */}
                <span className="text-sm text-gray-700 group-hover:text-[#1B41AA]">
                  {item.slice(
                    0,
                    item.toLowerCase().indexOf(value.toLowerCase()),
                  )}
                  <span className="font-semibold text-[#1B41AA]">
                    {item.slice(
                      item.toLowerCase().indexOf(value.toLowerCase()),
                      item.toLowerCase().indexOf(value.toLowerCase()) +
                        value.length,
                    )}
                  </span>
                  {item.slice(
                    item.toLowerCase().indexOf(value.toLowerCase()) +
                      value.length,
                  )}
                </span>
                {/* ✅ show if already added */}
                {fields.some(
                  (f) => f.value.toLowerCase() === item.toLowerCase(),
                ) && (
                  <span className="text-xs text-teal-500 font-medium shrink-0 ml-2">
                    ✓ Added
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* tags */}
      <div className="flex flex-wrap gap-2 mb-1 mt-2">
        {fields.map((field, index) => (
          <span
            key={field.id}
            className="bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-full flex items-center gap-1.5 text-sm"
          >
            {field.value}
            <button
              type="button"
              onClick={() => remove(index)}
              className="text-blue-300 hover:text-red-400 transition text-xs leading-none"
            >
              ✕
            </button>
          </span>
        ))}
      </div>

      {errorMsg && <p className="text-red-500 text-xs mt-1">{errorMsg}</p>}
    </div>
  );
};

export default AddingField;
