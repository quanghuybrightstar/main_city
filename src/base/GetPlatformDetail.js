import API from "../apis/APIConstant";
import APIBase from "./APIBase";

const getPlatformDetail = async (platform) => {
  try {
    let dataResult = [];
    let uriApi = `${API.baseURL}${API.detailPlatform}?id_platform=${platform.id}&type=${platform.type}`;
    console.log(platform);

    const result = await APIBase.apiCaller("GET", uriApi);
    if (result?.status) {
      // console.log(result);
      dataResult = result.data;
    }

    return dataResult;
  } catch (e) {
    console.log(e);
  }
};

const getSquareDetail = async (platform, page, limit, filter) => {
  try {
    let dataResult = [];
    let uriApi = `${API.baseURL}${API.squareDetail}?id_platform=${
      platform.id
    }&page=${page}&limit=${limit || 10}&filter=${filter || "all"}`;
    console.log(platform);

    const result = await APIBase.apiCaller("GET", uriApi);
    if (result?.status) {
      // console.log(result);
      dataResult = result.data;
    }

    return dataResult;
  } catch (e) {
    console.log(e);
  }
};

export { getPlatformDetail, getSquareDetail };
