import { useState } from "react";
import { styled } from "styled-components";

const DeliveryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 12px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
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
        <Input
          type="text"
          name="request"
          value={address.request}
          onChange={handleChange}
        />
      </Label>
    </DeliveryInfoContainer>
  );
}

export default DeliveryInfo;
