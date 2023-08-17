import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const exchangePuzzleLogic = (props) => {
  const navigate = useNavigate();

  const [myExchangePuzzle, setMyExchangePuzzle] = useState([
    {
      id: 1,
      typeGift: "lambor",
      typePuzzleGive: "F",
      typePuzzleGet: "H",
      time_upload: "24/02/2023",
      count_remaining: 3,
      is_completed: 1,
      is_mine: 1,
    },
    {
      id: 2,
      typeGift: "lambor",
      typePuzzleGive: "G",
      typePuzzleGet: "I",
      time_upload: "24/02/2023",
      count_remaining: 3,
      is_completed: 0,
      is_mine: 1,
    },
  ]);

  const [dataRequiredExchange, setDataRequiredExchange] = useState([
    {
      id: 1,
      typeGift: "lambor",
      typePuzzleGive: "F",
      typePuzzleGet: "H",
      time_upload: "24/02/2023",
      user_upload: "Wang Huy",
      count_remaining: 0,
      is_completed: 0,
    },
    {
      id: 2,
      typeGift: "lambor",
      typePuzzleGive: "G",
      typePuzzleGet: "I",
      time_upload: "24/02/2023",
      user_upload: "Wang Huy",
      count_remaining: 0,
      is_completed: 0,
    },
    {
      id: 3,
      typeGift: "lambor",
      typePuzzleGive: "G",
      typePuzzleGet: "I",
      time_upload: "24/02/2023",
      user_upload: "Wang Huy",
      count_remaining: 0,
      is_completed: 0,
    },

    {
      id: 4,
      typeGift: "lambor",
      typePuzzleGive: "G",
      typePuzzleGet: "I",
      time_upload: "24/02/2023",
      user_upload: "Wang Huy",
      count_remaining: 0,
      is_completed: 0,
    },
  ]);

  const handleGoBack = () => {
    navigate(-1);
  };

  return {
    myExchangePuzzle,
    dataRequiredExchange,
    handleGoBack,
  };
};
