import { TextDiv24Style, TextDiv18Style } from "./InquiryText";
import { InquiryguideBox } from "./InquiryguideBox";

export const ProductPublicInquiryEx = () => {
  return (
    <InquiryguideBox>
      <TextDiv24Style>문의사항 예시</TextDiv24Style>
      <TextDiv18Style>
        Q. 배송은 언제 되나요? - 영업일 기준 13시 이전 결제 주문건 : 당일
        출고됩니다.
      </TextDiv18Style>

      <TextDiv18Style>
        Q. 배송 전 취소 하고 싶어요! - 사이트에서 취소 문의 후 고객센터로 연락
        바랍니다.
      </TextDiv18Style>
      <TextDiv18Style>
        Q. 사이즈가 안맞아요. 교환가능한가요? - 교환요청 후 고객센터로 연락
        바랍니다.
      </TextDiv18Style>
    </InquiryguideBox>
  );
};
