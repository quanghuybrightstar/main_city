import API from "../apis/APIConstant";
import APIBase from "./APIBase";

const getPlatformDetail = async (platform, page, limit) => {
  try {
    let dataResult = [];
    let uriApi = `${API.baseURL}${API.detailPlatform}?id_platform=${
      platform.id
    }&type=${platform.type}&page=${page}&limit=${limit || 10}`;
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

export default getPlatformDetail;
