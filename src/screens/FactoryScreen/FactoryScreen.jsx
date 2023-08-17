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

SmartBaseScreen.baseSetup();
const baseWidth = SmartBaseScreen.smBaseWidth,
  baseHeight = SmartBaseScreen.smBaseHeight,
  perWidth = SmartBaseScreen.smPercentWidth,
  perHeight = SmartBaseScreen.smPercentHeight,
  smFontSize = SmartBaseScreen.smFontSize;

const FactoryScreen = (props) => {
  let { dataGiftPuzzle } = factoryLogic(props);

  const renderPuzzlePieces = (puzzle) => {
    return (
      <div
        key={puzzle.id}
        style={{
          position: "relative",
          width: 130 * baseWidth,
          height: 130 * baseWidth,
          border: `${1 * baseWidth}px solid #00b3b3`,
          borderRight: `${
            puzzle.id != 5 && puzzle.id != 10 ? 0 : 1 * baseWidth
          }px solid #00b3b3`,
          borderTop: `${puzzle.id > 5 ? 0 : 1 * baseWidth}px solid #00b3b3`,
          // flexBasis: "15%",
          borderTopLeftRadius: `${puzzle.type == "A" && 10 * baseWidth}px`,
          borderTopRightRadius: `${puzzle.type == "E" && 10 * baseWidth}px`,
          borderBottomLeftRadius: `${puzzle.type == "F" && 10 * baseWidth}px`,
          borderBottomRightRadius: `${puzzle.type == "K" && 10 * baseWidth}px`,
        }}
      >
        <div
          style={{
            position: "absolute",
            display: puzzle.count_puzzle <= 0 ? "block" : "none",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderTopLeftRadius: `${puzzle.type == "A" && 10 * baseWidth}px`,
            borderTopRightRadius: `${puzzle.type == "E" && 10 * baseWidth}px`,
            borderBottomLeftRadius: `${puzzle.type == "F" && 10 * baseWidth}px`,
            borderBottomRightRadius: `${
              puzzle.type == "K" && 10 * baseWidth
            }px`,
          }}
        ></div>
        <ImageBase
          src={`${SrcImage.SrcFactoryScreen}${puzzle.imgURL}`}
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
          {puzzle.type}
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
          <PuzzleCount>{puzzle.count_puzzle} mảnh</PuzzleCount>
        </div>
      </div>
    );
  };

  const renderListPuzzle = (dataPuzzle) => {
    return (
      <div
        key={dataPuzzle.id}
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
        <PuzzleName>{dataPuzzle.name}</PuzzleName>
        <BoxPuzzle>
          {dataPuzzle.data.map((puzzle) => renderPuzzlePieces(puzzle))}
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
          <HeaderTitle>Nhà máy hạnh phúc</HeaderTitle>
          <BoxRight href="/factory/exchange_puzzle">
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
