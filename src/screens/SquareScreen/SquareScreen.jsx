import {
  SquareStyleContainer,
  BoxContainer,
  TextBtnColorStyle,
  ContentRightContainer,
  InforTopRank,
  RankSecondContainer,
  RankFirstContainer,
  RankThirdContainer,
  NameUserRank,
  NumOfDiamond,
  ListRankLower,
  IconArrowRight,
  IconArrowLeft,
  RankUser,
} from "./SquareScreen.styles";
import SmartBaseScreen from "../../base/SmartScreenBase";
import {
  FlexAlignStyle,
  FlexCenterStyle,
  FlexBetweenStyle,
  FlexRowStyle,
  FlexColStyle,
  RightContainer,
  HeaderRight,
} from "../../styles/GlobalStyle.style";
import { squareScreenLogic } from "./SquareScreen.logic";
import SrcImage from "../../constants/SrcImage";
import HeaderLogo from "../../components/Header/HeaderLogo";
import AvatarUser from "../../components/AvatarUser/AvatarUser";
import MenuSelection from "../../components/MenuSelection/MenuSelection";
import { HeaderTitle } from "../../components/Header";
import ButtonBase from "../../components/Button/Button";
import TypeTime from "../../constants/TypeTime";
import ImageBase from "../../components/Image/ImageBase";
import SelectionType from "../../constants/Selection";
import ColorBase from "../../styles/Color";
import API from "../../apis/APIConstant";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  baseHeight = SmartBaseScreen.smBaseHeight,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const SquareScreen = (props) => {
  const {
    typeTime,
    dataRankList,
    dataRankUser,
    platformSelected,
    contentRef,
    handleChangeTypeTime,
    handleScrollContent,
  } = squareScreenLogic(props);

  const renderRankLower = (data) => {
    return (
      <div
        key={data?.user_id}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: `0 ${baseWidth * 12}px`,
          background: `url(${SrcImage.SrcSquareScreen}${
            data?.is_user == 1 ? "/borderRankSelected.png" : "/borderRank.png"
          }) no-repeat top center /cover`,
          width: baseWidth * 470,
          height: baseWidth * 60,
          marginTop: baseWidth * 6,
          position: "relative",
        }}
      >
        {data?.is_user == 1 && (
          <IconArrowLeft>
            <ImageBase
              src={`${SrcImage.SrcSquareScreen}/arrowLeft.png`}
              alt="Ticket Image"
              widthProps={35}
              heightProps={39}
              marginProps={`0 0 0 0`}
            />
          </IconArrowLeft>
        )}

        {data?.is_user == 1 && (
          <IconArrowRight>
            <ImageBase
              src={`${SrcImage.SrcSquareScreen}/arrowRight.png`}
              alt="Ticket Image"
              widthProps={35}
              heightProps={39}
              marginProps={`0 0 0 0`}
            />
          </IconArrowRight>
        )}
        <FlexRowStyle>
          <div
            style={{
              color: "#fff",
              fontSize: smFontSize * 18,
              width: baseWidth * 40,
            }}
          >
            {data.ranking}
          </div>

          <ImageBase
            src={`${API.baseURL}${data.avatar}`}
            alt="Avatar User Image"
            widthProps={41}
            heightProps={41}
            marginProps={`0 ${baseWidth * 20}px 0 0`}
            objectFitProps={"cover"}
            borderRadiusProps={"50%"}
          />

          <NameUserRank>{data.user_name}</NameUserRank>
        </FlexRowStyle>
        <FlexRowStyle>
          <NumOfDiamond>{data.diamond}</NumOfDiamond>
          <ImageBase
            src={`${SrcImage.BaseURL}/diamond.png`}
            alt="Diamond Image"
            widthProps={40}
            heightProps={41}
            marginProps={`0 0 0 ${baseWidth * 15}px`}
          />
        </FlexRowStyle>
      </div>
    );
  };

  return (
    <SquareStyleContainer>
      <MenuSelection typeSelection={SelectionType.SQUARE} />

      <RightContainer>
        <HeaderRight>
          <HeaderTitle>{platformSelected?.platform?.name}</HeaderTitle>
          <BoxContainer>
            <ButtonBase
              widthProps={98}
              onClick={() => handleChangeTypeTime(TypeTime.ALL_TIME)}
              heightProps={36}
              borderProps={"none"}
              bgColorProps={
                typeTime == TypeTime.ALL_TIME
                  ? ColorBase.yellowPrimary
                  : "transparent"
              }
            >
              <TextBtnColorStyle
                colorProps={typeTime == TypeTime.ALL_TIME ? "#000" : "#fff"}
              >
                All Time
              </TextBtnColorStyle>
            </ButtonBase>

            <ButtonBase
              widthProps={98}
              onClick={() => handleChangeTypeTime(TypeTime.THIS_WEEK)}
              heightProps={36}
              borderProps={"none"}
              bgColorProps={
                typeTime == TypeTime.THIS_WEEK
                  ? ColorBase.yellowPrimary
                  : "transparent"
              }
            >
              <TextBtnColorStyle
                colorProps={typeTime == TypeTime.THIS_WEEK ? "#000" : "#fff"}
              >
                This Week
              </TextBtnColorStyle>
            </ButtonBase>

            <ButtonBase
              widthProps={98}
              onClick={() => handleChangeTypeTime(TypeTime.THIS_MONTH)}
              heightProps={36}
              borderProps={"none"}
              bgColorProps={
                typeTime == TypeTime.THIS_MONTH
                  ? ColorBase.yellowPrimary
                  : "transparent"
              }
            >
              <TextBtnColorStyle
                colorProps={typeTime == TypeTime.THIS_MONTH ? "#000" : "#fff"}
              >
                This Month
              </TextBtnColorStyle>
            </ButtonBase>
          </BoxContainer>
        </HeaderRight>

        <div
          style={{
            marginTop: 60 * baseWidth,
          }}
        >
          <ContentRightContainer
            ref={contentRef}
            onScroll={() => handleScrollContent()}
          >
            <FlexColStyle>
              <InforTopRank>
                <RankSecondContainer>
                  <ImageBase
                    src={`${SrcImage.SrcSquareScreen}/crown_2.png`}
                    alt="Ticket Image"
                    widthProps={40}
                    heightProps={32}
                    marginProps={`0 0 0 0`}
                  />

                  <ImageBase
                    src={`${API.baseURL}${dataRankList[1]?.avatar}`}
                    alt="Ticket Image"
                    widthProps={75}
                    heightProps={76}
                    marginProps={`${5 * baseWidth}px 0 0 0`}
                    objectFitProps={"cover"}
                    borderRadiusProps={"50%"}
                  />

                  <NameUserRank>{dataRankList[1]?.user_name}</NameUserRank>

                  <NumOfDiamond>{dataRankList[1]?.diamond}</NumOfDiamond>
                </RankSecondContainer>

                <RankFirstContainer>
                  <ImageBase
                    src={`${SrcImage.SrcSquareScreen}/crown_1.png`}
                    alt="Ticket Image"
                    widthProps={68}
                    heightProps={42}
                    marginProps={`0 0 0 0`}
                  />

                  <ImageBase
                    src={`${API.baseURL}${dataRankList[0]?.avatar}`}
                    alt="Ticket Image"
                    widthProps={90}
                    heightProps={91}
                    marginProps={`${5 * baseWidth}px 0 0 0`}
                    objectFitProps={"cover"}
                    borderRadiusProps={"50%"}
                  />

                  <NameUserRank>{dataRankList[0]?.user_name}</NameUserRank>

                  <NumOfDiamond>{dataRankList[0]?.diamond}</NumOfDiamond>
                </RankFirstContainer>

                <RankThirdContainer>
                  <ImageBase
                    src={`${SrcImage.SrcSquareScreen}/crown_3.png`}
                    alt="Ticket Image"
                    widthProps={40}
                    heightProps={33}
                    marginProps={`0 0 0 0`}
                  />

                  <ImageBase
                    src={`${API.baseURL}${dataRankList[2]?.avatar}`}
                    alt="Ticket Image"
                    widthProps={65}
                    heightProps={66}
                    marginProps={`${5 * baseWidth}px 0 0 0`}
                    objectFitProps={"cover"}
                    borderRadiusProps={"50%"}
                  />

                  <NameUserRank>{dataRankList[2]?.user_name}</NameUserRank>

                  <NumOfDiamond>{dataRankList[2]?.diamond}</NumOfDiamond>
                </RankThirdContainer>
              </InforTopRank>
              <ImageBase
                src={`${SrcImage.SrcSquareScreen}/podium.png`}
                alt="Ticket Image"
                widthProps={445}
                heightProps={112}
                marginProps={`${175 * baseWidth}px 0 0 0`}
              />
            </FlexColStyle>

            <ListRankLower>
              {dataRankList.map(
                (data) => data?.ranking >= 4 && renderRankLower(data)
              )}
            </ListRankLower>
          </ContentRightContainer>
        </div>

        {dataRankUser && (
          <RankUser>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: `0 ${baseWidth * 12}px`,
                background: `url(${
                  SrcImage.SrcSquareScreen
                }${"/borderRankSelected.png"}) no-repeat top center /cover`,
                width: baseWidth * 470,
                height: baseWidth * 60,
                marginTop: baseWidth * 6,
                position: "relative",
              }}
            >
              <IconArrowLeft>
                <ImageBase
                  src={`${SrcImage.SrcSquareScreen}/arrowLeft.png`}
                  alt="Ticket Image"
                  widthProps={35}
                  heightProps={39}
                  marginProps={`0 0 0 0`}
                />
              </IconArrowLeft>

              <IconArrowRight>
                <ImageBase
                  src={`${SrcImage.SrcSquareScreen}/arrowRight.png`}
                  alt="Ticket Image"
                  widthProps={35}
                  heightProps={39}
                  marginProps={`0 0 0 0`}
                />
              </IconArrowRight>
              <FlexRowStyle>
                <div
                  style={{
                    color: "#fff",
                    fontSize: smFontSize * 18,
                    width: baseWidth * 40,
                  }}
                >
                  {dataRankUser.ranking}
                </div>

                <ImageBase
                  src={`${API.baseURL}${dataRankUser.avatar}`}
                  alt="Avatar User Image"
                  widthProps={41}
                  heightProps={41}
                  marginProps={`0 ${baseWidth * 20}px 0 0`}
                  objectFitProps={"cover"}
                  borderRadiusProps={"50%"}
                />

                <NameUserRank>{dataRankUser.user_name}</NameUserRank>
              </FlexRowStyle>
              <FlexRowStyle>
                <NumOfDiamond>{dataRankUser.diamond}</NumOfDiamond>
                <ImageBase
                  src={`${SrcImage.BaseURL}/diamond.png`}
                  alt="Diamond Image"
                  widthProps={40}
                  heightProps={41}
                  marginProps={`0 0 0 ${baseWidth * 15}px`}
                />
              </FlexRowStyle>
            </div>
          </RankUser>
        )}
      </RightContainer>
    </SquareStyleContainer>
  );
};

export default SquareScreen;
