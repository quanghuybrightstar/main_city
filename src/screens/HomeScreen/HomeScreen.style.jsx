/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import SmartBaseScreen from "../../base/SmartScreenBase";
import {
  FlexBetweenStyle,
  FlexColStyle,
  FlexRowStyle,
} from "../../styles/GlobalStyle.style";
import SrcImage from "../../constants/SrcImage";
import ImageBase from "../../components/Image/ImageBase";
import ButtonBase from "../../components/Button/Button";
import { styled, keyframes } from "styled-components";

SmartBaseScreen.baseSetup();
let baseWidth = SmartBaseScreen.smBaseWidth,
  baseHeight = SmartBaseScreen.smBaseHeight,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

// window.addEventListener("resize", () => {
//   baseWidth = SmartBaseScreen.smBaseWidth;
// });

// console.log(baseWidth);

const rotated = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(359deg);
}
`;

const translateImgLeft = keyframes`
0% {
  transform: rotate(-10deg);
}
100% {
  transform: rotate(-25deg);
}
`;

const translateImgLeft2 = keyframes`
from { 
  transform: rotate(10deg);
}
to { 
  transform: rotate(40deg);
}
`;

const translateImgLight = keyframes`
100% {
  opacity: 1;
  transform: rotate(0deg);
}
// 70% {
//   opacity: 0;
//   transform: rotate(0deg);
// }
0% {
  opacity: 0;
  transform: rotate(-30deg);
}
`;
const translateImgRight = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(-40deg);
}
`;

const translateImgRight2 = keyframes`
from {
  transform: rotate(0deg);
}
to {

  transform: rotate(61deg);
}
`;
const translateImgRight3 = keyframes`
from {
  transform: rotate(0deg);
}
to {

  transform: rotate(30deg);
}
`;

const HomeStyleContainer = styled(FlexBetweenStyle)`
  background: url(${`${SrcImage.SrcHomeScreen}/bgHome.png`}) no-repeat top
    center / cover;
  width: ${1910 * baseWidth}px;
  height: ${1010 * baseWidth}px;
  position: relative;
`;

const TextBtn = styled.div`
  font-size: ${smFontSize * 30}px;
  color: white;
  text-align: center;
`;

// Left Container
const LeftStyleContainer = styled(FlexColStyle)`
  margin-top: ${-baseWidth * 120}px;
  align-items: center;
`;

const HeaderLogoContainer = styled(FlexRowStyle)`
  // padding-left: ${120 * baseWidth}px;
  margin-bottom: ${30 * baseWidth}px;
`;

const ImgTitleContainer = styled.div`
  padding-bottom: ${20 * baseWidth}px;
  padding-left: ${10 * baseWidth}px;
`;
const BoxText = styled.div`
  padding: ${20 * baseWidth}px ${15 * baseWidth}px;
  border-radius: ${10 * baseWidth}px;
  // margin: ${50 * baseWidth}px 0 ${30 * baseWidth}px ${120 * baseWidth}px;
  width: ${400 * baseWidth}px;
  background: rgba(0, 0, 0, 0.3);
`;

// Right Container
const RightStyleContainer = styled(FlexColStyle)`
  flex: 1;
`;

// Racer
const RacerContainer = styled(FlexColStyle)`
  position: absolute;
  top: ${baseWidth * 110}px;
  left: ${baseWidth * 800}px;
  align-items: center;
`;

// Building
const BuildingContainer = styled(FlexColStyle)`
  position: absolute;
  top: ${baseWidth * 30}px;
  left: ${baseWidth * 1190}px;
  align-items: center;
`;

// Monopoly
const MonopolyContainer = styled(FlexColStyle)`
  position: absolute;
  top: ${baseWidth * 5}px;
  left: ${baseWidth * 1540}px;
  align-items: center;
`;

// Wheel
const WheelContainer = styled(FlexColStyle)`
  position: absolute;
  top: ${baseWidth * 600}px;
  left: ${baseWidth * 684}px;
  align-items: center;
`;

// Square
const SquareContainer = styled(FlexColStyle)`
  position: absolute;
  top: ${baseWidth * 580}px;
  left: ${baseWidth * 1080}px;
  align-items: center;
`;

// Factory
const FactoryContainer = styled(FlexColStyle)`
  position: absolute;
  top: ${baseWidth * 660}px;
  left: ${baseWidth * 1550}px;
  align-items: center;
`;

// Wheel Rotate
const WheelRotate = styled.div`
  animation: ${rotated} 5s infinite linear;
  transform-origin: ${81 * baseWidth}px ${81 * baseWidth}px;
  z-index: 9;
`;

// FactoryLeft2
const FactoryLeft2 = styled.div`
  animation: ${translateImgLeft} 1s infinite ease-in-out;
  transform-origin: ${0 * baseWidth}px ${70 * baseWidth}px;
  animation-direction: alternate;
  z-index: 8;
  // animation-delay: 1s;
`;
const FactoryLeft3 = styled.div`
  animation: ${translateImgLeft2} 1s infinite ease-in-out;
  transform-origin: ${10 * baseWidth}px ${40 * baseWidth}px;
  animation-direction: alternate;
  zindex: -1;
  position: relative;
  z-index: -2;
  left: ${43 * baseWidth}px;
  top: ${-110 * baseWidth}px;
  // animation-delay: 1s;
`;

// Factory Lighte
const FactoryLight = styled.span`
  animation: ${translateImgLight} 4.6s infinite ease-in-out;
  // transform-origin: ${0 * baseWidth}px ${60 * baseWidth}px;
`;

// Factory Right
const FactoryRight1 = styled.div`
  animation: ${translateImgRight} 1.2s infinite ease-in-out;
  transform-origin: ${32 * baseWidth}px ${73 * baseWidth}px;
  animation-direction: alternate;
  z-index: 8;
  // animation-delay: 1s;
  z-index: 1;
  animation-fill-mode: forwards;
`;

const FactoryRight2 = styled.div`
  animation: ${translateImgRight2} 1.2s infinite ease-in-out;
  transform-origin: ${55 * baseWidth}px ${55 * baseWidth}px;
  position: absolute;
  animation-direction: alternate;
  top: ${-34 * baseWidth}px;
  right: ${14 * baseWidth}px;
  // animation-delay: 1s;
  z-index: -1;
`;
const FactoryRight3 = styled.div`
  // animation: ${translateImgRight3} 3s infinite ease-in-out;
  transform-origin: ${67 * baseWidth}px ${70 * baseWidth}px;
  position: absolute;
  animation-direction: alternate;
  top: ${-5 * baseWidth}px;
  right: ${50 * baseWidth}px;
  z-index: -1;
`;

export {
  rotated,
  HomeStyleContainer,
  ImgTitleContainer,
  BoxText,
  HeaderLogoContainer,
  LeftStyleContainer,
  RightStyleContainer,
  RacerContainer,
  TextBtn,
  BuildingContainer,
  MonopolyContainer,
  WheelContainer,
  SquareContainer,
  FactoryContainer,
  WheelRotate,
  FactoryLeft2,
  FactoryLight,
  FactoryLeft3,
  FactoryRight1,
  FactoryRight2,
  FactoryRight3,
};
