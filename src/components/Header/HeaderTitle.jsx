import { FlexRowStyle } from "../../styles/GlobalStyle.style";
import SmartBaseScreen from "../../base/SmartScreenBase";
import SrcImage from "../../constants/SrcImage";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const HeaderTitle = ({ marginProps, children }) => {
  return (
    <FlexRowStyle>
      <div
        className="font_jura_bold"
        style={{
          color: "#fff",
          fontSize: smFontSize * 30,
          margin: marginProps,
          textShadow: `1px 1px 1px #333, 0 0 1px #333`,
          background: `url(${`${SrcImage.BaseURL}/bg_title.png`}) no-repeat top
          center / cover`,
          minWidth: 300 * baseWidth,
        }}
      >
        {children}
      </div>
    </FlexRowStyle>
  );
};

export default HeaderTitle;
