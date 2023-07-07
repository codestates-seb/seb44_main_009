import { useState } from "react";
import { ButtonContainer } from "./styles/ButtonContainer.styled";
import { DoubleButton } from "./styles/DoubleButton.styled";

function ReviewSection({ title, options }) {
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
            isFirst={index === 0}
            isLast={index === options.length - 1}
            selected={selectedOption === option}
            onClick={() => handleButtonClick(option)}
          >
            {option}
          </DoubleButton>
        ))}
      </ButtonContainer>
    </div>
  );
}

export default ReviewSection;
