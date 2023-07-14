import { useState } from "react";
import { ButtonContainer } from "./styles/ButtonContainer.styled";
import { DoubleButton } from "./styles/DoubleButton.styled";

function ReviewSection({ title, options, onSelect }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = option => {
    setSelectedOption(option);
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
              onSelect(option);
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
