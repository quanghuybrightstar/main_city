import ImageBase from "../Image/ImageBase";
import { FlexRowStyle, FlexColStyle } from "../../styles/GlobalStyle.style";
import SrcImage from "../../constants/SrcImage";
import SmartBaseScreen from "../../base/SmartScreenBase";
import PseudoClick from "../PseudoClick/PseudoClick";
import styled from "styled-components";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

// Left Square
const MenuContainer = styled(FlexColStyle)`
  background: url(${`${SrcImage.BaseURL}/bgLeft.png`}) no-repeat top center /
    cover;
  width: ${580 * baseWidth}px;
  height: ${1030 * baseWidth}px;
  margin-left: ${50 * baseWidth}px;
`;

const ListSelection = styled(FlexColStyle)`
  margin-top: ${2 * baseWidth}px;

  overflow-y: scroll; /* width */
  max-height: ${685 * baseWidth}px;
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

const ContentSlection = styled(FlexColStyle)`
  margin-left: ${15 * baseWidth}px;
  // margin-top: ${15 * baseWidth}px;
  justify-content: center;
`;

const DetailSelection = styled(FlexRowStyle)`
  font-size: ${smFontSize * 18}px;
`;

const TextBtnSmall = styled.div`
  font-size: ${smFontSize * 16}px;
  color: white;
  text-align: center;
  width: 100%;
`;

const BtnNext = styled(PseudoClick)``;

const TextUnderline = styled.div`
  text-decoration-line: underline;
  margin-left: ${4 * baseWidth}px;
`;

export {
  MenuContainer,
  TextBtnSmall,
  ListSelection,
  ContentSlection,
  DetailSelection,
  BtnNext,
  TextUnderline,
};
