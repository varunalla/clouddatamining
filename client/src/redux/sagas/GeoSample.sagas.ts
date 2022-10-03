import {
    call,
    fork,
    put,
    CallEffect,
    PutEffect,
    takeEvery,
} from "redux-saga/effects";
import GeoSampleReducer from "../reducers/GeoSample.reducer";
import api from "../../api";
import { PayloadAction } from "@reduxjs/toolkit";
import { GeoJSONRequest } from '../../types/reportRequest';


const { geoReportRequests } = api;
const { geoReportRequest } = geoReportRequests;

export function* watchGeoSampleRequests() {
    yield takeEvery(GeoSampleReducer.actions.fetchGeoJSON, fetchGeoJSONRequestFork);
};

function* fetchGeoJSONRequestFork(action: PayloadAction<GeoJSONRequest>) {
    yield fork(fetchGeoJSON, action);
};

function* fetchGeoJSON(action: PayloadAction<GeoJSONRequest>): Generator<
    | CallEffect<any>
    | PutEffect<
        | {
            payload: any;
            type: string;
        }
        | {
            payload: undefined;
            type: string;
        }
    >,
    void,
    any
> {
    try {
        const response = yield call(
            geoReportRequest,
            action.payload
        );
        yield put(GeoSampleReducer.actions.fetchGeoJSONSuccess(response.data));
    } catch (error) {
        yield put(GeoSampleReducer.actions.fetchGeoJSONFailure(true));
    }
};
