import SmartBaseScreen from "../base/SmartScreenBase";
import styled from "styled-components";
import SrcImage from "../constants/SrcImage";
import ColorBase from "./Color";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  baseHeight = SmartBaseScreen.smBaseHeight,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const FlexAlignStyle = styled.div`
  display: flex;
  align-items: center;
`;

const FlexCenterStyle = styled(FlexAlignStyle)`
  justify-content: center;
`;

const FlexBetweenStyle = styled(FlexAlignStyle)`
  justify-content: space-between;
  position: relative;
`;

const FlexEvenlyStyle = styled(FlexAlignStyle)`
  justify-content: space-evenly;
  position: relative;
`;

const FlexColStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexRowStyle = styled(FlexAlignStyle)`
  flex-direction: row;
`;

// Right Square
const RightContainer = styled(FlexColStyle)`
  background: url(${`${SrcImage.BaseURL}/bgRight.png`}) no-repeat top center /
    cover;
  width: ${1300 * baseWidth}px;
  height: ${1000 * baseWidth}px;
  margin-top: ${75 * baseWidth}px;
  margin-right: ${50 * baseWidth}px;
  position: relative;
`;

// Header
const HeaderRight = styled(FlexBetweenStyle)`
  margin: ${-5 * baseWidth}px ${55 * baseWidth}px 0 ${65 * baseWidth}px;
`;

// Base Font Size

const BaseTextSize38 = styled.div`
  font-size: ${smFontSize * 38}px;
`;

const BaseTextSize20 = styled.div`
  font-size: ${smFontSize * 20}px;
  color: #fff;
`;

const BaseTextSize28 = styled.div`
  font-size: ${smFontSize * 28}px;
  color: #fff;
  text-align: center;
`;

const ErrorText = styled(BaseTextSize28)`
  color: ${ColorBase.errorColor};
  font-weight: 700;
`;

const BaseTextSize18 = styled.div`
  font-size: ${smFontSize * 18}px;
`;

const BaseTitleGame = ({ fontSizeProps, marginProps, children }) => (
  <div
    style={{
      fontSize: fontSizeProps * smFontSize || smFontSize * 20,
      fontWeight: 500,
      color: ColorBase.yellowPrimary,
      margin: marginProps,
    }}
  >
    {children}
  </div>
);

const TextUnderline = styled.div`
  text-decoration-line: underline;
  margin-left: ${4 * baseWidth}px;
`;

const RemainText = ({ countRemaining }) => (
  <FlexRowStyle>
    <div style={{ fontSize: smFontSize * 18, display: "flex" }}>
      Bạn có <TextUnderline>{countRemaining}</TextUnderline>
    </div>
  </FlexRowStyle>
);

const ContentRightContainer = styled(FlexColStyle)`
  margin: 0 ${85 * baseWidth}px;
  margin-top: ${50 * baseWidth}px;
  position: relative;
  align-items: ${(props) => props.align_items};
`;

export {
  FlexColStyle,
  FlexRowStyle,
  FlexAlignStyle,
  FlexCenterStyle,
  FlexEvenlyStyle,
  FlexBetweenStyle,
  RightContainer,
  HeaderRight,
  BaseTextSize38,
  BaseTextSize20,
  BaseTextSize18,
  BaseTextSize28,
  ErrorText,
  BaseTitleGame,
  RemainText,
  ContentRightContainer,
};
