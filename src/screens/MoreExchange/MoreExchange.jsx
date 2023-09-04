import {
  MoreExchangeContainer,
  ProcessExchangeContainer,
  PuzzleGetContainer,
  ListPuzzleAll,
} from "./MoreExchange.style";
import { moreExchangeLogic } from "./MoreExchange.logic";
import SmartBaseScreen from "../../base/SmartScreenBase";
import {
  FlexRowStyle,
  RightContainer,
  HeaderRight,
  BaseTextSize20,
  ContentRightContainer,
  BaseTextSize18,
} from "../../styles/GlobalStyle.style";
import SrcImage from "../../constants/SrcImage";
import MenuSelection from "../../components/MenuSelection/MenuSelection";
import { HeaderTitle } from "../../components/Header";
import ImageBase from "../../components/Image/ImageBase";
import BoxRight from "../../components/BoxRight/BoxRight";
import SelectionType from "../../constants/Selection";
import ButtonBase from "../../components/Button/Button";
import PseudoClick from "../../components/PseudoClick/PseudoClick";
import BoxPuzzle from "../../components/BoxPuzzle/BoxPuzzle";
import ColorBase from "../../styles/Color";
import { TextBtnShadow } from "../ExchangePuzzle/ExchangePuzzle.style";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  baseHeight = SmartBaseScreen.smBaseHeight,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const MoreExchange = (props) => {
  let {
    exchangeGive,
    typeSelecting,
    exchangeGet,
    allPuzzles,
    handleGoBack,
    handleChangePuzzle,
    handleSelectPuzzle,
    handleUploadExchange,
  } = moreExchangeLogic(props);

  const renderPuzzleItem = (puzzle) => {
    return (
      <div
        key={puzzle.item_id}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: `${15 * baseWidth}px ${9 * baseWidth}px`,
        }}
      >
        <PseudoClick onClick={() => handleSelectPuzzle(typeSelecting, puzzle)}>
          {((exchangeGet.item_id == puzzle.item_id && typeSelecting == "get") ||
            (exchangeGive.item_id == puzzle.item_id &&
              typeSelecting == "give")) && (
            <div
              style={{
                position: "absolute",
                top: -13 * baseWidth,
                zIndex: 9,
                left: 43 * baseWidth,
              }}
            >
              <FlexRowStyle>
                <ImageBase
                  src={`${SrcImage.SrcFactoryScreen}/ico_selected_down.png`}
                  alt="Selected Down Icon"
                  widthProps={51}
                  heightProps={48}
                />
              </FlexRowStyle>
            </div>
          )}
          <BoxPuzzle
            imgLink={puzzle.item_image}
            isTextType={true}
            widthBoxProps={86}
            heightBoxProps={86}
            exchange={puzzle}
            widthProps={71}
            heightProps={71}
            borderColorPropsProps={
              (exchangeGet.item_id == puzzle.item_id &&
                typeSelecting == "get") ||
              (exchangeGive.item_id == puzzle.item_id &&
                typeSelecting == "give")
                ? ColorBase.yellowPrimary
                : ColorBase.blandBlue
            }
            typePuzzle={puzzle?.item_name}
            marginBoxProps={`${5 * baseWidth}px ${20 * baseWidth}px`}
          />
        </PseudoClick>

        <div
          style={{
            fontSize: smFontSize * 16,
            marginTop: baseWidth * 10,
            textShadow: "2px 2px 5px black",
          }}
        >
          Sở hữu {puzzle.quantity_available}
        </div>
      </div>
    );
  };

  return (
    <MoreExchangeContainer>
      <MenuSelection typeSelection={SelectionType.FACTORY} />
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

            <HeaderTitle>Trao đổi mảnh ghép</HeaderTitle>
          </div>
        </HeaderRight>

        <ContentRightContainer>
          <ProcessExchangeContainer>
            <FlexRowStyle>
              <PuzzleGetContainer>
                <PseudoClick onClick={() => handleChangePuzzle("get")}>
                  <BoxPuzzle
                    imgLink={exchangeGet.item_image}
                    widthBoxProps={104}
                    heightBoxProps={104}
                    exchange={exchangeGet}
                    widthProps={91}
                    heightProps={91}
                    borderColorPropsProps={
                      exchangeGet?.type ? ColorBase.blandBlue : "#8c8c8c"
                    }
                    typePuzzle={exchangeGet?.type}
                  />
                </PseudoClick>

                <div
                  style={{
                    width: 269 * baseWidth,
                    height: 80 * baseWidth,
                    marginTop: baseWidth * 10,
                    background: `url(${SrcImage.BaseURL}/${
                      typeSelecting == "get"
                        ? "border_select"
                        : "border_unSelect"
                    }.png) no-repeat top center /contain`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: smFontSize * 18,
                      width: 150 * baseWidth,
                      color:
                        typeSelecting == "get"
                          ? ColorBase.blandBlue
                          : "#8c8c8c",
                    }}
                  >
                    CHỌN MẢNH MUỐN NHẬN
                  </div>
                </div>
              </PuzzleGetContainer>

              <ImageBase
                src={`${SrcImage.SrcFactoryScreen}/ico_exchange.png`}
                alt="Exchange Icon"
                widthProps={71}
                heightProps={56}
                marginProps={`${-70 * baseWidth}px 0 0 0`}
              />

              <PuzzleGetContainer>
                <PseudoClick onClick={() => handleChangePuzzle("give")}>
                  <BoxPuzzle
                    imgLink={exchangeGive.item_image}
                    widthBoxProps={104}
                    heightBoxProps={104}
                    exchange={exchangeGive}
                    widthProps={91}
                    heightProps={91}
                    borderColorPropsProps={
                      exchangeGive?.type ? ColorBase.blandBlue : "#8c8c8c"
                    }
                    typePuzzle={exchangeGive?.type}
                  />
                </PseudoClick>

                <div
                  style={{
                    width: 269 * baseWidth,
                    height: 80 * baseWidth,
                    marginTop: baseWidth * 10,
                    background: `url(${SrcImage.BaseURL}/${
                      typeSelecting == "give"
                        ? "border_select"
                        : "border_unSelect"
                    }.png) no-repeat top center /contain`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: smFontSize * 18,
                      width: 150 * baseWidth,
                      color:
                        typeSelecting == "give"
                          ? ColorBase.blandBlue
                          : "#8c8c8c",
                    }}
                  >
                    CHỌN MẢNH MUỐN ĐỔI
                  </div>
                </div>
              </PuzzleGetContainer>
            </FlexRowStyle>
          </ProcessExchangeContainer>

          <ListPuzzleAll>
            {allPuzzles?.map((puzzle) => renderPuzzleItem(puzzle))}
          </ListPuzzleAll>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ButtonBase
              borderRadiusProps={baseWidth * 10}
              widthProps={150}
              heightProps={55}
              onClick={handleGoBack}
              bgColorProps={ColorBase.bgCancel}
              marginProps={`${25 * baseWidth}px ${15 * baseWidth}px`}
            >
              <TextBtnShadow>Hủy</TextBtnShadow>
            </ButtonBase>

            <ButtonBase
              borderRadiusProps={baseWidth * 10}
              widthProps={150}
              heightProps={55}
              onClick={() => handleUploadExchange()}
              bgColorProps={ColorBase.bgAccept}
              marginProps={`${25 * baseWidth}px ${15 * baseWidth}px`}
            >
              <TextBtnShadow>Hoàn thành</TextBtnShadow>
            </ButtonBase>
          </div>
        </ContentRightContainer>
      </RightContainer>
    </MoreExchangeContainer>
  );
};

export default MoreExchange;
