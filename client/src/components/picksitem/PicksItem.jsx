import { styled } from "styled-components";

const PicksItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: absolute;
  font-size: 32px;
  font-weight: 600;
  color: #383838;
  :nth-child(2) {
    font-size: 24px;
    color: #ccc;
  }
`;

function PicksItem() {
  return (
    <PicksItemContainer>
      <div>찜한 상품이 없어요</div>
      <div>하트를 눌러 마음에 드는 상품을 찜해보세요.</div>
    </PicksItemContainer>
  );
}

export default PicksItem;
