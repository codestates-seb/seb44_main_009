//   ---- 탭 스타일
import { TabCotainer, TabButton } from "./TabStyle";
/*  탭 */

export const ProductPublicTab = () => {
  return (
    <TabCotainer>
      <TabButton onClick={() => this.openTab("product-info")}>
        상품정보
      </TabButton>
      <TabButton onClick={() => this.openTab("reviews")}>리뷰</TabButton>
      <TabButton onClick={() => this.openTab("contact")}>문의하기</TabButton>
    </TabCotainer>
  );
};
