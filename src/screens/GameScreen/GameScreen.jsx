import SmartBaseScreen from "../../base/SmartScreenBase";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  baseHeight = SmartBaseScreen.smBaseHeight,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const GameScreen = ({ src }) => {
  return (
    <div>
      <iframe
        style={{
          width: 1865 * baseWidth,
          height: 1020 * baseWidth,
        }}
        src={src}
      ></iframe>
    </div>
  );
};

export default GameScreen;
