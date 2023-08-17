import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const moreExchangeLogic = (props) => {
  const navigate = useNavigate();
  const [exchangeGive, setExchangeGive] = useState({});
  const [exchangeGet, setExchangeGet] = useState({});
  const [typeSelecting, setTypeSelecting] = useState("get");
  const [allPuzzle, setAllPuzzle] = useState([
    {
      id: 1,
      typeGift: "lambor",
      count_puzzle: 2,
      type: "A",
    },
    {
      id: 2,
      typeGift: "lambor",
      count_puzzle: 0,
      type: "B",
    },
    {
      id: 3,
      typeGift: "lambor",
      count_puzzle: 1,
      type: "C",
    },
    {
      id: 4,
      typeGift: "lambor",
      count_puzzle: 0,
      type: "D",
    },
    {
      id: 5,
      typeGift: "lambor",
      count_puzzle: 0,
      type: "E",
    },
    {
      id: 6,
      typeGift: "lambor",
      count_puzzle: 0,
      type: "F",
    },
    {
      id: 7,
      typeGift: "lambor",
      count_puzzle: 3,
      type: "G",
    },
    {
      id: 8,
      typeGift: "lambor",
      count_puzzle: 0,
      type: "H",
    },
    {
      id: 9,
      typeGift: "lambor",
      count_puzzle: 0,
      type: "I",
    },
    {
      id: 10,
      typeGift: "lambor",
      count_puzzle: 0,
      type: "K",
    },
    {
      id: 11,
      typeGift: "vinhome",
      count_puzzle: 2,
      type: "A",
    },

    {
      id: 12,
      typeGift: "vinhome",
      count_puzzle: 0,
      type: "B",
    },
    {
      id: 13,
      typeGift: "vinhome",
      count_puzzle: 1,
      type: "C",
    },
    {
      id: 14,
      typeGift: "vinhome",
      count_puzzle: 0,
      type: "D",
    },
    {
      id: 15,
      typeGift: "vinhome",
      count_puzzle: 0,
      type: "E",
    },
    {
      id: 16,
      typeGift: "vinhome",
      count_puzzle: 0,
      type: "F",
    },
    {
      id: 17,
      typeGift: "vinhome",
      count_puzzle: 3,
      type: "G",
    },
    {
      id: 18,
      typeGift: "vinhome",
      count_puzzle: 0,
      type: "H",
    },
    {
      id: 19,
      typeGift: "vinhome",
      count_puzzle: 0,
      type: "I",
    },
    {
      id: 20,
      typeGift: "vinhome",
      count_puzzle: 0,
      type: "K",
    },
    {
      id: 21,
      typeGift: "vinhome",
      count_puzzle: 0,
      type: "K",
    },
    {
      id: 22,
      typeGift: "vinhome",
      count_puzzle: 0,
      type: "K",
    },
    {
      id: 23,
      typeGift: "vinhome",
      count_puzzle: 0,
      type: "K",
    },
  ]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleChangePuzzle = (type) => {
    setTypeSelecting(type);
  };

  const handleSelectPuzzle = (typeExchange, puzzle) => {
    console.log(puzzle);
    if (typeExchange == "get") {
      setExchangeGet(puzzle);
    } else if (typeExchange == "give") {
      setExchangeGive(puzzle);
    }
  };

  return {
    exchangeGive,
    exchangeGet,
    typeSelecting,
    allPuzzle,
    handleChangePuzzle,
    handleGoBack,
    handleSelectPuzzle,
  };
};
