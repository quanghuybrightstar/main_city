import {
  AddTicketsContainer,
  TextBtnMission,
  ListMissions,
  BuyInforHeader,
  BuyContent,
  BuyTicketsList,
} from "./AddTicketsScreen.style";
import { addTicketsLogic } from "./AddTicketsScreen.logic";
import SmartBaseScreen from "../../base/SmartScreenBase";
import {
  FlexAlignStyle,
  FlexCenterStyle,
  FlexBetweenStyle,
  FlexEvenlyStyle,
  FlexRowStyle,
  FlexColStyle,
  RightContainer,
  HeaderRight,
  BaseTextSize38,
  BaseTextSize20,
  BaseTextSize18,
  BaseTitleGame,
  RemainText,
  ContentRightContainer,
} from "../../styles/GlobalStyle.style";
import SrcImage from "../../constants/SrcImage";
import HeaderLogo from "../../components/Header/HeaderLogo";
import AvatarUser from "../../components/AvatarUser/AvatarUser";
import MenuSelection from "../../components/MenuSelection/MenuSelection";
import { HeaderTitle } from "../../components/Header";
import ButtonBase from "../../components/Button/Button";
import TypeTime from "../../constants/TypeTime";
import ImageBase from "../../components/Image/ImageBase";
import PseudoClick from "../../components/PseudoClick/PseudoClick";
import SelectionType from "../../constants/Selection";
import ColorBase from "../../styles/Color";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  baseHeight = SmartBaseScreen.smBaseHeight,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const AddTicketsScreen = (props) => {
  let {
    dataMissions,
    dataBuyTickets,
    countBuyItem,
    handleChangeCountBuy,
    handleGoBack,
  } = addTicketsLogic(props);

  const renderMission = (mission) => {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingRight: baseWidth * 60,
          marginTop: baseWidth * 25,
          position: "relative",
          width: baseWidth * 480,
        }}
        key={mission.id}
      >
        <FlexColStyle>
          <BaseTextSize18>{mission.name}</BaseTextSize18>

          <FlexRowStyle>
            <BaseTextSize38>+{mission.count_tickets}</BaseTextSize38>

            <ImageBase
              src={`${SrcImage.BaseURL}/ticket.png`}
              alt="Ticket Image"
              widthProps={52}
              heightProps={56}
              marginProps={`0 ${8 * baseWidth}px`}
            />

            <BaseTitleGame>{mission.title_game}</BaseTitleGame>
          </FlexRowStyle>
        </FlexColStyle>

        <FlexRowStyle>
          <ButtonBase
            widthProps={140}
            onClick={() => {
              console.log("123");
            }}
            heightProps={45}
            bgColorProps={
              mission.is_completed === 1
                ? ColorBase.yellowPrimary
                : ColorBase.bluePrimary
            }
          >
            <TextBtnMission>
              {mission.is_completed === 1 ? "Hoàn thành" : "Thực hiện"}
            </TextBtnMission>
          </ButtonBase>
        </FlexRowStyle>
      </div>
    );
  };

  const renderBuyTickets = (method) => {
    return (
      <div
        key={method.id}
        style={{
          display: "flex",
          flexDirection: "column",
          padding: `${5 * baseWidth}px ${12 * baseWidth}px ${15 * baseWidth}px`,
          border: "1px solid #f2f2f2",
          borderRadius: baseWidth * 20,
          height: baseWidth * 200,
          width: baseWidth * 380,
        }}
      >
        <BuyInforHeader>
          <ImageBase
            src={`${SrcImage.SrcAddTicketsScreen}${method.imgURL}`}
            alt="Buy Item Image"
            widthProps={106}
            heightProps={107}
            marginProps={`0 ${10 * baseWidth}px 0 0`}
          />

          <FlexColStyle>
            <BaseTitleGame>{method.title}</BaseTitleGame>
            <FlexRowStyle>
              <RemainText countRemaining={`${method.tickets_remaining} vé`} />

              <ImageBase
                src={`${SrcImage.BaseURL}/ticket.png`}
                alt="Ticket Image"
                widthProps={52}
                heightProps={56}
                marginProps={`0 ${8 * baseWidth}px`}
              />
            </FlexRowStyle>
          </FlexColStyle>
        </BuyInforHeader>

        <BuyContent>
          <FlexColStyle>
            <FlexRowStyle>
              <ImageBase
                src={`${SrcImage.BaseURL}/diamond.png`}
                alt="Diamond Image"
                widthProps={36}
                heightProps={33}
                marginProps={`${-5 * baseWidth}px ${3 * baseWidth}px 0 0`}
              />
              <div
                style={{
                  fontSize: smFontSize * 25,
                  color: "#fff",
                }}
              >
                {method.price}
              </div>
              {method.is_sale == 1 && (
                <div
                  style={{
                    padding: `${2 * baseWidth}px ${12 * baseWidth}px`,
                    background: "#fff",
                    color: "#ff3399",
                    fontSize: smFontSize * 16,
                    borderRadius: baseWidth * 15,
                    marginLeft: baseWidth * 20,
                  }}
                >
                  -{method.number_sale}%
                </div>
              )}
            </FlexRowStyle>
            {method.is_sale == 1 ? (
              <BaseTitleGame
                marginProps={`${baseWidth * 18}px 0 0 ${baseWidth * 18}px`}
              >
                Ưu đãi đặc biệt
              </BaseTitleGame>
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                <PseudoClick onClick={() => handleChangeCountBuy("minus")}>
                  <ImageBase
                    src={`${SrcImage.SrcAddTicketsScreen}/ico_minus.png`}
                    alt="Minus Icon"
                    widthProps={32}
                    heightProps={32}
                    marginProps={`0 ${baseWidth * 10}px 0 0`}
                  />
                </PseudoClick>

                <BaseTextSize38>{countBuyItem}</BaseTextSize38>

                <PseudoClick onClick={() => handleChangeCountBuy("add")}>
                  <ImageBase
                    src={`${SrcImage.SrcAddTicketsScreen}/ico_add.png`}
                    alt="Add Icon"
                    widthProps={32}
                    heightProps={32}
                    marginProps={`0 0 0 ${baseWidth * 10}px`}
                  />
                </PseudoClick>
              </div>
            )}
          </FlexColStyle>

          <div>
            <ButtonBase
              widthProps={130}
              onClick={() => {
                console.log("buy");
              }}
              heightProps={45}
            >
              <TextBtnMission>Mua vé</TextBtnMission>
            </ButtonBase>
          </div>
        </BuyContent>
      </div>
    );
  };

  return (
    <AddTicketsContainer>
      <MenuSelection typeSelection={SelectionType.WHEEL} />

      <RightContainer>
        <HeaderRight>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: -10 * baseWidth,
              marginLeft: -30 * baseWidth,
            }}
          >
            <PseudoClick onClick={handleGoBack}>
              <ImageBase
                src={`${SrcImage.SrcFactoryScreen}/ico_back.png`}
                alt="Back Icon"
                widthProps={55}
                heightProps={54}
                marginProps={`0 ${20 * baseWidth}px`}
              />
            </PseudoClick>

            <HeaderTitle>Nhận thêm vé</HeaderTitle>
          </div>
        </HeaderRight>
        <ContentRightContainer>
          <div
            style={{
              fontSize: smFontSize * 18,
              marginTop: `${baseWidth * 10}px`,
            }}
          >
            Bạn hãy sử dụng kim cương để mua vé trò chơi hoặc hoàn thành các
            nhiệm vụ sau để đổi vé.
          </div>

          <div style={{ marginTop: baseWidth * 50 }}>
            <BaseTextSize20>Nhiệm vụ</BaseTextSize20>

            <ListMissions>
              {dataMissions?.map((mission) => renderMission(mission))}
            </ListMissions>
          </div>

          <div style={{ marginTop: baseWidth * 50 }}>
            <BaseTextSize20>Mua vé trò chơi</BaseTextSize20>

            <BuyTicketsList>
              {dataBuyTickets.map((item) => renderBuyTickets(item))}
            </BuyTicketsList>
          </div>
        </ContentRightContainer>
      </RightContainer>
    </AddTicketsContainer>
  );
};

export default AddTicketsScreen;
