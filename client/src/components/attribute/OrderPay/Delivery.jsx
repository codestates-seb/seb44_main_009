import { styled } from "styled-components";
import DeliveryInfo from "./DeliveryInfo";

const DeliveryContainerBox = styled.div`
  border: 1px solid #383838;
  border-radius: 12px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
  > div {
    flex: 1;
  }
`;

const ChangeButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background-color: ${({ editAddress }) => (editAddress ? "gray" : "#383838")};
  color: ${({ editAddress }) => (editAddress ? "#383838" : "#fff")};
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: gray;
    color: #fff;
  }
`;

function Delivery({
  editAddress,
  address,
  handleChangeAddress,
  toggleEditAddress,
}) {
  return (
    <DeliveryContainerBox>
      {address && editAddress ? (
        <DeliveryInfo
          address={address}
          handleChangeAddress={handleChangeAddress}
        />
      ) : (
        <div>
          <h3>배송지 정보</h3>
          <p>이름 {address.receiverName}</p>
          <p>우편번호 {address.zipcode}</p>
          <p>주소 {address.addressName}</p>
          <p>상세 주소 {address.addressDetails}</p>
          <p>전화번호 {address.telNum}</p>
          <p>요청사항 {address.request}</p>
        </div>
      )}
      <ChangeButton onClick={toggleEditAddress}>
        {editAddress ? "완료" : "변경"}
      </ChangeButton>
    </DeliveryContainerBox>
  );
}

export default Delivery;
