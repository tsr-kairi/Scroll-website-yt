import React from "react";
import { Button } from "../ButtonElements";
import {
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Clumn1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Clumn2,
  ImgWrap,
  Img,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  darkText,
  buttonLabel,
  img,
  alt,
  headline,
  description,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Clumn1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? "1" : "0"}
                    dark={dark ? "1" : "0"}
                    dark2={dark2 ? "1" : "0"}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Clumn1>
            <Clumn2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Clumn2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
