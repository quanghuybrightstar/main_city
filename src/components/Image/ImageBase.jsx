import SmartBaseScreen from "../../base/SmartScreenBase";
import LazyLoad from "react-lazyload";

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
  transformProps,
  zIndexProps,
  styleProps,
  classNameProps,
}) => (
  <img
    loading="lazy"
    src={src}
    alt={alt}
    style={{
      transform: transformProps,
      width: widthProps * baseWidth,
      height: heightProps * baseWidth,
      margin: marginProps,
      borderRadius: borderRadiusProps,
      objectFit: objectFitProps || "contain",
      borderTopLeftRadius: `${puzzle?.item_name == "A" && 10 * baseWidth}px`,
      borderTopRightRadius: `${puzzle?.item_name == "E" && 10 * baseWidth}px`,
      borderBottomLeftRadius: `${puzzle?.item_name == "F" && 10 * baseWidth}px`,
      borderBottomRightRadius: `${
        puzzle?.item_name == "K" && 10 * baseWidth
      }px`,
      zIndex: zIndexProps,
      ...styleProps,
    }}
    className={classNameProps}
  />
);

export default ImageBase;
