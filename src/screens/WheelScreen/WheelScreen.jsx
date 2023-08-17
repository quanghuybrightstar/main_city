import { WheelContainer, BoxTickets } from "./WheelScreen.style";
import { wheelScreenLogic } from "./WheelScreen.logic";
import SmartBaseScreen from "../../base/SmartScreenBase";
import {
  RightContainer,
  HeaderRight,
  ContentRightContainer,
  BaseTitleGame,
  FlexRowStyle,
  BaseTextSize20,
} from "../../styles/GlobalStyle.style";
import SrcImage from "../../constants/SrcImage";
import MenuSelection from "../../components/MenuSelection/MenuSelection";
import { HeaderTitle } from "../../components/Header";
import ButtonBase from "../../components/Button/Button";
import ImageBase from "../../components/Image/ImageBase";
import SelectionType from "../../constants/Selection";
import { Link } from "react-router-dom";
import ColorBase from "../../styles/Color";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  baseHeight = SmartBaseScreen.smBaseHeight,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const WheelScreen = (props) => {
  let { dataWheel, handleSpinWheel } = wheelScreenLogic(props);

  return (
    <WheelContainer>
      <MenuSelection typeSelection={SelectionType.WHEEL} />
      <RightContainer>
        <HeaderRight>
          <HeaderTitle>Công viên ước mơ</HeaderTitle>
        </HeaderRight>

        <ContentRightContainer align_items={"center"}>
          <ImageBase
            src={`${SrcImage.SrcWheelScreen}/wheel.png`}
            alt="Wheel Image"
            widthProps={535}
            heightProps={535}
            marginProps={`${35 * baseWidth}px 0 0 0`}
          />

          <ImageBase
            src={`${SrcImage.SrcWheelScreen}/bracket.png`}
            alt="Bracket Image"
            widthProps={592}
            heightProps={125}
            marginProps={`${75 * baseWidth}px 0 0 0`}
          />

          <div
            style={{
              position: "absolute",
              bottom: -5 * baseWidth,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <BoxTickets>
              <BaseTitleGame fontSizeProps={30}>
                {dataWheel.tickets_remaining > 0
                  ? `BẠN CÓ ${dataWheel.tickets_remaining} VÉ QUAY THƯỞNG`
                  : "BẠN KHÔNG CÓ VÉ QUAY THƯỞNG"}
              </BaseTitleGame>

              <FlexRowStyle>
                <ImageBase
                  src={`${SrcImage.SrcWheelScreen}/ico_rights.png`}
                  alt="Lefts Icon"
                  widthProps={45}
                  heightProps={30}
                  marginProps={`0 ${30 * baseWidth}px 0 0`}
                />

                <Link to="/add_ticket">
                  <BaseTextSize20>Lấy vé quay thưởng</BaseTextSize20>
                </Link>

                <ImageBase
                  src={`${SrcImage.SrcWheelScreen}/ico_lefts.png`}
                  alt="Rights Icon"
                  widthProps={45}
                  heightProps={30}
                  marginProps={`0 0 0 ${30 * baseWidth}px`}
                />
              </FlexRowStyle>
            </BoxTickets>

            <ButtonBase
              borderRadiusProps={50 * baseWidth}
              widthProps={240}
              heightProps={90}
              onClick={() => handleSpinWheel()}
              bgColorProps={
                dataWheel.tickets_remaining > 0
                  ? ColorBase.bluePrimary
                  : "#8c8c8c"
              }
              marginProps={`${30 * baseWidth}px 0`}
              disabled={dataWheel.tickets_remaining > 0 ? false : true}
            >
              <div
                style={{
                  fontSize: 50 * smFontSize,
                }}
              >
                Spin
              </div>
            </ButtonBase>
          </div>
        </ContentRightContainer>
      </RightContainer>
    </WheelContainer>
  );
};

export default WheelScreen;
