import { InquiryMargin, InquiryguideCenterBox100 } from "./InquiryguideBox";
import { LeftMargin, TextDiv18Style } from "./InquiryText";

import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const InfoIcon = styled(FontAwesomeIcon)`
  /* Styles for the icon */
  width: 24px;
  height: 24px;
`;

export const DeliveryInquiry = () => {
  return (
    <InquiryguideCenterBox100>
      <InquiryMargin>
        <TextDiv18Style>
          배송 / 결제 / 교환 / 반품 안내 <LeftMargin />
          <InfoIcon icon={faEye} />
        </TextDiv18Style>
      </InquiryMargin>
    </InquiryguideCenterBox100>
  );
};
