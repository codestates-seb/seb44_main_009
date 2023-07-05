//import React from "react";
import { Warm, Cool, RightArrow } from "../../../../image/index"; // 예시로 넣은 이미지
import { Container } from "./Container";
import { Image } from "./Image";
import { Margin } from "./Margin";
import { Text } from "./Text";

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
