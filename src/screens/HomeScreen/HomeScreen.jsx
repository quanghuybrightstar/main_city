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
  WheelRotate,
  FactoryLeft2,
  FactoryLight,
  FactoryLeft3,
  FactoryRight1,
  FactoryRight2,
  ImgTitleContainer,
} from "./HomeScreen.style";
import SmartBaseScreen from "../../base/SmartScreenBase";
import { homeScreenLogic } from "./HomeScreen.logic";
import { FlexCenterStyle } from "../../styles/GlobalStyle.style";
import SrcImage from "../../constants/SrcImage";
import { HeaderLogo } from "../../components/Header";
import { Link } from "react-router-dom";
import TextPlatform from "../../components/TextPlatform/TextPlatfform";
import ImageBase from "../../components/Image/ImageBase";
import ButtonBase from "../../components/Button/Button";
import ModalLogin from "../../components/ModalLogin/ModalLogin";
import { keyframes } from "styled-components";

SmartBaseScreen.baseSetup();

let baseWidth = SmartBaseScreen.smBaseWidth,
  smFontSize = SmartBaseScreen.smFontSize;

const HomeScreen = (props) => {
  let {
    isVisibleExplore,
    dataPlatformList,
    isVisibleLogin,
    handleNavigate,
    handleCloseModal,
  } = homeScreenLogic(props);

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
      <ModalLogin isVisible={isVisibleLogin} onClickClose={handleCloseModal} />
      <LeftStyleContainer>
        <HeaderLogoContainer>
          <HeaderLogo widthLogo={111} heightLogo={71} />
        </HeaderLogoContainer>

        <ImgTitleContainer>
          <ImageBase
            src={`${SrcImage.SrcHomeScreen}/title.png`}
            alt="Title Image"
            widthProps={681}
            heightProps={121}
          />
        </ImgTitleContainer>

        <BoxText>
          <div
            className="font_jura"
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
            display: isVisibleExplore ? "block" : "none",
          }}
        >
          <FlexCenterStyle>
            <ButtonBase
              widthProps={300}
              onClick={() => handleNavigate()}
              heightProps={65}
              borderProps={"1px solid #fff"}
            >
              <TextBtn className="font_jura_bold">Khám phá ngay</TextBtn>
            </ButtonBase>
          </FlexCenterStyle>
        </div>
      </LeftStyleContainer>

      {dataPlatformList && (
        <RightStyleContainer>
          <RacerContainer>
            <div
              style={{
                position: "relative",
                top: 50 * baseWidth,
                left: 60 * baseWidth,
                display: "flex",
                alignItems: "center",
                zIndex: 2,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -30 * baseWidth,
                  left: -15 * baseWidth,
                }}
              >
                <ImageBase
                  src={`${SrcImage.SrcHomeScreen}/side_bg_racer.png`}
                  alt="Racer Image"
                  widthProps={235}
                  heightProps={211}
                />
              </div>
              <div
                style={{
                  position: "relative",
                  top: 0 * baseWidth,
                  left: -13 * baseWidth,
                }}
              >
                <ImageBase
                  transformProps="scaleX(-1)"
                  src={`${SrcImage.SrcHomeScreen}/racer_gif.gif`}
                  alt="Racer Image"
                  widthProps={335}
                  heightProps={197}
                />
              </div>
            </div>
            <div
              style={{
                position: "relative",
                left: -5 * baseWidth,
                top: -15 * baseWidth,
              }}
            >
              <ImageBase
                src={`${SrcImage.SrcHomeScreen}/box.png`}
                alt="Racer Image"
                widthProps={265}
                heightProps={140}
              />

              <TextPlatform topProps={40} leftProps={60}>
                {dataPlatformList[0]?.name.toUpperCase()}
              </TextPlatform>
            </div>
            <FlexCenterStyle>
              <ButtonBase
                onClick={() => handleNavigate(dataPlatformList[0])}
                borderProps={"1px solid #fff"}
              >
                <TextBtn className="font_jura_bold">Race</TextBtn>
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
                <TextBtn className="font_jura_bold">Enter</TextBtn>
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
                <TextBtn className="font_jura_bold">Play</TextBtn>
              </ButtonBase>
            </FlexCenterStyle>
          </MonopolyContainer>

          <WheelContainer>
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                top: 30 * baseWidth,
                zIndex: 2,
              }}
            >
              <div
                style={{
                  position: "relative",
                  top: 3 * baseWidth,
                }}
              >
                <WheelRotate>
                  <ImageBase
                    src={`${SrcImage.SrcHomeScreen}/wheel.png`}
                    alt="Wheel Image"
                    widthProps={162}
                    heightProps={162}
                    zIndexProps={1}
                  />
                </WheelRotate>
                <div
                  style={{
                    position: "absolute",
                    top: -80 * baseWidth,
                    left: -70 * baseWidth,
                    zIndex: -99,
                  }}
                >
                  <ImageBase
                    src={`${SrcImage.SrcHomeScreen}/effect_wheel.png`}
                    alt="Effect Image"
                    widthProps={283}
                    heightProps={252}
                  />
                </div>
              </div>
              <ImageBase
                src={`${SrcImage.SrcHomeScreen}/bracket_home.png`}
                alt="Bracket Image"
                widthProps={193}
                heightProps={29}
              />
            </div>
            <FlexCenterStyle
              style={{
                position: "relative",
              }}
            >
              <ImageBase
                src={`${SrcImage.SrcHomeScreen}/box.png`}
                alt="Box Image"
                widthProps={265}
                heightProps={140}
              />
              <TextPlatform topProps={40} leftProps={60}>
                {dataPlatformList[3]?.name.toUpperCase()}
              </TextPlatform>
            </FlexCenterStyle>

            <FlexCenterStyle>
              <ButtonBase
                onClick={() => handleNavigate(dataPlatformList[3])}
                borderProps={"1px solid #fff"}
              >
                <TextBtn className="font_jura_bold">Spin</TextBtn>
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
                <TextBtn className="font_jura_bold">Enter</TextBtn>
              </ButtonBase>
            </FlexCenterStyle>
          </SquareContainer>

          <FactoryContainer>
            <div
              style={{
                position: "relative",
                top: -30 * baseWidth,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  display: "flex",
                  zIndex: 2,
                  left: -185 * baseWidth,
                  top: -35 * baseWidth,
                }}
              >
                <ImageBase
                  src={`${SrcImage.SrcHomeScreen}/factory_left_1.png`}
                  alt="Box Image"
                  widthProps={78}
                  heightProps={97}
                />
                <div
                  style={{
                    position: "relative",
                    top: -45 * baseWidth,
                    right: 45 * baseWidth,
                  }}
                >
                  <FactoryLeft2>
                    <ImageBase
                      src={`${SrcImage.SrcHomeScreen}/factory_left_2.png`}
                      alt="Box Image"
                      widthProps={99}
                      heightProps={88}
                      classNameProps="factory_left_2"
                    />
                    <FactoryLeft3>
                      <ImageBase
                        src={`${SrcImage.SrcHomeScreen}/factory_left_3.png`}
                        alt="Box Image"
                        widthProps={115}
                        heightProps={108}
                      />
                      <FactoryLight>
                        <ImageBase
                          src={`${SrcImage.SrcHomeScreen}/factory_left_4.png`}
                          alt="Box Image"
                          widthProps={33}
                          heightProps={56}
                          styleProps={{
                            position: "absolute",
                            right: -20 * baseWidth,
                            top: 98 * baseWidth,
                          }}
                        />
                      </FactoryLight>
                    </FactoryLeft3>
                  </FactoryLeft2>
                </div>
              </div>

              <div
                style={{
                  position: "absolute",
                  display: "flex",
                  zIndex: 2,
                  left: 104 * baseWidth,
                  top: 29 * baseWidth,
                }}
              >
                <FactoryRight1>
                  <ImageBase
                    src={`${SrcImage.SrcHomeScreen}/factory_right_1.png`}
                    alt="Box Image"
                    widthProps={114}
                    heightProps={89}
                  />
                  <FactoryRight2>
                    <ImageBase
                      src={`${SrcImage.SrcHomeScreen}/factory_right_2.png`}
                      alt="Box Image"
                      widthProps={70}
                      heightProps={66}
                    />
                    <ImageBase
                      src={`${SrcImage.SrcHomeScreen}/factory_right_3.png`}
                      alt="Box Image"
                      widthProps={126}
                      heightProps={92}
                      styleProps={{
                        position: "absolute",
                        top: 5 * baseWidth,
                        right: 43 * baseWidth,
                        zIndex: 1,
                      }}
                    />
                  </FactoryRight2>
                </FactoryRight1>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                top: 55 * baseWidth,
              }}
            >
              <ImageBase
                src={`${SrcImage.SrcHomeScreen}/box.png`}
                alt="Box Image"
                widthProps={265}
                heightProps={140}
              />

              <TextPlatform topProps={40} leftProps={60}>
                {dataPlatformList[5]?.name.toUpperCase()}
              </TextPlatform>
              <FlexCenterStyle>
                <ButtonBase
                  onClick={() => handleNavigate(dataPlatformList[5])}
                  borderProps={"1px solid #fff"}
                >
                  <TextBtn className="font_jura_bold">Enter</TextBtn>
                </ButtonBase>
              </FlexCenterStyle>
            </div>
          </FactoryContainer>
        </RightStyleContainer>
      )}
    </HomeStyleContainer>
  );
};

export default HomeScreen;
