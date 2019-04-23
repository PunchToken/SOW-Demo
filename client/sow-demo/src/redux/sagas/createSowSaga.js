import { delay } from "redux-saga";
import { take, put, call, apply}  from "redux-saga/effects";
import fetch                        from "isomorphic-fetch";
import {
    SUBMIT_CURRENT_SOW,
    SUBMIT_CURRENT_SOW_FAILURE,
    SUBMIT_CURRENT_SOW_SUCCESS,
    submitCurrentSow
} from "../actions"

export function* createSowSaga() {
    const { createdSow } = yield take(SUBMIT_CURRENT_SOW);
    const response = yield fetch(`http://localhost:9090/api/sow`);
    const {sow } = yield response.json();
    yield put(submitCurrentSow(sow)); 

}