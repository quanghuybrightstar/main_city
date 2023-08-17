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

const BoxBorderPuzzle = styled.div`
  border: 1px solid ${(props) => props.borderColorProps};
  border-radius: ${10 * baseWidth}px;
  width: ${(props) => props.widthBoxProps * baseWidth}px;
  height: ${(props) => props.heightBoxProps * baseWidth}px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: ${(props) => props.marginBoxProps};
`;

const TextTypePuzzle = styled.div`
  font-size: ${28 * smFontSize}px;
  position: absolute;
  bottom: ${-18 * baseWidth}px;
  padding: ${3 * baseWidth}px ${7 * baseWidth}px;
  border-radius: ${8 * baseWidth}px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.borderColorProps};
  text-align: center;
  width: ${20 * baseWidth}px;
  height: ${26 * baseWidth}px;
  color: #333;
`;

export { BoxBorderPuzzle, TextTypePuzzle };
