import { useEffect, useState } from "react";
import "./Dropdown.css";

type DropdownProps = {
  options: string[];
  children: React.ReactNode;
  selectedOption?: number | null;
  storyIsInLibrary?: boolean;
  handleOptionChange: (id: any, status: number) => void;
  handleChooseOption: (status: number) => void;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  children,
  selectedOption,
  storyIsInLibrary,
  handleOptionChange,
  handleChooseOption,
}) => {
  const [optionSelected, setOptionSelected] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (selectedOption != null) {
      setOptionSelected(selectedOption);
    }
  }, [selectedOption]);

  const handleOptionClick = (optionIndex: number) => {
    if (storyIsInLibrary) {
      setOptionSelected(optionIndex);
      if (optionIndex == optionSelected) {
        console.log("Option is already selected");
      } else {
        console.log("handling option change...");
        handleOptionChange(null, optionIndex);
      }
    } else {
      console.log("Story is not in library so cannot update");
      handleChooseOption(optionIndex);
    }
    console.log(optionIndex);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        {children}
        <i className={`fas fa-chevron-${isOpen ? "up" : "down"}`}></i>
      </div>
      {isOpen && (
        <div className="dropdown-options-container">
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-options-container-item"
              onClick={() => handleOptionClick(index)}
              style={{
                color: optionSelected == index ? "#721CFF" : "#FFFFFF",
              }}
            >
              {option}
            </div>
          ))}
          {storyIsInLibrary && (
            <div className="dropdown-options-container-item">Remove</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
