import { makeActionCreator } from "../../utility";
export const SUBMIT_CURRENT_SOW = "SUBMIT_CURRENT_SOW";
export const SUBMIT_CURRENT_SOW_SUCCESS = "SUBMIT_CURRENT_SOW_SUCCESS";
export const SUBMIT_CURRENT_SOW_FAILURE = "SUBMIT_CURRENT_SOW_FAILURE";

export const submitCurrentSow = makeActionCreator(SUBMIT_CURRENT_SOW, "currentSow");