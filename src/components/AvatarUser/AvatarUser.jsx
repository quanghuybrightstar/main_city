import ImageBase from "../Image/ImageBase";
import { FlexRowStyle } from "../../styles/GlobalStyle.style";
import SrcImage from "../../constants/SrcImage";
import SmartBaseScreen from "../../base/SmartScreenBase";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const AvatarUser = () => {
  return (
    <FlexRowStyle>
      <ImageBase
        src={`${SrcImage.SrcSquareScreen}/avtUser.png`}
        alt="Logo Image"
        widthProps={78}
        heightProps={78}
      />
      <FlexRowStyle>
        <div
          style={{
            fontSize: smFontSize * 25,
            marginLeft: baseWidth * 15,
            fontWeight: 500,
          }}
        >
          Nguyễn Trần Hải Yến
        </div>
      </FlexRowStyle>
    </FlexRowStyle>
  );
};

export default AvatarUser;
