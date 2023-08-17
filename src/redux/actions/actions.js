import ActionsConstant from "../../constants/ActionsConstant";

export const setAuthToken = (token) => ({
  type: ActionsConstant.SET_AUTH_TOKEN,
  payload: token,
});
