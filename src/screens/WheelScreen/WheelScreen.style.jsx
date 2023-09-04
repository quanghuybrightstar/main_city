/* eslint-disable no-unused-vars */
import SmartBaseScreen from "../../base/SmartScreenBase";
import {
  FlexBetweenStyle,
  FlexColStyle,
  FlexRowStyle,
  FlexEvenlyStyle,
  BaseTitleGame,
} from "../../styles/GlobalStyle.style";
import SrcImage from "../../constants/SrcImage";
import ImageBase from "../../components/Image/ImageBase";
import ButtonBase from "../../components/Button/Button";
import styled from "styled-components";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  baseHeight = SmartBaseScreen.smBaseHeight,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const WheelContainer = styled(FlexBetweenStyle)`
  background: url(${`${SrcImage.BaseURL}/bgSide.png`}) no-repeat top center /
    cover;
  width: ${1895 * baseWidth}px;
  height: ${985 * baseWidth}px;
  position: relative;
  overflow-y: hidden;
`;

const BoxTickets = styled(FlexColStyle)`
  align-items: center;
  width: ${583 * baseWidth}px;
  height: ${176 * baseWidth}px;
  background: url(${`${SrcImage.BaseURL}/bg_dark_blue.png`}) no-repeat top
    center / cover;
  justify-content: space-evenly;
`;

export { WheelContainer, BoxTickets };
