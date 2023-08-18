import { useState, useEffect } from "react";
import TypeTime from "../../constants/TypeTime";
import { useDispatch, useSelector } from "react-redux";
import getPlatformDetail from "../../base/GetPlatformDetail";
import { setDetailPlatform } from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import SelectionType from "../../constants/Selection";

export const factoryLogic = (props) => {
  const _dispatch = useDispatch();
  const _navigate = useNavigate();

  // const [dataGiftPuzzle, setDataGiftPuzzle] = useState([
  //   {
  //     id: "1",
  //     name: "Lamborghini Aventator",
  //     data: [
  //       {
  //         id: 1,
  //         imgURL: "/lambor/puzzleA.png",
  //         count_puzzle: 2,
  //         type: "A",
  //       },
  //       {
  //         id: 2,
  //         imgURL: "/lambor/puzzleB.png",
  //         count_puzzle: 0,
  //         type: "B",
  //       },
  //       {
  //         id: 3,
  //         imgURL: "/lambor/puzzleC.png",
  //         count_puzzle: 1,
  //         type: "C",
  //       },
  //       {
  //         id: 4,
  //         imgURL: "/lambor/puzzleD.png",
  //         count_puzzle: 0,
  //         type: "D",
  //       },
  //       {
  //         id: 5,
  //         imgURL: "/lambor/puzzleE.png",
  //         count_puzzle: 0,
  //         type: "E",
  //       },
  //       {
  //         id: 6,
  //         imgURL: "/lambor/puzzleF.png",
  //         count_puzzle: 0,
  //         type: "F",
  //       },
  //       {
  //         id: 7,
  //         imgURL: "/lambor/puzzleG.png",
  //         count_puzzle: 3,
  //         type: "G",
  //       },
  //       {
  //         id: 8,
  //         imgURL: "/lambor/puzzleH.png",
  //         count_puzzle: 0,
  //         type: "H",
  //       },
  //       {
  //         id: 9,
  //         imgURL: "/lambor/puzzleI.png",
  //         count_puzzle: 0,
  //         type: "I",
  //       },
  //       {
  //         id: 10,
  //         imgURL: "/lambor/puzzleK.png",
  //         count_puzzle: 0,
  //         type: "K",
  //       },
  //     ],
  //   },
  //   {
  //     id: "2",
  //     name: "Vinhome Riverside",
  //     data: [
  //       {
  //         id: 1,
  //         imgURL: "/vinhome/puzzleA.png",
  //         count_puzzle: 2,
  //         type: "A",
  //       },

  //       {
  //         id: 2,
  //         imgURL: "/vinhome/puzzleB.png",
  //         count_puzzle: 0,
  //         type: "B",
  //       },
  //       {
  //         id: 3,
  //         imgURL: "/vinhome/puzzleC.png",
  //         count_puzzle: 1,
  //         type: "C",
  //       },
  //       {
  //         id: 4,
  //         imgURL: "/vinhome/puzzleD.png",
  //         count_puzzle: 0,
  //         type: "D",
  //       },
  //       {
  //         id: 5,
  //         imgURL: "/vinhome/puzzleE.png",
  //         count_puzzle: 0,
  //         type: "E",
  //       },
  //       {
  //         id: 6,
  //         imgURL: "/vinhome/puzzleF.png",
  //         count_puzzle: 0,
  //         type: "F",
  //       },
  //       {
  //         id: 7,
  //         imgURL: "/vinhome/puzzleG.png",
  //         count_puzzle: 3,
  //         type: "G",
  //       },
  //       {
  //         id: 8,
  //         imgURL: "/vinhome/puzzleH.png",
  //         count_puzzle: 0,
  //         type: "H",
  //       },
  //       {
  //         id: 9,
  //         imgURL: "/vinhome/puzzleI.png",
  //         count_puzzle: 0,
  //         type: "I",
  //       },
  //       {
  //         id: 10,
  //         imgURL: "/vinhome/puzzleK.png",
  //         count_puzzle: 0,
  //         type: "K",
  //       },
  //     ],
  //   },
  // ]);

  const [dataGiftPuzzle, setDataGiftPuzzle] = useState([]);

  const platformSelected = useSelector((state) => state.platformSelected);

  useEffect(() => {
    const getDetailPlatform = async () => {
      if (platformSelected.platform) {
        const detail = await getPlatformDetail(platformSelected.platform);
        _dispatch(setDetailPlatform(detail));
        const giftPuzzle = detail;
        giftPuzzle.map((puzzle, index, array) => {
          if (puzzle.item_name == "A") {
            const newListPuzzle = array.slice(index, index + 10);
            setDataGiftPuzzle((prev) => [...prev, newListPuzzle]);
          }
        });
      }
    };

    getDetailPlatform();
  }, []);

  console.log(dataGiftPuzzle);

  const handleNavigate = () => {
    _navigate(`/exchange_puzzle`);
  };

  return {
    dataGiftPuzzle,
    platformSelected,
    handleNavigate,
  };
};
