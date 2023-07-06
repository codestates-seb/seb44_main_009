import { styled } from "styled-components";

const QuantityDropdown = styled.select`
  border: 1px solid #ccc;
  border-radius: 10px;
`;

function CartQuantityDropdown({ value, onChange }) {
  return (
    <QuantityDropdown value={value} onChange={onChange}>
      {Array.from({ length: 100 }, (_, index) => {
        const optionValue = index + 1;
        if (optionValue < 100) {
          return (
            <option key={optionValue} value={optionValue}>
              {optionValue}
            </option>
          );
        }
        return null;
      })}
    </QuantityDropdown>
  );
}

export default CartQuantityDropdown;
