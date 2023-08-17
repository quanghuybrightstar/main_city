/* eslint-disable no-unused-vars */
import SmartBaseScreen from "../../base/SmartScreenBase";
import {
  FlexBetweenStyle,
  FlexColStyle,
  FlexRowStyle,
} from "../../styles/GlobalStyle.style";
import SrcImage from "../../constants/SrcImage";
import styled from "styled-components";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  baseHeight = SmartBaseScreen.smBaseHeight,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const SquareStyleContainer = styled(FlexBetweenStyle)`
  background: url(${`${SrcImage.BaseURL}/bgSide.png`}) no-repeat top center /
    cover;
  width: ${1915 * baseWidth}px;
  height: ${1030 * baseWidth}px;
`;

const BoxContainer = styled(FlexBetweenStyle)`
  background: rgba(0, 0, 0, 0.35);
  width: ${430 * baseWidth}px;
  height: ${45 * baseWidth}px;
  border-radius: ${30 * baseWidth}px;
  padding: 0 ${7 * baseWidth}px;
`;

const TextBtnColor = ({ colorProps, children }) => (
  <div
    style={{
      color: colorProps,
      fontSize: smFontSize * 16,
      textAlign: "center",
    }}
  >
    {children}
  </div>
);

const TextBtnColorStyle = styled(TextBtnColor)``;

// Content Right
const ContentRightContainer = styled(FlexColStyle)`
  align-items: center;
  margin: 0 ${65 * baseWidth}px;
  margin-top: ${50 * baseWidth}px;
  position: relative;
`;

const InforTopRank = styled(FlexRowStyle)`
  position: absolute;
  top: 0;
`;

const RankSecondContainer = styled(FlexColStyle)`
  align-items: center;
  margin: ${30 * baseWidth}px 0 0 ${35 * baseWidth}px;
`;

const RankFirstContainer = styled(FlexColStyle)`
  align-items: center;
  margin: ${-50 * baseWidth}px 0 0 ${48 * baseWidth}px;
`;

const RankThirdContainer = styled(FlexColStyle)`
  align-items: center;
  margin: ${75 * baseWidth}px 0 0 ${48 * baseWidth}px;
`;

const NameUserRank = styled.div`
  color: #fff;
  font-size: ${smFontSize * 16}px;
  line-height: ${smFontSize * 18}px;
`;

const NumOfDiamond = styled.div`
  color: #ffcc00;
  font-size: ${smFontSize * 19}px;
  line-height: ${smFontSize * 22}px;
`;

// Item Rank Lower
const ListRankLower = styled(FlexColStyle)`
  margin-top: ${5 * baseWidth}px;
`;

const IconArrowRight = styled(FlexRowStyle)`
  position: absolute;
  right: ${-38 * baseWidth}px;
`;

const IconArrowLeft = styled(FlexRowStyle)`
  position: absolute;
  left: ${-38 * baseWidth}px;
`;

export {
  SquareStyleContainer,
  BoxContainer,
  TextBtnColorStyle,
  ContentRightContainer,
  InforTopRank,
  RankSecondContainer,
  RankFirstContainer,
  RankThirdContainer,
  NameUserRank,
  NumOfDiamond,
  ListRankLower,
  IconArrowRight,
  IconArrowLeft,
};