import ActionsConstant from "../../../constants/ActionsConstant";

const initialState = {
  access_token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionsConstant.SET_AUTH_TOKEN:
      return { ...state, access_token: action.payload };
    default:
      return state;
  }
};

export default authReducer;
