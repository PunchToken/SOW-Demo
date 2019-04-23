import * as sagas from "./redux/sagas";

export const initSagas = (sagaMiddleware) => {
    Object.values(sagas).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}