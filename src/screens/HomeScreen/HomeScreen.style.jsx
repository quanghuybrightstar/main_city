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
  width: ${1920 * baseWidth}px;
  height: ${1030 * baseWidth}px;
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
  top: ${baseWidth * 150}px;
  left: ${baseWidth * 820}px;
`;

// Building
const BuildingContainer = styled(FlexColStyle)`
  position: absolute;
  top: ${baseWidth * 50}px;
  left: ${baseWidth * 1200}px;
`;

// Monopoly
const MonopolyContainer = styled(FlexColStyle)`
  position: absolute;
  top: ${baseWidth * 18}px;
  left: ${baseWidth * 1550}px;
`;

// Wheel
const WheelContainer = styled(FlexColStyle)`
  position: absolute;
  top: ${baseWidth * 625}px;
  left: ${baseWidth * 670}px;
`;

// Square
const SquareContainer = styled(FlexColStyle)`
  position: absolute;
  top: ${baseWidth * 600}px;
  left: ${baseWidth * 1090}px;
`;

// Factory
const FactoryContainer = styled(FlexColStyle)`
  position: absolute;
  top: ${baseWidth * 690}px;
  left: ${baseWidth * 1520}px;
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
