import * as actionNames from 'constants/BooksListActionTypes';

export default function(state = false, action) {
  switch (action.type) {
    case actionNames.UPDATE_LIST: {
      return true;
    }
    default:
      return state;
  }
}