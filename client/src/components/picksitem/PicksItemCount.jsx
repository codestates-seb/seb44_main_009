import { styled } from "styled-components";

const PicksItemCountWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #ccc;
  font-weight: 600;
`;

function PicksItemCount() {
  return (
    <PicksItemCountWrapper>
      <div>찜한 아이템</div>
      <div>0</div>
    </PicksItemCountWrapper>
  );
}

export default PicksItemCount;
