import { QuantityDropdown } from "./styles/QuantityDropdown.styled";

function CartQuantityDropdown({ value, onChange }) {
  const handleQuantityChange = e => {
    onChange(e);
  };

  return (
    <QuantityDropdown value={value} onChange={handleQuantityChange}>
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
