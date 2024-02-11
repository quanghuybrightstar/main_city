import ImageBase from "../Image/ImageBase";
import { FlexBetweenStyle, FlexRowStyle } from "../../styles/GlobalStyle.style";
import SrcImage from "../../constants/SrcImage";
import SmartBaseScreen from "../../base/SmartScreenBase";
import { avatarUserLogic } from "./AvatarUser.logic";
import PseudoClick from "../PseudoClick/PseudoClick";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const AvatarUser = () => {
  let { dataUser, handleLogout } = avatarUserLogic();
  return (
    <FlexBetweenStyle>
      <FlexRowStyle>
        <ImageBase
          src={`${SrcImage.SrcSquareScreen}/avtUser.png`}
          alt="Logo Image"
          widthProps={78}
          heightProps={78}
        />
        <FlexRowStyle>
          <div
            className="font_jura"
            style={{
              fontSize: smFontSize * 25,
              marginLeft: baseWidth * 15,
              fontWeight: 500,
            }}
          >
            {dataUser?.name}
          </div>
        </FlexRowStyle>
      </FlexRowStyle>

      <PseudoClick
        onClick={handleLogout}
        styleProps={{
          width: 70 * baseWidth,
          height: 64 * baseWidth,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ImageBase
          src={`${SrcImage.BaseURL}/ico_logout.png`}
          alt="Logout Icon"
          widthProps={45}
          heightProps={45}
        />
      </PseudoClick>
    </FlexBetweenStyle>
  );
};

export default AvatarUser;
