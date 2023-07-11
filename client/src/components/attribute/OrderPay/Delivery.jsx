import DeliveryInfo from "./DeliveryInfo";
import { DeliveryContainerBox } from "./styles/DeliveryContainerBox.styled.js";
import { ChangeButton } from "./styles/ChangeButton.styled.js";

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
