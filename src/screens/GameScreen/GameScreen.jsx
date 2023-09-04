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
          width: 1910 * baseWidth,
          height: 980 * baseWidth,
          border: "none",
        }}
        src={src}
      ></iframe>
    </div>
  );
};

export default GameScreen;
