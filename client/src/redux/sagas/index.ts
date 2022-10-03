import { all, AllEffect, ForkEffect } from "redux-saga/effects"; // @ts-ignore

import { watchGeoSampleRequests } from "./GeoSample.sagas";

export default function* rootSaga(): Generator<
    AllEffect<Generator<ForkEffect<never>, void, any>>,
    void,
    any
> {
    yield all([
        watchGeoSampleRequests(),
    ]);
}
