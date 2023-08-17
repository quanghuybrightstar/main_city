/* eslint-disable no-unused-vars */
import SmartBaseScreen from "../../base/SmartScreenBase";
import {
  FlexBetweenStyle,
  FlexColStyle,
  FlexRowStyle,
  FlexEvenlyStyle,
} from "../../styles/GlobalStyle.style";
import SrcImage from "../../constants/SrcImage";
import styled from "styled-components";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  baseHeight = SmartBaseScreen.smBaseHeight,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const AddTicketsContainer = styled(FlexBetweenStyle)`
  background: url(${`${SrcImage.BaseURL}/bgSide.png`}) no-repeat top center /
    cover;
  width: ${1915 * baseWidth}px;
  height: ${1030 * baseWidth}px;
`;

const TextBtnMission = styled.div`
  font-size: ${smFontSize * 18}px;
  color: white;
  text-align: center;
`;

// List Missions
const ListMissions = styled(FlexRowStyle)`
  flex-wrap: wrap;
`;

// Buy Tickets
const BuyTicketsList = styled(FlexEvenlyStyle)`
  margin-top: ${baseWidth * 40}px;
`;

const BuyInforHeader = styled(FlexRowStyle)``;

const BuyContent = styled(FlexBetweenStyle)`
  margin-top: ${baseWidth * 15}px;
  height: ${baseWidth * 90}px;
`;

export {
  AddTicketsContainer,
  TextBtnMission,
  ListMissions,
  BuyTicketsList,
  BuyInforHeader,
  BuyContent,
};
