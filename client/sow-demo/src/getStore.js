import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from 'redux-logger';
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";
import { Iterable } from "immutable";

import { getQuery } from "./utility";
import { reducer } from './combineReducers';
import { defaultState } from "./deafultState";
import { initSagas } from "./initSagas";

const stateTransformer = state => {
    if(Iterable.isIterable(state)) return state.toJS();
    else return state;
}

const logger = createLogger({
    stateTransformer,
});

export const getStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const middleWares = [sagaMiddleware, thunk];
    if(getQuery()['logger']) {middleWares.push(logger)}
    const composables = [applyMiddleware(...middleWares)]
    const enhancer = compose(
        ...composables
    );
    const store = createStore(
        reducer,
        defaultState,
        enhancer
    );

    // sagas can only be initalied after middle ware has been placed inside the store.
    initSagas(sagaMiddleware);

    return store;
}