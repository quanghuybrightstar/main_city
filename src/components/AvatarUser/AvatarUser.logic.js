import API from "../../apis/APIConstant";
import APIBase from "../../base/APIBase";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions/actions";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

export const avatarUserLogic = (props) => {
  const _dispatch = useDispatch();
  const _navigate = useNavigate();
  const cookies = new Cookies(null, {
    path: "/",
    domain: "game.gkcorp.com.vn",
  });

  const [dataUser, setDataUser] = useState();

  const getDataUser = async () => {
    try {
      let uriApi = `${API.baseURL}${API.getInforUser}`;
      const result = await APIBase.apiCaller("GET", uriApi);
      if (result?.status) {
        // console.log(result);
        setDataUser(result.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDataUser();
  }, []);

  const handleLogout = () => {
    _dispatch(logout());
    localStorage.removeItem("access_token");
    APIBase.updateAccessToken(null);
    cookies.remove("access_token");
    _navigate("/");
  };

  return {
    dataUser,
    handleLogout,
  };
};
