import { createReducer } from "../../utility";
import { 
    SUBMIT_CURRENT_SOW,
    SUBMIT_CURRENT_SOW_FAILURE,
    SUBMIT_CURRENT_SOW_SUCCESS
} from "../actions"

import { fromJS } from "immutable";

export const currentSow = createReducer(null, {
    [SUBMIT_CURRENT_SOW](state) {
        console.log("in reducer");
    },
    [SUBMIT_CURRENT_SOW_FAILURE](state,{error}) {
        console.log("in failure")
    },
    [SUBMIT_CURRENT_SOW_SUCCESS](state,{sow}) {
        console.log("in success");
    }
})