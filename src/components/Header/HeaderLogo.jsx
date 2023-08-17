import ImageBase from "../Image/ImageBase";
import { FlexRowStyle } from "../../styles/GlobalStyle.style";
import SrcImage from "../../constants/SrcImage";
import SmartBaseScreen from "../../base/SmartScreenBase";
import { Link } from "react-router-dom";
import ColorBase from "../../styles/Color";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const HeaderLogo = () => {
  return (
    <FlexRowStyle>
      <Link to="/home">
        <ImageBase
          src={`${SrcImage.BaseURL}/logo.png`}
          alt="Logo Image"
          widthProps={71}
          heightProps={71}
        />
      </Link>
      <FlexRowStyle>
        <h2
          style={{
            fontSize: smFontSize * 40,
            marginLeft: baseWidth * 10,
            marginRight: baseWidth * 10,
            fontWeight: 500,
          }}
        >
          DEMO
        </h2>
        <h2
          style={{
            fontSize: smFontSize * 40,
            color: ColorBase.yellowPrimary,
            fontWeight: 500,
          }}
        >
          COMPANY
        </h2>
      </FlexRowStyle>
    </FlexRowStyle>
  );
};

export default HeaderLogo;
