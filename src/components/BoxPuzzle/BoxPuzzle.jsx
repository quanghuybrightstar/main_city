import ImageBase from "../Image/ImageBase";
import { FlexRowStyle, BaseTitleGame } from "../../styles/GlobalStyle.style";
import SrcImage from "../../constants/SrcImage";
import SmartBaseScreen from "../../base/SmartScreenBase";
import { BoxBorderPuzzle, TextTypePuzzle } from "./BoxPuzzle.style";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const BoxPuzzle = ({
  exchange,
  marginProps,
  widthProps,
  heightProps,
  borderColorPropsProps,
  typePuzzle,
  widthBoxProps,
  heightBoxProps,
  isTextType,
  marginBoxProps,
}) => {
  return (
    <BoxBorderPuzzle
      widthBoxProps={widthBoxProps}
      heightBoxProps={heightBoxProps}
      borderColorProps={borderColorPropsProps}
      marginBoxProps={marginBoxProps}
    >
      {exchange.typeGift ? (
        <ImageBase
          src={`${SrcImage.SrcFactoryScreen}/${exchange?.typeGift}/puzzle${typePuzzle}.png`}
          alt="Puzzle Image"
          widthProps={widthProps}
          heightProps={heightProps}
          marginProps={marginProps}
          borderRadiusProps={5 * baseWidth}
        />
      ) : (
        <div
          style={{
            width: widthProps * baseWidth,
            height: heightProps * baseWidth,
            borderRadius: 5 * baseWidth,
            backgroundColor: "#8c8c8c",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: smFontSize * 40,
              color: "#4d4d4d",
            }}
          >
            ?
          </div>
        </div>
      )}
      {isTextType && (
        <TextTypePuzzle borderColorProps={borderColorPropsProps}>
          {typePuzzle}
        </TextTypePuzzle>
      )}
    </BoxBorderPuzzle>
  );
};

export default BoxPuzzle;
