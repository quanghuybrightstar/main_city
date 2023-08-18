import {
  FactoryContainer,
  BoxRightHeader,
  ListGift,
  BoxPuzzle,
  PuzzleName,
  FrameBottom,
  PuzzleCount,
} from "./FactoryScreen.style";
import { factoryLogic } from "./FactoryScreen.logic";
import SmartBaseScreen from "../../base/SmartScreenBase";
import {
  RightContainer,
  HeaderRight,
  BaseTitleGame,
  ContentRightContainer,
} from "../../styles/GlobalStyle.style";
import SrcImage from "../../constants/SrcImage";
import MenuSelection from "../../components/MenuSelection/MenuSelection";
import { HeaderTitle } from "../../components/Header";
import ImageBase from "../../components/Image/ImageBase";
import SelectionType from "../../constants/Selection";
import { Link } from "react-router-dom";
import BoxRight from "../../components/BoxRight/BoxRight";
import API from "../../apis/APIConstant";

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  baseHeight = SmartBaseScreen.smBaseHeight,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const FactoryScreen = (props) => {
  let { dataGiftPuzzle, platformSelected, handleNavigate } =
    factoryLogic(props);

  const renderPuzzlePieces = (puzzle, index) => {
    return (
      <div
        key={puzzle.item_id}
        style={{
          position: "relative",
          width: 130 * baseWidth,
          height: 130 * baseWidth,
          border: `${1 * baseWidth}px solid #00b3b3`,
          borderRight: `${
            index != 4 && index != 9 ? 0 : 1 * baseWidth
          }px solid #00b3b3`,
          borderTop: `${index > 4 ? 0 : 1 * baseWidth}px solid #00b3b3`,
          // flexBasis: "15%",
          borderTopLeftRadius: `${puzzle.item_name == "A" && 10 * baseWidth}px`,
          borderTopRightRadius: `${
            puzzle.item_name == "E" && 10 * baseWidth
          }px`,
          borderBottomLeftRadius: `${
            puzzle.item_name == "F" && 10 * baseWidth
          }px`,
          borderBottomRightRadius: `${
            puzzle.item_name == "K" && 10 * baseWidth
          }px`,
        }}
      >
        <div
          style={{
            position: "absolute",
            display: puzzle.quantity_available <= 0 ? "block" : "none",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderTopLeftRadius: `${
              puzzle.item_name == "A" && 10 * baseWidth
            }px`,
            borderTopRightRadius: `${
              puzzle.item_name == "E" && 10 * baseWidth
            }px`,
            borderBottomLeftRadius: `${
              puzzle.item_name == "F" && 10 * baseWidth
            }px`,
            borderBottomRightRadius: `${
              puzzle.item_name == "K" && 10 * baseWidth
            }px`,
          }}
        ></div>
        <ImageBase
          src={`${API.baseURL}${puzzle?.item_image}`}
          alt="Ticket Image"
          widthProps={130}
          heightProps={130}
          marginProps={`0`}
          puzzle={puzzle}
        />

        <div
          style={{
            position: "absolute",
            top: -7 * baseWidth,
            left: 5 * baseWidth,
            fontSize: smFontSize * 35,
            textShadow: `2px 2px 5px black, 0 0 2px black, 0 0 2px black, 0 0 2px black,
            0 0 2px black`,
          }}
        >
          {puzzle.item_name}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "25%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PuzzleCount>{puzzle.quantity_available} mảnh</PuzzleCount>
        </div>
      </div>
    );
  };
  const renderListPuzzle = (dataPuzzle) => {
    return (
      <div
        key={dataPuzzle[0].parent_id}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: `${baseWidth * 30}px ${baseWidth * 150}px ${
            baseWidth * 60
          }px ${baseWidth * 50}px`,
          position: "relative",
        }}
      >
        <PuzzleName>{dataPuzzle && dataPuzzle[0]?.item_description}</PuzzleName>
        <BoxPuzzle>
          {dataPuzzle.map((puzzle, index) => renderPuzzlePieces(puzzle))}
        </BoxPuzzle>

        <FrameBottom>
          <ImageBase
            src={`${SrcImage.SrcFactoryScreen}/frameBottom.png`}
            alt="Ticket Image"
            widthProps={889}
            heightProps={125}
            marginProps={`0`}
          />
        </FrameBottom>
      </div>
    );
  };

  return (
    <FactoryContainer>
      <MenuSelection typeSelection={SelectionType.FACTORY} />
      <RightContainer>
        <HeaderRight>
          <HeaderTitle>{platformSelected?.platform?.name}</HeaderTitle>
          <BoxRight handleNavigate={handleNavigate}>
            Trao đổi mảnh ghép
          </BoxRight>
        </HeaderRight>

        <ContentRightContainer>
          <div
            style={{
              fontSize: smFontSize * 18,
              marginTop: `${baseWidth * 10}px`,
            }}
          >
            Hãy tìm kiếm và trao đổi mảnh ghép còn thiếu để có cơ hội nhận 2
            triệu đồng hoặc quà tặng đặc biệt 01 xe Lamborghini-Aventador hoặc
            căn hộ Vingome-riverside.
          </div>

          <ListGift>
            {dataGiftPuzzle.map((dataPuzzle) => renderListPuzzle(dataPuzzle))}
          </ListGift>
        </ContentRightContainer>
      </RightContainer>
    </FactoryContainer>
  );
};

export default FactoryScreen;
