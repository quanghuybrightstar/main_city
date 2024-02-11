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

  const [isVisibleExplore, setIsVisibleExplore] = useState(
    APIBase.access_token ? false : true
  );
  const [isVisibleLogin, setIsVisibleLogin] = useState(false);
  const [dataPlatformList, setDataPlatformList] = useState([]);

  useEffect(() => {
    const getDataFlatformList = async () => {
      let uriApi = `${API.baseURL}${API.platformList}`;
      const result = await APIBase.apiCaller("GET", uriApi);
      if (result.status) {
        setDataPlatformList(result.data);
        // console.log(result.data);
      }
    };
    getDataFlatformList();
  }, []);

  useEffect(() => {
    if (APIBase.access_token != "" && APIBase.access_token) {
      setIsVisibleLogin(false);
      setIsVisibleExplore(false);
    }
  }, [APIBase.access_token]);

  const handleNavigate = (platform) => {
    // console.log(APIBase.access_token);
    if (APIBase.access_token == "" || !APIBase.access_token) {
      setIsVisibleLogin(true);
    } else {
      if (platform) {
        _navigate(`/${platform?.type}`);
        _dispatch(setPlatformSelected(platform));
      }
    }
  };

  const handleCloseModal = () => {
    setIsVisibleLogin(false);
  };

  //

  return {
    dataPlatformList,
    isVisibleLogin,
    isVisibleExplore,
    handleNavigate,
    handleCloseModal,
  };
};
