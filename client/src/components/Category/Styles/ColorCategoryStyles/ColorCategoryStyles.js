//import React from "react";
import { RightArrow } from "../../../../image/index"; // 예시로 넣은 이미지
import { Container } from "./Container";
import { Image } from "./Image";
import { Margin } from "./Margin";
import { Text } from "./Text";
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
//import { dummyproducts } from "../../../../dummyDate/dummyProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

export const ColorCategory = ({ labelText, iconColor, ToneSlug }) => {
  return (
    <Container>
      <FontAwesomeIcon
        icon={faPalette}
        style={{ color: iconColor, fontSize: "24px" }}
      />
      <Text>{labelText}</Text>
      <Margin />

      <Text> 전체보기 </Text>
      <Link to={`/products/${ToneSlug}`}>
        <Image src={RightArrow} alt="전체보기" />
      </Link>
    </Container>
  );
};

export const WarmToneCategory = () => {
  return (
    <>
      <ColorCategory labelText="웜톤" iconColor="orange" ToneSlug="WARM_TONE" />
    </>
  );
};

export const CoolToneCategory = () => {
  return (
    <ColorCategory labelText="쿨톤" iconColor="pink" ToneSlug="COOL_TONE" />
  );
};
