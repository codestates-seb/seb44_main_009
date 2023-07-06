import { QuantityDropdown } from "./styles/QuantityDropdown.styled";

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
