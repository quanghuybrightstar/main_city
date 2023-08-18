/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import API from "../../apis/APIConstant";
import APIBase from "../../base/APIBase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPlatformSelected } from "../../redux/actions/actions";

export const homeScreenLogic = (props) => {
  const _navigate = useNavigate();
  const _dispatch = useDispatch();

  const [count, setCount] = useState(0);
  const [dataPlatformList, setDataPlatformList] = useState([]);

  useEffect(() => {
    const getDataFlatformList = async () => {
      let uriApi = `${API.baseURL}${API.platformList}`;
      const result = await APIBase.apiCaller("GET", uriApi);
      if (result.status) {
        setDataPlatformList(result.data);
        console.log(result.data);
      }
    };
    getDataFlatformList();
  }, []);

  const handleNavigate = (platform) => {
    console.log(platform?.type);
    _navigate(`/${platform?.type}`);
    _dispatch(setPlatformSelected(platform));
  };

  return {
    count,
    dataPlatformList,
    handleNavigate,
  };
};
