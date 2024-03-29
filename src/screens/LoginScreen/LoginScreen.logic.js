import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../apis/APIConstant";
import ParamAuth from "../../constants/ParamAuth";
import axios from "axios";
import APIBase from "../../base/APIBase";
import { useDispatch, useSelector } from "react-redux";
import { setAuthToken } from "../../redux/actions/actions";
import localStorage from "redux-persist/es/storage";

export const loginScreenLogic = (props) => {
  const _dispatch = useDispatch();
  const _navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const urlApi = `${API.baseURL}${API.accessToken}`;

      const dataBody = {
        client_id: ParamAuth.client_id,
        client_secret: ParamAuth.client_secret,
        grant_type: ParamAuth.grant_type,
        password: " ",
        scope: ParamAuth.scope,
        username: "daoquanghuy29077@gmail.com",
      };

      const result = await APIBase.apiCaller("POST", urlApi, dataBody);
      // console.log(result);
      if (result) {
        _dispatch(setAuthToken(result.access_token));
        APIBase.updateAccessToken(result.access_token);
        localStorage.setItem("access_token", result.access_token);
        _navigate("/home");
      }
    } catch (e) {
      // console.log(e);
      if (e.message == "Network Error") {
        alert("Vui lòng kiểm tra kết nối Internet");
      }
    }
  };

  return { handleLogin };
};
