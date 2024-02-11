import ActionsConstant from "../../../constants/ActionsConstant";

const initialState = {
  access_token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsConstant.SET_AUTH_TOKEN:
      return { ...state, access_token: action.payload };
    case ActionsConstant.LOG_OUT:
      return { ...state, access_token: null };
    default:
      return state;
  }
};

export default authReducer;
