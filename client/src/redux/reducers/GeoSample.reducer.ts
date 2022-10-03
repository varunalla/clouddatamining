
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GeoJSONRequest, GeoJSONState } from "../../types/reportRequest";
import storeInitialState from "../store/InitialStore";

export const INITIAL_STATE = storeInitialState.GeoSample;

const fetchGeoJSON = (state: GeoJSONState, action: PayloadAction<GeoJSONRequest>) => {
    state.data = [];
    state.loading = true;
    state.error = false;
};

const fetchGeoJSONSuccess = (state: GeoJSONState, action: PayloadAction<string[][]>) => {
    console.log('payload ', action.payload);
    state.data = action.payload;
    state.loading = false;
    state.error = false;
}
const fetchGeoJSONFailure = (state: GeoJSONState, action: PayloadAction<boolean>) => {
    state.loading = false;
    state.error = true;
};

export default createSlice({
    name: "geoSample",
    initialState: INITIAL_STATE,
    reducers: {
        fetchGeoJSON,
        fetchGeoJSONSuccess,
        fetchGeoJSONFailure,
    },
});

