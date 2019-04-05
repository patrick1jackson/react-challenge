/**
 * actions.js
 *
 * This file contains the various actions used by Redux.
 */

import { DISPATCH_ACTIONS } from './constants';

export function getLuckyNumber(username) {
  return {
    type: DISPATCH_ACTIONS.GET_LUCKY_NUMBER,
    username
  };
}

export function returnLuckyNumber(luckyNumber, username) {
  return {
    type: DISPATCH_ACTIONS.RETURN_LUCKY_NUMBER,
    luckyNumber,
    username
  };
}

export function failedToGetCall(error) {
  return {
    type: "FAIL",
    error
  };
}

// TODO: Add more actions if needed
