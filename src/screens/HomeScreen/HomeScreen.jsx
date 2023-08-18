import {
  HomeStyleContainer,
  LeftStyleContainer,
  HeaderLogoContainer,
  BoxText,
  RightStyleContainer,
  RacerContainer,
  TextBtn,
  BuildingContainer,
  MonopolyContainer,
  WheelContainer,
  SquareContainer,
  FactoryContainer,
} from "./HomeScreen.style";
import SmartBaseScreen from "../../base/SmartScreenBase";
import { homeScreenLogic } from "./HomeScreen.logic";
import { FlexCenterStyle } from "../../styles/GlobalStyle.style";
import SrcImage from "../../constants/SrcImage";
import { HeaderLogo } from "../../components/Header";
import { Link } from "react-router-dom";
import ColorBase from "../../styles/Color";
import TextPlatform from "../../components/TextPlatform/TextPlatfform";
import ImageBase from "../../components/Image/ImageBase";
import ButtonBase from "../../components/Button/Button";

SmartBaseScreen.baseSetup();

let baseWidth = SmartBaseScreen.smBaseWidth,
  baseHeight = SmartBaseScreen.smBaseHeight,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const HomeScreen = (props) => {
  let { dataPlatformList, handleNavigate } = homeScreenLogic(props);

  // const [baseWidth, setBaseWidth] = useState(window.innerWidth / 1980);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setBaseWidth(window.innerWidth / 1980);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <HomeStyleContainer>
      <LeftStyleContainer>
        <HeaderLogoContainer>
          <HeaderLogo />
        </HeaderLogoContainer>

        <ImageBase
          src={`${SrcImage.SrcHomeScreen}/title.png`}
          alt="Title Image"
          widthProps={681}
          heightProps={121}
        />

        <BoxText>
          <div
            style={{
              fontSize: smFontSize * 22,
              color: "white",
            }}
          >
            Chào mừng bạn đã tới Sweet CITY - thành phố tương lai dành cho những
            công dân thẻ tín dụng DEMO COMPANY. Trải nghiệm những rung cảm thú
            vụ khi ghé thăm các khu phố đặc biệt và trở thành Thợ săn kho báu
            quà tặng trị giá hơn 20 tỷ đồng.
          </div>
        </BoxText>

        <div
          style={{
            marginTop: 30 * baseWidth,
          }}
        >
          <FlexCenterStyle>
            <ButtonBase
              widthProps={300}
              onClick={() => {
                console.log("123");
              }}
              heightProps={65}
              borderProps={"1px solid #fff"}
            >
              <TextBtn>Khám phá ngay</TextBtn>
            </ButtonBase>
          </FlexCenterStyle>
        </div>
      </LeftStyleContainer>

      {dataPlatformList && (
        <RightStyleContainer>
          <RacerContainer>
            <ImageBase
              src={`${SrcImage.SrcHomeScreen}/racer.png`}
              alt="Racer Image"
              widthProps={310}
              heightProps={288}
            />

            <TextPlatform topProps={168}>
              {dataPlatformList[0]?.name.toUpperCase()}
            </TextPlatform>
            <FlexCenterStyle>
              <ButtonBase
                onClick={() => handleNavigate(dataPlatformList[0])}
                borderProps={"1px solid #fff"}
              >
                <TextBtn>Race</TextBtn>
              </ButtonBase>
            </FlexCenterStyle>
          </RacerContainer>

          <BuildingContainer>
            <ImageBase
              src={`${SrcImage.SrcHomeScreen}/building.png`}
              alt="Building Image"
              widthProps={310}
              heightProps={342}
            />

            <TextPlatform topProps={235}>
              {dataPlatformList[1]?.name.toUpperCase()}
            </TextPlatform>

            <FlexCenterStyle>
              <ButtonBase
                borderProps={"1px solid #fff"}
                onClick={() => handleNavigate(dataPlatformList[1])}
              >
                <TextBtn>Enter</TextBtn>
              </ButtonBase>
            </FlexCenterStyle>
          </BuildingContainer>

          <MonopolyContainer>
            <ImageBase
              src={`${SrcImage.SrcHomeScreen}/monopoly.png`}
              alt="Monopoly Image"
              widthProps={311}
              heightProps={297}
            />

            <TextPlatform topProps={175}>
              {dataPlatformList[2]?.name.toUpperCase()}
            </TextPlatform>

            <FlexCenterStyle>
              <ButtonBase
                onClick={() => handleNavigate(dataPlatformList[2])}
                borderProps={"1px solid #fff"}
              >
                <TextBtn>Play</TextBtn>
              </ButtonBase>
            </FlexCenterStyle>
          </MonopolyContainer>

          <WheelContainer>
            <ImageBase
              src={`${SrcImage.SrcHomeScreen}/wheel.png`}
              alt="Wheel Image"
              widthProps={310}
              heightProps={323}
            />

            <TextPlatform topProps={200}>
              {dataPlatformList[3]?.name.toUpperCase()}
            </TextPlatform>
            <FlexCenterStyle>
              <ButtonBase
                onClick={() => handleNavigate(dataPlatformList[3])}
                borderProps={"1px solid #fff"}
              >
                <TextBtn>Spin</TextBtn>
              </ButtonBase>
            </FlexCenterStyle>
          </WheelContainer>

          <SquareContainer>
            <ImageBase
              src={`${SrcImage.SrcHomeScreen}/square.png`}
              alt="Square Image"
              widthProps={311}
              heightProps={330}
            />

            <TextPlatform topProps={208} leftProps={70} widthProps={180}>
              {dataPlatformList[4]?.name.toUpperCase()}
            </TextPlatform>
            <FlexCenterStyle>
              <ButtonBase
                onClick={() => handleNavigate(dataPlatformList[4])}
                borderProps={"1px solid #fff"}
              >
                <TextBtn>Enter</TextBtn>
              </ButtonBase>
            </FlexCenterStyle>
          </SquareContainer>

          <FactoryContainer>
            <ImageBase
              src={`${SrcImage.SrcHomeScreen}/box.png`}
              alt="Box Image"
              widthProps={310}
              heightProps={183}
            />

            <TextPlatform topProps={62}>
              {dataPlatformList[5]?.name.toUpperCase()}
            </TextPlatform>
            <FlexCenterStyle>
              <ButtonBase
                onClick={() => handleNavigate(dataPlatformList[5])}
                borderProps={"1px solid #fff"}
              >
                <TextBtn>Enter</TextBtn>
              </ButtonBase>
            </FlexCenterStyle>
          </FactoryContainer>
        </RightStyleContainer>
      )}
    </HomeStyleContainer>
  );
};

export default HomeScreen;
