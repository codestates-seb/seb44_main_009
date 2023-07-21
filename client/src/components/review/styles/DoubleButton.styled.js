import { styled } from "styled-components";

export const DoubleButton = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  margin-right: 8px;
  border: 1px solid #383838;
  border-radius: ${({ isfirst, ...props }) =>
    isfirst ? "20px 0 0 20px" : props.islast ? "0 20px 20px 0" : "0"};
  background-color: ${({ selected }) => (selected ? "#383838" : "#fff")};
  color: ${({ selected }) => (selected ? "#fff" : "#383838")};
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #383838;
    color: #fff;
    transition: 0.6s;
  }
`;
