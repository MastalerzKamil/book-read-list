import * as actionNames from 'constants/FetchListActionTypes';

export default function(state = false, action) {
  switch (action.type) {
    case actionNames.FETCH_LIST: {
      return true;
    }
    default:
      return state;
  }
}