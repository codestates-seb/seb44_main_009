import { useState } from "react";

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

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Updated address:", address);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>배송지 정보</h3>
      <label>
        수령인:
        <input
          type="text"
          name="receiverName"
          value={address.receiverName}
          onChange={handleChange}
        />
      </label>
      <label>
        우편번호:
        <input
          type="text"
          name="zipcode"
          value={address.zipcode}
          onChange={handleChange}
        />
      </label>
      <label>
        주소:
        <input
          type="text"
          name="addressName"
          value={address.addressName}
          onChange={handleChange}
        />
      </label>
      <label>
        상세 주소:
        <input
          type="text"
          name="addressDetails"
          value={address.addressDetails}
          onChange={handleChange}
        />
      </label>
      <label>
        전화번호:
        <input
          type="text"
          name="telNum"
          value={address.telNum}
          onChange={handleChange}
        />
      </label>
      <label>
        요청사항:
        <input
          type="text"
          name="request"
          value={address.request}
          onChange={handleChange}
        />
      </label>
      <button type="submit">변경</button>
    </form>
  );
}

export default DeliveryInfo;
