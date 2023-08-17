import SmartBaseScreen from "../../base/SmartScreenBase";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight;

const ImageBase = ({
  src,
  alt,
  widthProps,
  heightProps,
  marginProps,
  puzzle,
  borderRadiusProps,
}) => (
  <img
    src={src}
    alt={alt}
    style={{
      width: widthProps * baseWidth,
      height: heightProps * baseWidth,
      margin: marginProps,
      borderRadius: borderRadiusProps,
      borderTopLeftRadius: `${puzzle?.type == "A" && 10 * baseWidth}px`,
      borderTopRightRadius: `${puzzle?.type == "E" && 10 * baseWidth}px`,
      borderBottomLeftRadius: `${puzzle?.type == "F" && 10 * baseWidth}px`,
      borderBottomRightRadius: `${puzzle?.type == "K" && 10 * baseWidth}px`,
    }}
  />
);

export default ImageBase;
