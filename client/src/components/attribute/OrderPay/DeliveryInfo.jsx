import { useState } from "react";
import { styled } from "styled-components";

const DeliveryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 12px;
`;

const Select = styled.select`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

function DeliveryInfo() {
  const [address, setAddress] = useState({
    receiverName: "",
    zipcode: "",
    addressName: "",
    addressDetails: "",
    telNum: "",
    request: "",
  });

  const handleChange = e => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <DeliveryInfoContainer>
      <h3>배송지 정보</h3>
      <Label>
        이름
        <input
          type="text"
          name="receiverName"
          value={address.receiverName}
          onChange={handleChange}
        />
      </Label>
      <Label>
        우편번호
        <input
          type="text"
          name="zipcode"
          value={address.zipcode}
          onChange={handleChange}
        />
      </Label>
      <Label>
        주소
        <input
          type="text"
          name="addressName"
          value={address.addressName}
          onChange={handleChange}
        />
      </Label>
      <Label>
        상세 주소
        <input
          type="text"
          name="addressDetails"
          value={address.addressDetails}
          onChange={handleChange}
        />
      </Label>
      <Label>
        전화번호
        <input
          type="text"
          name="telNum"
          value={address.telNum}
          onChange={handleChange}
        />
      </Label>
      <Label>
        <Select name="request" value={address.request} onChange={handleChange}>
          <option value="">선택하세요</option>
          <option value="배송 시 요청사항 1">배송 전, 연락주세요.</option>
          <option value="배송 시 요청사항 2">빠른 배송 부탁드립니다.</option>
          <option value="배송 시 요청사항 3">
            부재 시, 경비실에 맡겨주세요.
          </option>
        </Select>
      </Label>
    </DeliveryInfoContainer>
  );
}

export default DeliveryInfo;
