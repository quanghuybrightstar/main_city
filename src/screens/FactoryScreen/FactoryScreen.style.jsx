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
  width: ${1895 * baseWidth}px;
  height: ${985 * baseWidth}px;
  position: relative;
  overflow-y: hidden;
`;

const BoxRightHeader = styled(FlexRowStyle)``;

const ListGift = styled(FlexColStyle)`
  padding-top: ${baseWidth * 20}px;
  max-height: ${730 * baseWidth}px;
  overflow-y: scroll; /* width */
  behavior: smooth;
  &::-webkit-scrollbar {
    width: ${12 * baseWidth}px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    // background: rgba(0, 0, 0, 0.3);
    border-radius: ${12 * baseWidth}px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #ffff00;
    border-radius: ${12 * baseWidth}px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #e6e600;
  }
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
