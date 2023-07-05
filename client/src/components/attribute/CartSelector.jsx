import { styled } from "styled-components";

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Checkbox = styled.input`
  transform: scale(1.7);
  margin-right: 12px;
  appearance: none;
  width: 14px;
  height: 14px;
  border: 2px solid #c4c4c4;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  &:checked {
    background-color: #ff5160;
    border-color: #ff5160;
  }
  &::after {
    content: "";
    position: absolute;
    left: 3px;
    width: 4px;
    height: 8px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

const DeleteSection = styled.div`
  cursor: pointer;
  &:active {
    color: black;
    font-weight: bold;
  }
`;

function CartSelector({ isChecked, handleCheckboxChange }) {
  return (
    <CheckboxContainer>
      <CheckboxWrapper>
        <Checkbox
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <p>{isChecked ? "전체선택(1/1)" : "전체선택(0/1)"}</p>
      </CheckboxWrapper>
      <DeleteSection>선택삭제</DeleteSection>
    </CheckboxContainer>
  );
}

export default CartSelector;
