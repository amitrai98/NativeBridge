import * as types from "./HomeActions";

const initialState = {
  data: {},
  isFetching: false,
  success: false,
  failure: false,
  error: {}
};

export default function showConsoleReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SHOW_CONSOLE_INPROGRESS:
      return {
        ...state,
        data: {},
        success: false,
        failure: false,
        isFetching: true
      };
    case types.SHOW_CONSOLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        success: true,
        failure: false,
        data: action.data
      };
    case types.SHOW_CONSOLE_FAILURE:
      return {
        ...state,
        isFetching: false,
        success: false,
        failure: true,
        error: action.error
      };
    default:
      return state;
  }
}
