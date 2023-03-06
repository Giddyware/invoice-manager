import { useState } from "react";

function CheckboxSelect({ options }) {
  const [selected, setSelected] = useState(null);

  const handleOptionClick = (value) => {
    if (value === selected) {
      setSelected(null);
    } else {
      setSelected(value);
    }
   
  };

  return (
    <div className="flex flex-col">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
        >
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 accent-primary default:bg-[black] before:bg-primary-dark-17"
            checked={option.value === selected}
            onChange={() => handleOptionClick(option.value)}
          />
          <span className="ml-3 text-xs">{option.label}</span>
        </label>
      ))}
    </div>
  );
}

export default CheckboxSelect;
