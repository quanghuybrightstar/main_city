import {
  ExchangeContainer,
  MyExchangeContainer,
  ExchangeHeader,
  MoreExchange,
  TextTime,
  ListMyExchange,
  TextBtnShadow,
  ContentExchange,
} from "./ExchangePuzzle.style";
import { exchangePuzzleLogic } from "./ExchangePuzzle.logic";
import SmartBaseScreen from "../../base/SmartScreenBase";
import {
  FlexRowStyle,
  RightContainer,
  HeaderRight,
  BaseTextSize20,
  BaseTextSize24,
  BaseTextSize22,
  ContentRightContainer,
} from "../../styles/GlobalStyle.style";
import SrcImage from "../../constants/SrcImage";
import MenuSelection from "../../components/MenuSelection/MenuSelection";
import { HeaderTitle } from "../../components/Header";
import ImageBase from "../../components/Image/ImageBase";
import BoxRight from "../../components/BoxRight/BoxRight";
import SelectionType from "../../constants/Selection";
import ButtonBase from "../../components/Button/Button";
import PseudoClick from "../../components/PseudoClick/PseudoClick";
import ColorBase from "../../styles/Color";
import BoxPuzzle from "../../components/BoxPuzzle/BoxPuzzle";
import { validateTimer } from "../../utils";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  smFontSize = SmartBaseScreen.smFontSize;

const ExchangePuzzle = (props) => {
  let {
    myExchangePuzzle,
    dataRequiredExchange,
    handleGoBack,
    handleNavigate,
    handleExchange,
  } = exchangePuzzleLogic(props);

  const renderExchange = (exchange) => {
    return (
      <div
        key={exchange.id}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: baseWidth * 45,
        }}
      >
        <FlexRowStyle>
          <BoxPuzzle
            imgLink={exchange.item_order_image}
            isTextType={true}
            widthBoxProps={94}
            heightBoxProps={94}
            exchange={exchange}
            widthProps={81}
            heightProps={81}
            borderColorPropsProps={ColorBase.blandBlue}
            typePuzzle={exchange?.item_order_name}
          />

          <ImageBase
            src={`${SrcImage.SrcFactoryScreen}/ico_next.png`}
            alt="Exchange Icon"
            widthProps={55}
            heightProps={54}
            marginProps={`0 ${20 * baseWidth}px`}
          />

          <BoxPuzzle
            imgLink={exchange.item_response_image}
            isTextType={true}
            widthBoxProps={94}
            heightBoxProps={94}
            exchange={exchange}
            widthProps={81}
            heightProps={81}
            borderColorPropsProps={ColorBase.blandBlue}
            typePuzzle={exchange?.item_response_response}
          />
        </FlexRowStyle>

        <TextTime>
          <BaseTextSize22>
            {exchange?.user_order_name &&
              exchange?.collection == "global" &&
              exchange.user_order_name}
          </BaseTextSize22>
          Đăng ngày {validateTimer(exchange.created_at)}
        </TextTime>

        <BaseTextSize20>
          {exchange?.quantity_available > 0
            ? `Bạn có ${exchange?.quantity_available} mảnh này`
            : `Bạn chưa có mảnh này`}
        </BaseTextSize20>

        {exchange?.collection == "local" ? (
          exchange?.status == 1 ? (
            <ButtonBase
              borderRadiusProps={baseWidth * 10}
              widthProps={100}
              heightProps={45}
              onClick={() => handleExchange(exchange, "accept")}
              bgColorProps={ColorBase.bgAccept}
            >
              <TextBtnShadow>Nhận</TextBtnShadow>
            </ButtonBase>
          ) : (
            <ButtonBase
              borderRadiusProps={baseWidth * 10}
              widthProps={100}
              heightProps={45}
              onClick={() => handleExchange(exchange, "cancel")}
              bgColorProps={ColorBase.bgCancel}
            >
              <TextBtnShadow>Hủy</TextBtnShadow>
            </ButtonBase>
          )
        ) : (
          exchange?.status == 0 && (
            <ButtonBase
              borderRadiusProps={baseWidth * 10}
              widthProps={100}
              heightProps={45}
              onClick={() => handleExchange(exchange, "request")}
            >
              <TextBtnShadow>Đổi</TextBtnShadow>
            </ButtonBase>
          )
        )}
      </div>
    );
  };

  return (
    <ExchangeContainer>
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
          <div
            style={{
              fontSize: smFontSize * 18,
              marginTop: `${baseWidth * 10}px`,
              marginBottom: baseWidth * 30,
            }}
          >
            Tạo đơn đổi mảnh ghép để tìm người trao đổi, sớm sở hữu mảnh ghép
            bạn còn thiếu.
          </div>
          <ContentExchange>
            <MyExchangeContainer>
              <ExchangeHeader>
                <BaseTextSize20>Danh sách đổi của tôi</BaseTextSize20>
                <MoreExchange>
                  <BoxRight handleNavigate={handleNavigate}>
                    Thêm trao đổi
                  </BoxRight>
                </MoreExchange>
              </ExchangeHeader>

              <ListMyExchange>
                {myExchangePuzzle?.map((exchange) => renderExchange(exchange))}
              </ListMyExchange>
            </MyExchangeContainer>

            <MyExchangeContainer>
              <ExchangeHeader>
                <BaseTextSize20>Danh sách yêu cầu trao đổi</BaseTextSize20>
              </ExchangeHeader>

              <ListMyExchange>
                {dataRequiredExchange?.map((exchange) =>
                  renderExchange(exchange)
                )}
              </ListMyExchange>
            </MyExchangeContainer>
          </ContentExchange>
        </ContentRightContainer>
      </RightContainer>
    </ExchangeContainer>
  );
};

export default ExchangePuzzle;
