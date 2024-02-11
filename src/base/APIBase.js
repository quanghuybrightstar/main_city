import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

const $ = document.querySelector.bind(document);

class APIBase {
  static access_token = localStorage.getItem("access_token");

  static updateAccessToken(token) {
    APIBase.access_token = token;
  }

  static apiCaller(method, url, data, otherHeaders) {
    return new Promise((resolve, reject) => {
      $(".loading").classList.remove("hide");
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${APIBase.access_token}`,
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
          $(".loading").classList.add("hide");
          resolve(response.data);
        })
        .catch((error) => {
          // $(".loading").classList.remove("hide");
          reject(error);
          if (error.message == "Network Error") {
            alert("Vui lòng kiểm tra kết nối Internet");
          }
        });
    });
  }
}

export default APIBase;
