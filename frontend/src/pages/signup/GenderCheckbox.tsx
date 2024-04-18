import React from "react";

interface GenderCheckboxProps {
  onCheckboxChange: (gender: "male" | "female") => void;
  selectedGender: "male" | "female" | "";
}

const GenderCheckbox: React.FC<GenderCheckboxProps> = ({ onCheckboxChange, selectedGender, }) => {
  return (
    <div className='flex'>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" : ""} `}>
          <span className='label-text text-white'>Male</span>
          <input
            type='checkbox'
            className='checkbox border-slate-900 ml-1'
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className='form-control'>
        <label className={`label gap-2 cursor-pointer  ${selectedGender === "female" ? "selected" : ""}`}>
          <span className='label-text text-white ml-3'>Female</span>
          <input
            type='checkbox'
            className='checkbox border-slate-900 ml-1'
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
