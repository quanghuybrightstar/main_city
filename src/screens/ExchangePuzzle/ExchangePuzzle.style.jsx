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

const ExchangeContainer = styled(FlexBetweenStyle)`
  background: url(${`${SrcImage.BaseURL}/bgSide.png`}) no-repeat top center /
    cover;
  width: ${1915 * baseWidth}px;
  height: ${1030 * baseWidth}px;
  position: relative;
`;

const ContentExchange = styled(FlexColStyle)`
  max-height: ${755 * baseWidth}px;
  overflow-y: scroll; /* width */
  &::-webkit-scrollbar {
    width: ${12 * baseWidth}px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.3);
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

const MyExchangeContainer = styled(FlexColStyle)`
  padding-right: ${baseWidth * 50}px;
`;

const ExchangeHeader = styled(FlexBetweenStyle)``;

const MoreExchange = styled(FlexRowStyle)`
  background: url(${`${SrcImage.BaseURL}/borderMore.png`}) no-repeat top center /
    contain;
  width: ${230 * baseWidth}px;
  height: ${60 * baseWidth}px;
  padding-left: ${25 * baseWidth}px;
`;

const ListMyExchange = styled(FlexColStyle)`
  padding: ${baseWidth * 25}px ${20 * baseWidth}px 0 ${baseWidth * 50}px;
`;

const BoxBorderPuzzle = styled.div`
  border: 1px solid #00b3b3;
  border-radius: ${10 * baseWidth}px;
  width: ${94 * baseWidth}px;
  height: ${94 * baseWidth}px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const TextTypePuzzle = styled.div`
  font-size: ${30 * smFontSize}px;
  position: absolute;
  bottom: ${-18 * baseWidth}px;
  padding: ${5 * baseWidth}px ${8 * baseWidth}px;
  border-radius: ${8 * baseWidth}px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00ffff;
  text-align: center;
  width: ${22 * baseWidth}px;
  height: ${30 * baseWidth}px;
  color: #333;
`;

const TextTime = styled(BaseTextSize20)`
  width: ${baseWidth * 120}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const TextBtnShadow = styled(BaseTextSize20)`
  text-shadow: 2px 2px 5px black;
`;

export {
  ExchangeContainer,
  MyExchangeContainer,
  ExchangeHeader,
  MoreExchange,
  BoxBorderPuzzle,
  TextTime,
  ListMyExchange,
  TextBtnShadow,
  TextTypePuzzle,
  ContentExchange,
};
