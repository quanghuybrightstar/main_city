import SmartBaseScreen from "../../base/SmartScreenBase";
import ColorBase from "../../styles/Color";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight;

const ButtonBase = ({
  widthProps,
  heightProps,
  onClick,
  bgColorProps,
  borderProps,
  children,
  borderRadiusProps,
  marginProps,
  disabled,
}) => (
  <button
    disabled={disabled}
    onClick={onClick}
    style={{
      borderRadius: borderRadiusProps || baseWidth * 30,
      width: widthProps * baseWidth || 200 * baseWidth,
      height: heightProps * baseWidth || 65 * baseWidth,
      cursor: "pointer",
      border: borderProps || `1px solid #808080`,
      backgroundColor: bgColorProps || ColorBase.bluePrimary,
      margin: marginProps,
    }}
  >
    {children}
  </button>
);

export default ButtonBase;
