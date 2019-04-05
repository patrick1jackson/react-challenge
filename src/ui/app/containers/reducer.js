/**
 * reducer.js
 *
 * This file contains the reducer used to set values in the Redux store.
 * Note that the Redux store is immutable.
 */

import { fromJS } from 'immutable';

import { DISPATCH_ACTIONS } from './constants';

// TODO: Initialize more things in the Redux store if needed
const initialState = fromJS({
  luckyNumber: -1,
  username : ""
});

function reducer(state = initialState, action) {
  switch (action.type) {

    case DISPATCH_ACTIONS.RETURN_LUCKY_NUMBER:
      return [{
        luckyNumber : action.luckyNumber,
        username : action.username
      }]

    case "FAIL":
      return action.error

    /*case DISPATCH_ACTIONS.GET_LUCKY_NUMBER:
    //case "test":
      console.log("in get number");
      console.log(action.username);
      return action.result */
      // TODO: Set things in the Redux store

    default:
      return state;
  }
}


export default reducer;
