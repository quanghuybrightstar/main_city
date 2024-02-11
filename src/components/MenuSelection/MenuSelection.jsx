import ImageBase from "../Image/ImageBase";
import {
  FlexRowStyle,
  FlexBetweenStyle,
  FlexColStyle,
  RemainText,
  BaseTextSize38,
  BaseTextSize40,
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
} from "./MenuSelection.style";
import HeaderLogo from "../Header/HeaderLogo";
import AvatarUser from "../AvatarUser/AvatarUser";
import { menuSelectionLogic } from "./MenuSelection.logic";
import SelectionType from "../../constants/Selection";
import ButtonBase from "../Button/Button";
import { Link } from "react-router-dom";
import ColorBase from "../../styles/Color";
import API from "../../apis/APIConstant";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const MenuSelection = (props) => {
  let { dataSelection, handleSelectPlatform, handleNavigateAddTicket } =
    menuSelectionLogic(props);

  let { typeSelection } = props;

  const renderContent = (item) => {
    switch (item?.type) {
      case SelectionType.DIAMOND:
        return (
          <BaseTextSize40 className="font_radio_bold">
            {item?.diamond ? item?.diamond : "0"}
          </BaseTextSize40>
        );
      case SelectionType.BUILDING:
        return (
          <DetailSelection className="font_jura">
            Bạn vừa nhận thêm {item?.quantity ? item?.quantity : "0"} hộp quà
          </DetailSelection>
        );
      case SelectionType.SQUARE:
        return (
          <DetailSelection className="font_jura">
            Hạng {item?.ranking}{" "}
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
              {item?.current_ranking}
            </div>
          </DetailSelection>
        );
      case SelectionType.FACTORY:
        return (
          <RemainText
            countRemaining={`${
              item?.quantity ? item?.quantity : "0"
            } mảnh ghép mới`}
          />
        );
      default:
        return (
          <DetailSelection
            style={{
              zIndex: 2,
            }}
          >
            <RemainText
              countRemaining={`${
                item?.ticket_quantity ? item?.ticket_quantity : "0"
              } vé`}
              widthProps={120 * baseWidth}
            />
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
            <Link
              to="/add_ticket"
              style={{
                zIndex: 2,
              }}
            >
              <ButtonBase
                widthProps={98}
                onClick={() => handleNavigateAddTicket(item?.type)}
                heightProps={30}
              >
                <TextBtnSmall className="font_jura">Nhận vé</TextBtnSmall>
              </ButtonBase>
            </Link>
          </DetailSelection>
        );
    }
  };

  const renderSelection = (item) => {
    return (
      <Link
        to={
          item.type != SelectionType.DIAMOND && `/${item?.type?.toLowerCase()}`
        }
        key={item.id}
        style={{
          paddingLeft: 80 * baseWidth,
          paddingTop: 12 * baseWidth,
          marginRight: 60 * baseWidth,
          cursor: "pointer",
          color: ColorBase.whiteColor,
        }}
        onClick={() => handleSelectPlatform(item)}
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
              src={`${API.baseURL}${
                item?.type == typeSelection
                  ? item?.image_selected
                  : item?.image_default
              }`}
              alt="Item Image"
              widthProps={88}
              heightProps={83}
            />

            <ContentSlection>
              <div
                className="font_jura_bold"
                style={{
                  fontSize: smFontSize * 20,
                  fontWeight: 500,
                  color:
                    item?.type == typeSelection
                      ? ColorBase.menuName
                      : ColorBase.yellowPrimary,
                  textShadow: `1px 2px 5px rgba(0, 0, 0, 0.5), 0 0 2px rgba(0, 0, 0, 0.5)`,
                }}
              >
                {item?.name}
              </div>
              {renderContent(item)}
            </ContentSlection>
          </FlexRowStyle>

          {item?.type != SelectionType.DIAMOND && (
            <BtnNext onClick={() => handleSelectPlatform(item)}>
              <ImageBase
                src={`${SrcImage.BaseURL}/items/ico_next.png`}
                alt="Item Image"
                widthProps={34}
                heightProps={34}
              />
            </BtnNext>
          )}
        </FlexBetweenStyle>
      </Link>
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
          paddingLeft: 85 * baseWidth,
          paddingTop: 2 * baseWidth,
          paddingRight: 54 * baseWidth,
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
