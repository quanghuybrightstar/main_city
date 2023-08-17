
import { loginScreenLogic } from "./LoginScreen.logic";
import SmartBaseScreen from "../../base/SmartScreenBase";
import ColorBase from "../../styles/Color";
import ButtonBase from "../../components/Button/Button";

SmartBaseScreen.baseSetup();

let baseWidth = SmartBaseScreen.smBaseWidth,
  baseHeight = SmartBaseScreen.smBaseHeight,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const LoginScreen = (props) => {
  let { handleLogin } = loginScreenLogic(props);

  return (
    <div>
      <ButtonBase
        borderRadiusProps={50 * baseWidth}
        widthProps={240}
        heightProps={90}
        onClick={() => handleLogin()}
        bgColorProps={ColorBase.bluePrimary}
        marginProps={`${30 * baseWidth}px 0`}
      >
        <div
          style={{
            fontSize: 50 * smFontSize,
          }}
        >
          Login
        </div>
      </ButtonBase>
    </div>
  );
};

export default LoginScreen;
