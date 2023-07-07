import { TextDivStyle } from "./InquiryText";
import { InquiryguideBox } from "./InquiryguideBox";

const fontSize18 = "18px";

export const ProductPublicInquiryEx = () => {
  return (
    <InquiryguideBox height="250px">
      <TextDivStyle TopMargin="20px" BottomMargin="20px">
        문의사항 예시
      </TextDivStyle>
      <TextDivStyle FontSize={fontSize18} BottomMargin="30px">
        Q. 배송은 언제 되나요? - 영업일 기준 13시 이전 결제 주문건 : 당일
        출고됩니다.
      </TextDivStyle>

      <TextDivStyle FontSize={fontSize18} BottomMargin="30px">
        Q. 배송 전 취소 하고 싶어요! - 사이트에서 취소 문의 후 고객센터로 연락
        바랍니다.
      </TextDivStyle>
      <TextDivStyle FontSize={fontSize18} BottomMargin="30px">
        Q. 사이즈가 안맞아요. 교환가능한가요? - 교환요청 후 고객센터로 연락
        바랍니다.
      </TextDivStyle>
    </InquiryguideBox>
  );
};
