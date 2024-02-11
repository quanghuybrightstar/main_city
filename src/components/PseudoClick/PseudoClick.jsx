import { FlexRowStyle } from "../../styles/GlobalStyle.style";
import { DivButton } from "./PseudoClick.style";

const PseudoClick = ({ onClick, children, onMouseEnter, styleProps }) => (
  <DivButton
    onClick={onClick}
    style={{
      cursor: "pointer",
      position: "relative",
      ...styleProps,
    }}
  >
    <FlexRowStyle>{children}</FlexRowStyle>
  </DivButton>
);

export default PseudoClick;
