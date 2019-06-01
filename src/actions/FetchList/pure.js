import * as types from 'constants/FetchListActionTypes';

export const fetchList = () => ({type: types.FETCH_LIST});
export const allowFetchListAgain = () => ({type: types.ALLOW_FETCH});