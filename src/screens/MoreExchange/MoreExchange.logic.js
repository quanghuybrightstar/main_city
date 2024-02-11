import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import API from "../../apis/APIConstant";
import APIBase from "../../base/APIBase";
import { getPlatformDetail } from "../../base/GetPlatformDetail";

export const moreExchangeLogic = (props) => {
  const _navigate = useNavigate();
  const platformSelected = useSelector((state) => state.platformSelected);

  const [allPuzzles, setAllPuzzles] = useState();
  const [exchangeGive, setExchangeGive] = useState({});
  const [exchangeGet, setExchangeGet] = useState({});
  const [typeSelecting, setTypeSelecting] = useState("get");

  useEffect(() => {
    const getDetailPlatform = async () => {
      if (platformSelected.platform) {
        const detail = await getPlatformDetail(platformSelected.platform);
        const giftPuzzle = detail.filter(
          (item) => item.item_category != "diamond"
        );
        setAllPuzzles(giftPuzzle);
      }
    };

    getDetailPlatform();
  }, []);

  const handleGoBack = () => {
    _navigate(-1);
  };

  const handleChangePuzzle = (type) => {
    setTypeSelecting(type);
  };

  const handleSelectPuzzle = (typeExchange, puzzle) => {
    // console.log(puzzle);
    if (typeExchange == "get") {
      setExchangeGet(puzzle);
    } else if (typeExchange == "give") {
      if (puzzle.quantity_available > 0) {
        setExchangeGive(puzzle);
      } else {
        alert("Vật phẩm không có đủ số lượng để trao đổi!");
      }
    }
  };

  const handleUploadExchange = async () => {
    if (
      Object.keys(exchangeGet).length != 0 &&
      Object.keys(exchangeGive).length != 0
    ) {
      try {
        let dataBody = {
          item_order_id: exchangeGive.platform_item_id,
          item_receive_id: exchangeGet.platform_item_id,
        };
        let uriApi = `${API.baseURL}${API.uploadExchange}`;
        const result = await APIBase.apiCaller("POST", uriApi, dataBody);
        if (result?.status) {
          // console.log(result);
          // console.log(result.data);
          _navigate(-1);
        } else {
          alert(result.msg);
        }
      } catch (e) {
        // console.log(e);
      }
    } else {
      alert("Vui lòng chọn đầy đủ mảnh ghép trao đổi");
    }
  };

  return {
    exchangeGive,
    exchangeGet,
    typeSelecting,
    allPuzzles,
    handleChangePuzzle,
    handleGoBack,
    handleSelectPuzzle,
    handleUploadExchange,
  };
};
