import { useState } from "react";
import { ButtonContainer } from "./styles/ButtonContainer.styled";
import { DoubleButton } from "./styles/DoubleButton.styled";

function ReviewSection({ title, options, selectedOption, onSelect }) {
  const [localSelectedOption, setLocalSelectedOption] =
    useState(selectedOption);

  const handleButtonClick = option => {
    setLocalSelectedOption(option);
    onSelect(option);
  };

  return (
    <div>
      <div>{title}</div>
      <ButtonContainer>
        {options.map((option, index) => (
          <DoubleButton
            key={option}
            isfirst={index === 0 ? "true" : undefined}
            islast={index === options.length - 1 ? "true" : undefined}
            selected={localSelectedOption === option}
            onClick={() => {
              handleButtonClick(option);
            }}
          >
            {option}
          </DoubleButton>
        ))}
      </ButtonContainer>
    </div>
  );
}

export default ReviewSection;
