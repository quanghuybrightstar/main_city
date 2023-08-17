import {
  ExchangeContainer,
  MyExchangeContainer,
  ExchangeHeader,
  MoreExchange,
  TextTime,
  BoxBorderPuzzle,
  ListMyExchange,
  TextBtnShadow,
  TextTypePuzzle,
  ContentExchange,
} from "./ExchangePuzzle.style";
import { exchangePuzzleLogic } from "./ExchangePuzzle.logic";
import SmartBaseScreen from "../../base/SmartScreenBase";
import {
  FlexRowStyle,
  RightContainer,
  HeaderRight,
  BaseTextSize20,
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

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  baseHeight = SmartBaseScreen.smBaseHeight,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const ExchangePuzzle = (props) => {
  let { myExchangePuzzle, dataRequiredExchange, handleGoBack } =
    exchangePuzzleLogic(props);

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
            isTextType={true}
            widthBoxProps={94}
            heightBoxProps={94}
            exchange={exchange}
            widthProps={81}
            heightProps={81}
            borderColorPropsProps={ColorBase.blandBlue}
            typePuzzle={exchange?.typePuzzleGive}
          />

          <ImageBase
            src={`${SrcImage.SrcFactoryScreen}/ico_next.png`}
            alt="Exchange Icon"
            widthProps={55}
            heightProps={54}
            marginProps={`0 ${20 * baseWidth}px`}
          />

          <BoxPuzzle
            isTextType={true}
            widthBoxProps={94}
            heightBoxProps={94}
            exchange={exchange}
            widthProps={81}
            heightProps={81}
            borderColorPropsProps={ColorBase.blandBlue}
            typePuzzle={exchange?.typePuzzleGet}
          />
        </FlexRowStyle>

        <TextTime>
          <BaseTextSize20>
            {exchange?.user_upload && exchange.user_upload}
          </BaseTextSize20>
          Đăng ngày {exchange.time_upload}
        </TextTime>

        <BaseTextSize20>
          {exchange?.count_remaining > 0
            ? `Bạn có ${exchange?.count_remaining} mảnh này`
            : `Bạn chưa có mảnh này`}
        </BaseTextSize20>

        {exchange?.is_mine == 1 ? (
          exchange?.is_completed == 1 ? (
            <ButtonBase
              borderRadiusProps={baseWidth * 10}
              widthProps={100}
              heightProps={45}
              onClick={() => console.log("Nhan")}
              bgColorProps={ColorBase.bgAccept}
            >
              <TextBtnShadow>Nhận</TextBtnShadow>
            </ButtonBase>
          ) : (
            <ButtonBase
              borderRadiusProps={baseWidth * 10}
              widthProps={100}
              heightProps={45}
              onClick={() => console.log("Huy")}
              bgColorProps={ColorBase.bgCancel}
            >
              <TextBtnShadow>Hủy</TextBtnShadow>
            </ButtonBase>
          )
        ) : (
          exchange?.is_completed == 0 && (
            <ButtonBase
              borderRadiusProps={baseWidth * 10}
              widthProps={100}
              heightProps={45}
              onClick={() => console.log("Doi")}
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
                  <BoxRight href="/factory/more_exchange">
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
