import { useState } from "react";
import { styled } from "styled-components";

const ButtonContainer = styled.div`
  margin: 16px 0 16px 0;
  display: flex;
`;

const DoubleButton = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  margin-right: 8px;
  border: 1px solid #383838;
  border-radius: ${({ isFirst, isLast }) =>
    isFirst ? "20px 0 0 20px" : isLast ? "0 20px 20px 0" : "0"};
  background-color: ${({ selected }) => (selected ? "#383838" : "#fff")};
  color: ${({ selected }) => (selected ? "#fff" : "#383838")};
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #383838;
    color: #fff;
    transition: 0.6s;
  }
`;

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
