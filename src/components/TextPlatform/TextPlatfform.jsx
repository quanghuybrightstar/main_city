import ImageBase from "../Image/ImageBase";
import {
  FlexRowStyle,
  FlexBetweenStyle,
  FlexColStyle,
  RemainText,
  BaseTextSize38,
} from "../../styles/GlobalStyle.style";
import SmartBaseScreen from "../../base/SmartScreenBase";
import ColorBase from "../../styles/Color";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const TextPlatform = ({ topProps, leftProps, widthProps, children }) => {
  return (
    <div
      style={{
        fontSize: smFontSize * 20,
        color: ColorBase.yellowPrimary,
        fontWeight: 500,
        width: widthProps * baseWidth || baseWidth * 150,
        textAlign: "center",
        position: "absolute",
        top: topProps * baseWidth,
        left: leftProps * baseWidth || baseWidth * 80,
      }}
    >
      {children}
    </div>
  );
};

export default TextPlatform;
