import React, { useState } from "react";


type CustomSelectType = {
  options: number[];
  setSelectedOption: React.Dispatch<React.SetStateAction<number>>;
  selectedOption:number
};

const CustomSelect = ({ options, setSelectedOption, selectedOption }: CustomSelectType) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleOptionClick = (option:number) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleOptionHover = (index:number) => {
    setHoveredIndex(index);
  };

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="custom-select relative py-1 px-2 transition-all border-[1px] text-primary border-crema flex flex-col justify-center items-center"
      onClick={toggleSelect}
    >
      <div className="selected-option ">{selectedOption}</div>
      {isOpen && (
        <ul className="options absolute top-[30px] -left-[0.8px]  transition-all border-[1px] bg-cremaLight text-primary border-crema">
          {options.map((option, index) => {
            if (option !== selectedOption) {
              return (
                <li
                  className="px-2 w-full mx-auto"
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  onMouseEnter={() => handleOptionHover(index)}
                  onMouseLeave={() => handleOptionHover(-1)}
                  style={{
                    backgroundColor: hoveredIndex === index ? "black" : "white",
                    color: hoveredIndex === index ? "white" : "black",
                  }}
                >
                  {option}
                </li>
              );
            }
          })}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
