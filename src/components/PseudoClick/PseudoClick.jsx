import { FlexRowStyle } from "../../styles/GlobalStyle.style";

const PseudoClick = ({ onClick, children }) => (
  <div
    onClick={onClick}
    style={{
      cursor: "pointer",
      position: "relative",
    }}
  >
    <FlexRowStyle>{children}</FlexRowStyle>
  </div>
);

export default PseudoClick;
