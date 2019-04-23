import { createSelector } from "reselect";
export const currentSowSelector = createSelector(
    state => state.get('currentSOW')
);