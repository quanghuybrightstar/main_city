import ActionsConstant from "../../../constants/ActionsConstant";

const initialState = {
  allPuzzles: null,
};

const getAllPuzlles = (state = initialState, action) => {
  switch (action.type) {
    case ActionsConstant.SET_ALL_PUZZLES:
      return { ...state, allPuzzles: action.payload };
    default:
      return state;
  }
};

export default getAllPuzlles;
