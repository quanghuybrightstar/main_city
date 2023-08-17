import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

class APIBase {
  static access_token = localStorage.getItem("access_token");


  static updateAccessToken(token) {
    APIBase.access_token = token;
  }

  static apiCaller(method, url, data, otherHeaders) {
    return new Promise((resolve, reject) => {
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Authorization": `Bearer ${APIBase.access_token}`,
      };
      axios({
        method,
        url,
        headers: {
          ...headers,
          ...otherHeaders,
        },
        data,
      })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
          // if (error.message == "Network Error") {
          //   alert("Thông báo", "Vui lòng kiểm tra kết nối Internet", [
          //     {
          //       text: "Đồng ý",
          //       style: "cancel",
          //     },
          //   ]);
          // }
        });
    });
  }
}

export default APIBase;
