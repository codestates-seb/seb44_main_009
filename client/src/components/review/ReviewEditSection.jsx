// import { useState } from "react";
import { ButtonContainer } from "./styles/ButtonContainer.styled";
import { DoubleButton } from "./styles/DoubleButton.styled";

function ReviewEditSection({ title, options, selectedOption, onSelect }) {
  const handleButtonClick = option => {
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
            selected={selectedOption === option}
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

export default ReviewEditSection;
