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

const HeaderLogo = ({ widthLogo, heightLogo }) => {
  return (
    <FlexRowStyle
      style={{
        margin: `${baseWidth * 30}px 0 ${baseWidth * 15}px`,
      }}
    >
      <Link to="/">
        <ImageBase
          src={`${SrcImage.BaseURL}/logo.png`}
          // src={"https://media-public.canva.com/KIKAo/MADSaIKIKAo/2/t.png"}
          alt="Logo Image"
          widthProps={widthLogo || 78}
          heightProps={heightLogo || 50}
        />
      </Link>
      <FlexRowStyle>
        <h2
          className="font_jura_bold"
          style={{
            fontSize: smFontSize * 40,
            marginLeft: baseWidth * 10,
            marginRight: baseWidth * 10,
            fontWeight: 500,
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          GK
        </h2>
        <h2
          className="font_jura_bold"
          style={{
            fontSize: smFontSize * 40,
            color: ColorBase.yellowPrimary,
            fontWeight: 500,
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          CORPORATION
        </h2>
      </FlexRowStyle>
    </FlexRowStyle>
  );
};

export default HeaderLogo;
