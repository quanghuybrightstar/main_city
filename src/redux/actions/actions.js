import ActionsConstant from "../../constants/ActionsConstant";

export const setAuthToken = (token) => ({
  type: ActionsConstant.SET_AUTH_TOKEN,
  payload: token,
});

export const setPlatformSelected = (platform) => ({
  type: ActionsConstant.SET_PLATFORM_SELECTED,
  payload: platform,
});

export const setDetailPlatform = (detail) => ({
  type: ActionsConstant.SET_DETAIL_PLATFORM,
  payload: detail,
});
