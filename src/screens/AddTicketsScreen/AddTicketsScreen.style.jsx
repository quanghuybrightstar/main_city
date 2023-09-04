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
  smFontSize = SmartBaseScreen.smFontSize;

const AddTicketsContainer = styled(FlexBetweenStyle)`
  background: url(${`${SrcImage.BaseURL}/bgSide.png`}) no-repeat top center /
    cover;
  width: ${1895 * baseWidth}px;
  height: ${985 * baseWidth}px;
  overflow-y: hidden;
`;

const TextBtnMission = styled.div`
  font-size: ${smFontSize * 18}px;
  color: white;
  text-align: center;
`;

// List Missions
const ListMissions = styled(FlexRowStyle)`
  flex-wrap: wrap;
  position: relative;
  behavior: smooth;

  overflow-y: scroll; /* width */
  max-height: ${340 * baseWidth}px;
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

// Buy Tickets
const BuyTicketsList = styled(FlexEvenlyStyle)`
  margin-top: ${baseWidth * 40}px;
  flex-wrap: wrap;
  position: relative;
  behavior: smooth;

  overflow-y: scroll; /* width */
  max-height: ${240 * baseWidth}px;
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
