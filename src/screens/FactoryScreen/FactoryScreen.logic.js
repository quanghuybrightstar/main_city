import { useState } from "react";

export const factoryLogic = (props) => {
  const [dataGiftPuzzle, setDataGiftPuzzle] = useState([
    {
      id: "1",
      name: "Lamborghini Aventator",
      data: [
        {
          id: 1,
          imgURL: "/lambor/puzzleA.png",
          count_puzzle: 2,
          type: "A",
        },
        {
          id: 2,
          imgURL: "/lambor/puzzleB.png",
          count_puzzle: 0,
          type: "B",
        },
        {
          id: 3,
          imgURL: "/lambor/puzzleC.png",
          count_puzzle: 1,
          type: "C",
        },
        {
          id: 4,
          imgURL: "/lambor/puzzleD.png",
          count_puzzle: 0,
          type: "D",
        },
        {
          id: 5,
          imgURL: "/lambor/puzzleE.png",
          count_puzzle: 0,
          type: "E",
        },
        {
          id: 6,
          imgURL: "/lambor/puzzleF.png",
          count_puzzle: 0,
          type: "F",
        },
        {
          id: 7,
          imgURL: "/lambor/puzzleG.png",
          count_puzzle: 3,
          type: "G",
        },
        {
          id: 8,
          imgURL: "/lambor/puzzleH.png",
          count_puzzle: 0,
          type: "H",
        },
        {
          id: 9,
          imgURL: "/lambor/puzzleI.png",
          count_puzzle: 0,
          type: "I",
        },
        {
          id: 10,
          imgURL: "/lambor/puzzleK.png",
          count_puzzle: 0,
          type: "K",
        },
      ],
    },
    {
      id: "2",
      name: "Vinhome Riverside",
      data: [
        {
          id: 1,
          imgURL: "/vinhome/puzzleA.png",
          count_puzzle: 2,
          type: "A",
        },

        {
          id: 2,
          imgURL: "/vinhome/puzzleB.png",
          count_puzzle: 0,
          type: "B",
        },
        {
          id: 3,
          imgURL: "/vinhome/puzzleC.png",
          count_puzzle: 1,
          type: "C",
        },
        {
          id: 4,
          imgURL: "/vinhome/puzzleD.png",
          count_puzzle: 0,
          type: "D",
        },
        {
          id: 5,
          imgURL: "/vinhome/puzzleE.png",
          count_puzzle: 0,
          type: "E",
        },
        {
          id: 6,
          imgURL: "/vinhome/puzzleF.png",
          count_puzzle: 0,
          type: "F",
        },
        {
          id: 7,
          imgURL: "/vinhome/puzzleG.png",
          count_puzzle: 3,
          type: "G",
        },
        {
          id: 8,
          imgURL: "/vinhome/puzzleH.png",
          count_puzzle: 0,
          type: "H",
        },
        {
          id: 9,
          imgURL: "/vinhome/puzzleI.png",
          count_puzzle: 0,
          type: "I",
        },
        {
          id: 10,
          imgURL: "/vinhome/puzzleK.png",
          count_puzzle: 0,
          type: "K",
        },
      ],
    },
  ]);

  return {
    dataGiftPuzzle,
  };
};
