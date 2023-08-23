import SmartBaseScreen from "../../base/SmartScreenBase";
import {
  FlexBetweenStyle,
  FlexColStyle,
  FlexRowStyle,
  FlexEvenlyStyle,
  BaseTitleGame,
  BaseTextSize20,
  BaseTextSize18,
  BaseTextSize38,
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

const MoreExchangeContainer = styled(FlexBetweenStyle)`
  background: url(${`${SrcImage.BaseURL}/bgSide.png`}) no-repeat top center /
    cover;
  width: ${1915 * baseWidth}px;
  height: ${1030 * baseWidth}px;
  position: relative;
`;

const ProcessExchangeContainer = styled(FlexBetweenStyle)`
  justify-content: center;
  margin-top: ${baseWidth * 10}px;
`;

const PuzzleGetContainer = styled(FlexColStyle)`
  align-items: center;
`;

const ListPuzzleAll = styled(FlexRowStyle)`
  flex-wrap: wrap;
  margin-top: ${baseWidth * 10}px;
  margin-left: ${baseWidth * 10}px;
  max-height: ${520 * baseWidth}px;
  overflow-y: scroll; /* width */
  &::-webkit-scrollbar {
    width: ${12 * baseWidth}px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.4);
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

export {
  MoreExchangeContainer,
  ListPuzzleAll,
  ProcessExchangeContainer,
  PuzzleGetContainer,
};
