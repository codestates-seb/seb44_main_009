import { DeliveryInfoContainer } from "./styles/DeliveryInfoContainer.styled.js";
import { Label } from "./styles/Label.styled.js";
import { Select } from "./styles/Select.styled.js";
import { Input } from "./styles/Input.styled.js";

function DeliveryInfo({ address, handleChangeAddress }) {
  const handleChange = e => {
    const { name, value } = e.target;
    handleChangeAddress({ [name]: value });
  };

  return (
    <DeliveryInfoContainer>
      <h3>배송지 정보</h3>
      <Label>
        이름
        <Input
          type="text"
          name="receiverName"
          value={address.receiverName}
          onChange={handleChange}
        />
      </Label>
      <Label>
        우편번호
        <Input
          type="text"
          name="zipcode"
          value={address.zipcode}
          onChange={handleChange}
        />
      </Label>
      <Label>
        주소
        <Input
          type="text"
          name="addressName"
          value={address.addressName}
          onChange={handleChange}
        />
      </Label>
      <Label>
        상세 주소
        <Input
          type="text"
          name="addressDetails"
          value={address.addressDetails}
          onChange={handleChange}
        />
      </Label>
      <Label>
        전화번호
        <Input
          type="text"
          name="telNum"
          value={address.telNum}
          onChange={handleChange}
        />
      </Label>
      <Label>
        요청사항
        <Select name="request" value={address.request} onChange={handleChange}>
          <option value="">선택하세요</option>
          <option value="배송 전, 연락주세요.">배송 전, 연락주세요.</option>
          <option value="빠른 배송 부탁드립니다.">
            빠른 배송 부탁드립니다.
          </option>
          <option value="부재 시, 경비실에 맡겨주세요.">
            부재 시, 경비실에 맡겨주세요.
          </option>
        </Select>
      </Label>
    </DeliveryInfoContainer>
  );
}

export default DeliveryInfo;
