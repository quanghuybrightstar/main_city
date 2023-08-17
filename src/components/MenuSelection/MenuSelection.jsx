import ImageBase from "../Image/ImageBase";
import {
  FlexRowStyle,
  FlexBetweenStyle,
  FlexColStyle,
  RemainText,
  BaseTextSize38,
} from "../../styles/GlobalStyle.style";
import SrcImage from "../../constants/SrcImage";
import SmartBaseScreen from "../../base/SmartScreenBase";
import {
  MenuContainer,
  ListSelection,
  ContentSlection,
  DetailSelection,
  TextBtnSmall,
  BtnNext,
  TextUnderline,
} from "./MenuSelection.style";
import HeaderLogo from "../Header/HeaderLogo";
import AvatarUser from "../AvatarUser/AvatarUser";
import { menuSelectionLogic } from "./MenuSelection.logic";
import SelectionType from "../../constants/Selection";
import ButtonBase from "../Button/Button";
import { TextBtn } from "../../screens/HomeScreen/HomeScreen.style";
import { Link } from "react-router-dom";
import ColorBase from "../../styles/Color";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const MenuSelection = (props) => {
  let { dataSelection } = menuSelectionLogic(props);

  let { typeSelection } = props;

  const renderContent = (item) => {
    switch (item.category_alias) {
      case SelectionType.DIAMOND:
        return <BaseTextSize38>{item.diamond}</BaseTextSize38>;
      case SelectionType.BUILDING:
        return (
          <DetailSelection>
            Bạn vừa nhận thêm {item.quantity} hộp quà
          </DetailSelection>
        );
      case SelectionType.SQUARE:
        return (
          <DetailSelection>
            Hạng {item.ranking}{" "}
            <div
              style={{
                fontSize: smFontSize * 14,
              }}
            >
              <ImageBase
                src={`${SrcImage.BaseURL}/items/ico_increase.png`}
                alt="Increase Icon"
                widthProps={12}
                heightProps={23}
                marginProps={`0 0 0 ${20 * baseWidth}px`}
              />
              {item.number_increase}
            </div>
          </DetailSelection>
        );
      case SelectionType.FACTORY:
        return (
          <RemainText countRemaining={`${item.new_puzzle} mảnh ghép mới`} />
        );
      default:
        return (
          <DetailSelection>
            <RemainText countRemaining={`${item.ticket_remaining} vé`} />
            <ImageBase
              src={`${SrcImage.BaseURL}/${
                item?.type == typeSelection
                  ? "ticket_selected.png"
                  : "ticket.png"
              }`}
              alt="Ticket Image"
              widthProps={52}
              heightProps={56}
              marginProps={`0 ${8 * baseWidth}px`}
            />
            <Link to="/add_ticket">
              <ButtonBase
                widthProps={98}
                onClick={() => {
                  console.log("123");
                }}
                heightProps={30}
              >
                <TextBtnSmall>Nhận vé</TextBtnSmall>
              </ButtonBase>
            </Link>
          </DetailSelection>
        );
    }
  };

  const renderSelection = (item) => {
    return (
      <div
        key={item.id}
        style={{
          paddingLeft: 80 * baseWidth,
          paddingTop: 12 * baseWidth,
          paddingRight: 60 * baseWidth,
        }}
      >
        <FlexBetweenStyle>
          {item?.type == typeSelection && (
            <div style={{ position: "absolute", left: -68 * baseWidth }}>
              <FlexRowStyle>
                <ImageBase
                  src={`${SrcImage.BaseURL}/items/ico_selected.png`}
                  alt="Selected Icon"
                  widthProps={52}
                  heightProps={56}
                />
              </FlexRowStyle>
            </div>
          )}
          <FlexRowStyle>
            <ImageBase
              src={`${SrcImage.BaseURL}${
                item?.type == typeSelection ? item.imgUrlSelected : item.imgUrl
              }`}
              alt="Item Image"
              widthProps={88}
              heightProps={83}
            />

            <ContentSlection>
              <div
                style={{
                  fontSize: smFontSize * 20,
                  fontWeight: 500,
                  color:
                    item?.type == typeSelection
                      ? "#38BAD4"
                      : ColorBase.yellowPrimary,
                }}
              >
                {item.title}
              </div>
              {renderContent(item)}
            </ContentSlection>
          </FlexRowStyle>

          {item.type != SelectionType.DIAMOND && (
            <BtnNext onClick={() => console.log("next")}>
              <Link to={`/${item?.type.toLowerCase()}`}>
                <ImageBase
                  src={`${SrcImage.BaseURL}/items/ico_next.png`}
                  alt="Item Image"
                  widthProps={34}
                  heightProps={34}
                />
              </Link>
            </BtnNext>
          )}
        </FlexBetweenStyle>
      </div>
    );
  };

  return (
    <MenuContainer>
      <div
        style={{
          paddingLeft: 85 * baseWidth,
          paddingTop: 55 * baseWidth,
        }}
      >
        <HeaderLogo />
      </div>

      <div
        style={{
          paddingLeft: 110 * baseWidth,
          paddingTop: 2 * baseWidth,
        }}
      >
        <AvatarUser />
      </div>

      <ListSelection>
        {dataSelection?.map((item) => renderSelection(item))}
      </ListSelection>
    </MenuContainer>
  );
};

export default MenuSelection;
