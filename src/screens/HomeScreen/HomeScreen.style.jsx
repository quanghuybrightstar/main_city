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
import styled from "styled-components";

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

const HomeStyleContainer = styled(FlexBetweenStyle)`
  background: url(${`${SrcImage.SrcHomeScreen}/bgHome.png`}) no-repeat top
    center / cover;
  width: ${1910 * baseWidth}px;
  height: ${990 * baseWidth}px;
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
`;

const HeaderLogoContainer = styled(FlexRowStyle)`
  padding-left: ${120 * baseWidth}px;
  margin-bottom: ${30 * baseWidth}px;
`;

const BoxText = styled.div`
  padding: ${20 * baseWidth}px ${15 * baseWidth}px;
  border-radius: ${10 * baseWidth}px;
  margin: ${50 * baseWidth}px 0 ${30 * baseWidth}px ${120 * baseWidth}px;
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
  left: ${baseWidth * 810}px;
`;

// Building
const BuildingContainer = styled(FlexColStyle)`
  position: absolute;
  top: ${baseWidth * 30}px;
  left: ${baseWidth * 1190}px;
`;

// Monopoly
const MonopolyContainer = styled(FlexColStyle)`
  position: absolute;
  top: ${baseWidth * 5}px;
  left: ${baseWidth * 1540}px;
`;

// Wheel
const WheelContainer = styled(FlexColStyle)`
  position: absolute;
  top: ${baseWidth * 590}px;
  left: ${baseWidth * 660}px;
`;

// Square
const SquareContainer = styled(FlexColStyle)`
  position: absolute;
  top: ${baseWidth * 580}px;
  left: ${baseWidth * 1080}px;
`;

// Factory
const FactoryContainer = styled(FlexColStyle)`
  position: absolute;
  top: ${baseWidth * 660}px;
  left: ${baseWidth * 1515}px;
`;

export {
  HomeStyleContainer,
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
};
