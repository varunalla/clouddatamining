import { combineReducers } from "@reduxjs/toolkit";
import GeoSampleReducer from "./GeoSample.reducer";

const rootReducer = combineReducers({
    geoSample: GeoSampleReducer.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
