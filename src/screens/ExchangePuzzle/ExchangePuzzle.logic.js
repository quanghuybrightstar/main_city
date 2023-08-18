import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getPlatformDetail from "../../base/GetPlatformDetail";
import { setDetailPlatform } from "../../redux/actions/actions";

export const exchangePuzzleLogic = (props) => {
  const _dispatch = useDispatch();
  const _navigate = useNavigate();
  const platformSelected = useSelector((state) => state.platformSelected);

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

  useEffect(() => {
    const getDetailPlatform = async () => {
      if (platformSelected.platform) {
        const detail = await getPlatformDetail(platformSelected.platform);
        _dispatch(setDetailPlatform(detail));
      }
    };

    getDetailPlatform();
  }, []);

  const handleGoBack = () => {
    _navigate(-1);
  };

  const handleNavigate = () => {
    _navigate("/more_exchange");
  };

  return {
    myExchangePuzzle,
    dataRequiredExchange,
    handleGoBack,
    handleNavigate,
  };
};
