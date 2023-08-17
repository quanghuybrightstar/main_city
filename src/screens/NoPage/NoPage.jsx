import SmartBaseScreen from "../../base/SmartScreenBase";
import SrcImage from "../../constants/SrcImage";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  baseHeight = SmartBaseScreen.smBaseHeight,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const NoPage = ({props}) => {
  return (
    <div
      style={{
        background: `url(${`${SrcImage.SrcNoPageScreen}/bgNoPage.jpg`}) no-repeat top
    center / cover`,
        width: 1920 * baseWidth,
        height: 1030 * baseWidth,
      }}
    />
  );
};

export default NoPage;
