import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPlatformDetail } from "../../base/GetPlatformDetail";
import { setDetailPlatform } from "../../redux/actions/actions";
import API from "../../apis/APIConstant";
import APIBase from "../../base/APIBase";

export const exchangePuzzleLogic = (props) => {
  const _dispatch = useDispatch();
  const _navigate = useNavigate();
  const platformSelected = useSelector((state) => state.platformSelected);

  // const [myExchangePuzzle, setMyExchangePuzzle] = useState([
  //   {
  //     id: 1,
  //     typeGift: "lambor",
  //     typePuzzleGive: "F",
  //     typePuzzleGet: "H",
  //     time_upload: "24/02/2023",
  //     count_remaining: 3,
  //     is_completed: 1,
  //     is_mine: 1,
  //   },
  //   {
  //     id: 2,
  //     typeGift: "lambor",
  //     typePuzzleGive: "G",
  //     typePuzzleGet: "I",
  //     time_upload: "24/02/2023",
  //     count_remaining: 3,
  //     is_completed: 0,
  //     is_mine: 1,
  //   },
  // ]);

  // const [dataRequiredExchange, setDataRequiredExchange] = useState([
  //   {
  //     id: 1,
  //     typeGift: "lambor",
  //     typePuzzleGive: "F",
  //     typePuzzleGet: "H",
  //     time_upload: "24/02/2023",
  //     user_upload: "Wang Huy",
  //     count_remaining: 0,
  //     is_completed: 0,
  //   },
  //   {
  //     id: 2,
  //     typeGift: "lambor",
  //     typePuzzleGive: "G",
  //     typePuzzleGet: "I",
  //     time_upload: "24/02/2023",
  //     user_upload: "Wang Huy",
  //     count_remaining: 0,
  //     is_completed: 0,
  //   },
  //   {
  //     id: 3,
  //     typeGift: "lambor",
  //     typePuzzleGive: "G",
  //     typePuzzleGet: "I",
  //     time_upload: "24/02/2023",
  //     user_upload: "Wang Huy",
  //     count_remaining: 0,
  //     is_completed: 0,
  //   },

  //   {
  //     id: 4,
  //     typeGift: "lambor",
  //     typePuzzleGive: "G",
  //     typePuzzleGet: "I",
  //     time_upload: "24/02/2023",
  //     user_upload: "Wang Huy",
  //     count_remaining: 0,
  //     is_completed: 0,
  //   },
  // ]);

  const [myExchangePuzzle, setMyExchangePuzzle] = useState();

  const [dataRequiredExchange, setDataRequiredExchange] = useState();

  const getListExchange = async () => {
    try {
      let uriApi = `${API.baseURL}${API.listExchange}?platform_id=${platformSelected.platform.id}`;

      const result = await APIBase.apiCaller("GET", uriApi);
      if (result?.status) {
        // console.log(result);
        // console.log(result.data);

        const lists = result.data;

        setMyExchangePuzzle(lists.filter((item) => item.collection == "local"));

        setDataRequiredExchange(
          lists.filter((item) => item.collection == "global")
        );
      } else {
        alert(result.msg);
      }
    } catch (e) {
      // console.log(e);
    }
  };
  useEffect(() => {
    const getDetailPlatform = async () => {
      if (platformSelected.platform) {
        const detail = await getPlatformDetail(platformSelected.platform);
        _dispatch(setDetailPlatform(detail));
      }
    };

    getListExchange();

    getDetailPlatform();
  }, []);

  const handleGoBack = () => {
    _navigate(-1);
  };

  const handleNavigate = () => {
    _navigate("/more_exchange");
  };

  const handleExchange = async (exchange, type) => {
    try {
      let dataBody = {
        id: exchange.id,
        action: type,
      };
      let uriApi = `${API.baseURL}${API.doExchange}`;
      if (type == "request") {
        if (exchange.quantity_available > 0) {
          const result = await APIBase.apiCaller("POST", uriApi, dataBody);
          if (result?.status) {
            // console.log(result.data);
            getListExchange();
            alert("Trao đổi thành công!");
          } else {
            alert(result.msg);
          }
        }
      } else {
        const result = await APIBase.apiCaller("POST", uriApi, dataBody);
        if (result?.status) {
          // console.log(result.data);
          getListExchange();
          alert("Trao đổi thành công!");
        } else {
          getListExchange();
          alert(result.msg);
        }
      }
    } catch (e) {
      // console.log(e);
    }

    // console.log(exchange);
  };

  return {
    myExchangePuzzle,
    dataRequiredExchange,
    handleGoBack,
    handleNavigate,
    handleExchange,
  };
};
