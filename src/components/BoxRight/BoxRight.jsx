import ImageBase from "../Image/ImageBase";
import { FlexRowStyle, BaseTitleGame } from "../../styles/GlobalStyle.style";
import SrcImage from "../../constants/SrcImage";
import SmartBaseScreen from "../../base/SmartScreenBase";
import { Link } from "react-router-dom";
import ColorBase from "../../styles/Color";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const BoxRight = ({ handleNavigate, children }) => {
  return (
    <FlexRowStyle>
      <div
        style={{
          cursor: "pointer",
          fontSize: smFontSize * 60,
          lineHeight: smFontSize * 0,
          color: ColorBase.yellowPrimary,
          margin: `0 ${baseWidth * 25}px ${baseWidth * 16}px 0`,
        }}
        onClick={() => handleNavigate()}
      >
        +
      </div>
      <BaseTitleGame>{children}</BaseTitleGame>
    </FlexRowStyle>
  );
};

export default BoxRight;
