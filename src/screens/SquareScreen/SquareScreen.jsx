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

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  baseHeight = SmartBaseScreen.smBaseHeight,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const SquareScreen = (props) => {
  const { typeTime, dataRankList, handleChangeTypeTime } =
    squareScreenLogic(props);

  const renderRankLower = (data) => {
    return (
      <div
        key={data.rank_id}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: `0 ${baseWidth * 12}px`,
          background: `url(${SrcImage.SrcSquareScreen}${
            data?.is_my_rank == 1
              ? "/borderRankSelected.png"
              : "/borderRank.png"
          }) no-repeat top center /cover`,
          width: baseWidth * 470,
          height: baseWidth * 60,
          marginTop: baseWidth * 6,
          position: "relative",
        }}
      >
        {data?.is_my_rank == 1 && (
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

        {data?.is_my_rank == 1 && (
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
            {data.rank_id}
          </div>

          <ImageBase
            src={`${SrcImage.SrcSquareScreen}${data.imgUrl}`}
            alt="Avatar User Image"
            widthProps={41}
            heightProps={41}
            marginProps={`0 ${baseWidth * 20}px 0 0`}
          />

          <NameUserRank>{data.name}</NameUserRank>
        </FlexRowStyle>
        <FlexRowStyle>
          <NumOfDiamond>{data.number_diamond}</NumOfDiamond>
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
          <HeaderTitle>Quảng trường danh vọng</HeaderTitle>
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

        <ContentRightContainer>
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
                  src={`${SrcImage.SrcSquareScreen}/avtRank.png`}
                  alt="Ticket Image"
                  widthProps={75}
                  heightProps={76}
                  marginProps={`${2 * baseWidth}px 0 0 0`}
                />

                <NameUserRank>@playername</NameUserRank>

                <NumOfDiamond>7567</NumOfDiamond>
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
                  src={`${SrcImage.SrcSquareScreen}/avtRank.png`}
                  alt="Ticket Image"
                  widthProps={90}
                  heightProps={91}
                  marginProps={`${2 * baseWidth}px 0 0 0`}
                />

                <NameUserRank>@playername</NameUserRank>

                <NumOfDiamond>9765</NumOfDiamond>
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
                  src={`${SrcImage.SrcSquareScreen}/avtRank.png`}
                  alt="Ticket Image"
                  widthProps={65}
                  heightProps={66}
                  marginProps={`${2 * baseWidth}px 0 0 0`}
                />

                <NameUserRank>@playername</NameUserRank>

                <NumOfDiamond>4674</NumOfDiamond>
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
            {dataRankList.map((data) => renderRankLower(data))}
          </ListRankLower>
        </ContentRightContainer>
      </RightContainer>
    </SquareStyleContainer>
  );
};

export default SquareScreen;
