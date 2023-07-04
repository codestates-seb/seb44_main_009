//import React from "react";
import { styled } from "styled-components";
import { Warm, Cool, RightArrow } from "../../../image/index"; // 예시로 넣은 이미지

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50px;
`;

const Text = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-left: 10px;
  margin-right: 5px;
`;

const Image = styled.img`
  width: 32px;
  height: 32px;
`;

const Margin = styled.div`
  margin-right: 460px;
`;

export const ColorCategory = ({ imageSrc, altText, labelText }) => {
  return (
    <Container>
      <Image src={imageSrc} alt={altText} />
      <Text>{labelText}</Text>
      <Margin />

      <Text> 전체보기 </Text>
      <Image src={RightArrow} alt="전체보기" />
    </Container>
  );
};

export const WarmToneCategory = () => {
  return (
    <ColorCategory imageSrc={Warm} altText="웜톤 이미지" labelText="웜톤" />
  );
};

export const CoolToneCategory = () => {
  return (
    <ColorCategory imageSrc={Cool} altText="쿨톤 이미지" labelText="쿨톤" />
  );
};
