import ActionsConstant from "../../../constants/ActionsConstant";

const initialState = {
  platform: null,
  detailPlatform: null,
};

const platformSelected = (state = initialState, action) => {
  switch (action.type) {
    case ActionsConstant.SET_PLATFORM_SELECTED:
      return { ...state, platform: action.payload };

    case ActionsConstant.SET_DETAIL_PLATFORM:
      return { ...state, detailPlatform: action.payload };
    default:
      return state;
  }
};

export default platformSelected;
