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

const FactoryContainer = styled(FlexBetweenStyle)`
  background: url(${`${SrcImage.BaseURL}/bgSide.png`}) no-repeat top center /
    cover;
  width: ${1915 * baseWidth}px;
  height: ${1030 * baseWidth}px;
  position: relative;
`;

const BoxRightHeader = styled(FlexRowStyle)``;

const ListGift = styled(FlexColStyle)`
  padding-top: ${baseWidth * 20}px;
`;

const BoxPuzzle = styled(FlexRowStyle)`
  flex-wrap: wrap;
  width: ${baseWidth * 665}px;
`;

const PuzzleName = styled.div`
  font-size: ${smFontSize * 32}px;
  color: #ffcc00;
  text-align: center;
  width: ${baseWidth * 50}px;
  margin-top: ${-22 * baseWidth}px;
`;

const PuzzleCount = styled.div`
  font-size: ${smFontSize * 18}px;
  text-shadow: 2px 2px 5px black, 0 0 2px black, 0 0 2px black, 0 0 2px black,
    0 0 2px black;
  color: #f2f2f2;
  z-index: 9;
`;

const FrameBottom = styled.div`
  position: absolute;
  bottom: ${15 * baseWidth}px;
`;

export {
  FactoryContainer,
  BoxRightHeader,
  ListGift,
  BoxPuzzle,
  FrameBottom,
  PuzzleName,
  PuzzleCount,
};
