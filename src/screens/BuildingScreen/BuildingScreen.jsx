import {
  BuildingContainer,
  ContentRightBuilding,
  FilterRight,
  FilterItem,
  ListVouchers,
} from "./BuildingScreen.style";
import { buildingLogic } from "./BuildingScreen.logic";
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
import SelectCustom from "../../components/SelectCustom/SelectCustom";
import OptionSelect from "../../constants/OptionSelect";
import { useSelector } from "react-redux";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  baseHeight = SmartBaseScreen.smBaseHeight,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const BuildingScreen = (props) => {
  let {
    timeSort,
    typeGift,
    isOpenSelectTime,
    isOpenSelectGift,
    dataVoucher,
    handleOpenSelectModal,
    handleChangeFilterTime,
    handleChangeFilterGift,
  } = buildingLogic(props);

  const access_token = useSelector((state) => state.authReducer);

  console.log(access_token);

  const renderItemVoucher = (voucher) => {
    return (
      <div
        key={voucher.id}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: `${baseWidth * 10}px ${baseWidth * 30}px ${
            baseWidth * 10
          }px ${baseWidth * 20}px `,
          width: baseWidth * 450,
          height: baseWidth * 160,
          background: `url(${SrcImage.BaseURL}/borderBlue.png) no-repeat top center /contain`,
          margin: `0 ${baseWidth * 30}px ${baseWidth * 30}px 0`,
        }}
      >
        <ImageBase
          src={`${SrcImage.SrcBuildingScreen}${voucher.imgURL}`}
          alt="Ticket Image"
          widthProps={140}
          heightProps={140}
          marginProps={`0 ${20 * baseWidth}px 0 ${10 * baseWidth}px`}
        />

        <FlexColStyle>
          <BaseTitleGame>{voucher.name}</BaseTitleGame>

          <BaseTextSize18>{voucher.detail}</BaseTextSize18>
        </FlexColStyle>
      </div>
    );
  };

  return (
    <BuildingContainer>
      <MenuSelection typeSelection={SelectionType.BUILDING} />
      <RightContainer>
        <HeaderRight>
          <HeaderTitle>Cao ốc vui vẻ</HeaderTitle>
        </HeaderRight>

        <ContentRightBuilding>
          <FilterRight>
            <FilterItem>
              <BaseTextSize20>Sắp xếp theo: {timeSort}</BaseTextSize20>
              <PseudoClick onClick={() => handleOpenSelectModal("time")}>
                <ImageBase
                  src={`${SrcImage.BaseURL}/ico_arrow_down.png`}
                  alt="Minus Icon"
                  widthProps={34}
                  heightProps={34}
                  marginProps={`0 0 0 ${baseWidth * 25}px`}
                />
              </PseudoClick>

              <SelectCustom
                isVisible={isOpenSelectTime}
                dataSelect={OptionSelect.optionTimeFilter}
                handleClickType={(type) => handleChangeFilterTime(type)}
              />
            </FilterItem>

            <FilterItem>
              <BaseTextSize20>Dạng quà tặng: {typeGift}</BaseTextSize20>
              <PseudoClick onClick={() => handleOpenSelectModal("gift")}>
                <ImageBase
                  src={`${SrcImage.BaseURL}/ico_arrow_down.png`}
                  alt="Minus Icon"
                  widthProps={34}
                  heightProps={34}
                  marginProps={`0 0 0 ${baseWidth * 25}px`}
                />
              </PseudoClick>

              <SelectCustom
                isVisible={isOpenSelectGift}
                dataSelect={OptionSelect.optionGiftFilter}
                handleClickType={(type) => handleChangeFilterGift(type)}
              />
            </FilterItem>
          </FilterRight>

          <ListVouchers>
            {dataVoucher.map((voucher) => renderItemVoucher(voucher))}
          </ListVouchers>
        </ContentRightBuilding>
      </RightContainer>
    </BuildingContainer>
  );
};

export default BuildingScreen;