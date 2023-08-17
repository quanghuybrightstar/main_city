/* eslint-disable no-unused-vars */
import SmartBaseScreen from "../../base/SmartScreenBase";
import {
  FlexBetweenStyle,
  FlexColStyle,
  FlexRowStyle,
  FlexEvenlyStyle,
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

const BuildingContainer = styled(FlexBetweenStyle)`
  background: url(${`${SrcImage.BaseURL}/bgSide.png`}) no-repeat top center /
    cover;
  width: ${1915 * baseWidth}px;
  height: ${1030 * baseWidth}px;
  position: relative;
`;

const ContentRightBuilding = styled(FlexColStyle)`
  margin: 0 ${80 * baseWidth}px;
  margin-top: ${65 * baseWidth}px;
  position: relative;
`;

const FilterRight = styled(FlexRowStyle)`
  justify-content: flex-end;
`;

const FilterItem = styled(FlexRowStyle)`
  margin: 0 ${baseWidth * 10}px ${baseWidth * 50}px ${baseWidth * 50}px;
  position: relative;
`;

// List Voucher
const ListVouchers = styled(FlexRowStyle)`
  flex-wrap: wrap;
  margin-left: ${baseWidth * 20}px;
`;

export {
  BuildingContainer,
  ContentRightBuilding,
  FilterRight,
  FilterItem,
  ListVouchers,
};
