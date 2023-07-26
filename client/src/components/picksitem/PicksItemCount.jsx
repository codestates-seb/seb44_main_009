import { PicksItemCountWrapper } from "./styles/PicksItemCountWrapper.styled";

function PicksItemCount({ products }) {
  return (
    <PicksItemCountWrapper>
      <div>찜한 아이템</div>
      <div>{products}</div>
    </PicksItemCountWrapper>
  );
}

export default PicksItemCount;
