/* eslint-disable no-useless-escape */
import { useState } from "react";
import ParamAuth from "../../constants/ParamAuth";
import APIBase from "../../base/APIBase";
import API from "../../apis/APIConstant";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "../../redux/actions/actions";

export const modalLoginLogic = (props) => {
  const _dispatch = useDispatch();
  const _navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errorMsg, setErrorMsg] = useState("");

  const validateEmail = (email) => {
    var regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;
    return regex.test(email);
  };

  const onChangeEmail = (value) => {
    if (validateEmail(value)) {
      setErrorMsg("");
    }
    setEmail(value);
  };

  const onChangePassword = (value) => {
    setPassword(value);
  };

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      setErrorMsg("Email không đúng định dạng!");
    } else {
      try {
        const urlApi = `${API.baseURL}${API.accessToken}`;

        const dataBody = {
          client_id: ParamAuth.client_id,
          client_secret: ParamAuth.client_secret,
          grant_type: ParamAuth.grant_type,
          password: password,
          scope: ParamAuth.scope,
          username: email,
        };

        const result = await APIBase.apiCaller("POST", urlApi, dataBody);
        console.log(result);
        if (result.access_token) {
          _dispatch(setAuthToken(result.access_token));
          APIBase.updateAccessToken(result.access_token);
          localStorage.setItem("access_token", result.access_token);
          _navigate("/");
        }
      } catch (e) {
        setErrorMsg("Email hoặc mật khẩu không chính xác!");
        if (e.message == "Network Error") {
          alert("Vui lòng kiểm tra kết nối Internet");
        }
      }
    }
  };

  return { errorMsg, onChangeEmail, onChangePassword, handleLogin };
};
