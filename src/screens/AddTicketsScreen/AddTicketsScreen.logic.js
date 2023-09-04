import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../apis/APIConstant";
import APIBase from "../../base/APIBase";
import StorageValue from "../../Storage/StorageValue";

export const addTicketsLogic = (props) => {
  const _navigate = useNavigate();
  const [dataMissions, setDataMissions] = useState([]);

  const [dataBuyTickets, setDataBuyTickets] = useState([]);

  const [countBuyItem, setCountBuyItem] = useState(1);
  const getItemCanBuyList = async () => {
    try {
      let uriApi = `${API.baseURL}${API.itemCanBuy}`;

      const result = await APIBase.apiCaller("GET", uriApi);
      if (result?.status) {
        // console.log(result);
        console.log(result.data);
        setDataBuyTickets(result.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getMissionList = async () => {
    try {
      let uriApi = `${API.baseURL}${API.missionList}`;

      const result = await APIBase.apiCaller("GET", uriApi);
      if (result?.status) {
        // console.log(result);
        console.log(result.data);
        setDataMissions(result.data.filter((item) => item.received == 0));
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMissionList();
    getItemCanBuyList();
  }, []);

  // Handle Change Count Buy
  const handleChangeCountBuy = (type) => {
    if (type == "add") {
      setCountBuyItem(countBuyItem + 1);
    } else {
      if (countBuyItem > 1) {
        setCountBuyItem(countBuyItem - 1);
      }
    }
  };

  const handleGoBack = () => {
    _navigate(-1);
  };

  // Handle Buy Tickets
  const handleBuyTickets = async (method) => {
    console.log(method);
    try {
      let countTickets = method.discount > 0 ? method.value : countBuyItem;
      let dataBody = {
        type: "buy",
        id: method.id,
        number: countTickets,
        attrition_diamond:
          method.discount > 0 ? method.sale_price : method.price * countBuyItem,
      };
      let uriApi = `${API.baseURL}${API.buyItem}`;

      const result = await APIBase.apiCaller("POST", uriApi, dataBody);
      if (result?.status) {
        // console.log(result);
        console.log(result.data);
        getItemCanBuyList();
        StorageValue.updateMenu();
      } else {
        alert(result.msg);
      }
    } catch (e) {
      console.log(e);
      alert(e.msg);
    }
  };

  // Handle Do Mission
  const handleDoMission = async (mission) => {
    if (mission.status == 1) {
      try {
        let dataBody = {
          type: "mission",
          id: mission.id,
        };
        let uriApi = `${API.baseURL}${API.buyItem}`;

        const result = await APIBase.apiCaller("POST", uriApi, dataBody);
        if (result?.status) {
          // console.log(result);
          console.log(result.data);
          getMissionList();
          StorageValue.updateMenu();
        } else {
          alert(result.msg);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return {
    dataMissions,
    dataBuyTickets,
    countBuyItem,
    handleChangeCountBuy,
    handleGoBack,
    handleBuyTickets,
    handleDoMission,
  };
};
