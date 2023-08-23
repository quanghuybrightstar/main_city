import { modalLoginLogic } from "./ModalLogin.logic";
import ImageBase from "../Image/ImageBase";
import { FlexColStyle, ErrorText } from "../../styles/GlobalStyle.style";
import SmartBaseScreen from "../../base/SmartScreenBase";
import ColorBase from "../../styles/Color";
import { styled, keyframes, css } from "styled-components";
import SrcImage from "../../constants/SrcImage";

const baseWidth = SmartBaseScreen.smBaseWidth,
  smFontSize = SmartBaseScreen.smFontSize;

const slideInLeft = keyframes`
  from {
    opacity: 0.3;
    transform: translateX(calc( ${-300 * baseWidth}px));
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ModalLoginContainer = styled(FlexColStyle)`
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${661 * baseWidth}px;
  background: url(${`${SrcImage.BaseURL}/modalLogin.png`}) no-repeat top center /
    cover;
  display: ${(props) => props.display};
  animation: ${slideInLeft} linear 0.3s;
  z-index: 999;
`;

const LoginContent = styled(FlexColStyle)`
  align-items: center;
  width: 100%;
  margin-top: ${130 * baseWidth}px;
  position: relative;
`;

const TextError = styled(ErrorText)`
  position: absolute;
  top: ${-50 * baseWidth}px;
  width: ${500 * baseWidth};
`;

export { ModalLoginContainer, LoginContent, TextError };
