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
  objectFitProps,
}) => (
  <img
    src={src}
    alt={alt}
    style={{
      width: widthProps * baseWidth,
      height: heightProps * baseWidth,
      margin: marginProps,
      borderRadius: borderRadiusProps,
      objectFit: objectFitProps,
      borderTopLeftRadius: `${puzzle?.item_name == "A" && 10 * baseWidth}px`,
      borderTopRightRadius: `${puzzle?.item_name == "E" && 10 * baseWidth}px`,
      borderBottomLeftRadius: `${puzzle?.item_name == "F" && 10 * baseWidth}px`,
      borderBottomRightRadius: `${
        puzzle?.item_name == "K" && 10 * baseWidth
      }px`,
    }}
  />
);

export default ImageBase;
