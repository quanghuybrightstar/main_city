import { FlexRowStyle } from "../../styles/GlobalStyle.style";
import SmartBaseScreen from "../../base/SmartScreenBase";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const HeaderTitle = ({ marginProps, children }) => {
  return (
    <FlexRowStyle>
      <div
        style={{
          color: "#fff",
          fontSize: smFontSize * 30,
          margin: marginProps,
        }}
      >
        {children}
      </div>
    </FlexRowStyle>
  );
};

export default HeaderTitle;
