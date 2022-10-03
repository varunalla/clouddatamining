import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import DMBarChart from "../charts/DMBarChart";
import GeoChart from "../charts/GeoChart";
import ScatterFitChart from "../charts/ScatterFitChart";
import { RootState } from '../redux/reducers';
import GeoSampleReducer from "../redux/reducers/GeoSample.reducer";
import { GeoJSONRequest } from "../types/reportRequest";


interface StateProps {
    geoError?: boolean;
    geoInProgress: boolean;
    geoData?: string[][];
}

interface DispatchProps {
    getGeoData: (request: GeoJSONRequest) => void;
}

interface Props extends StateProps, DispatchProps { }

const DashboardPrimary: FunctionComponent<Props> = ({
    geoError,
    geoInProgress,
    geoData,
    getGeoData,
}): React.ReactElement => {
    useEffect(() => {
        getGeoData({ reportName: "test" });
    }, []);
    console.log(geoData, ' ', geoInProgress);
    return (
        <>
            <div className="grid grid-cols-2 gap-6 gap-y-9">
                <div className="col-span-2 mt-5"><GeoChart data={geoData} loading={geoInProgress} /></div>
                <div><DMBarChart /></div>
                <div><ScatterFitChart /></div>
            </div>
        </>
    );
}


const mapStateToProps = (state: RootState): StateProps => ({
    geoError: state.geoSample.error,
    geoInProgress: state.geoSample.loading,
    geoData: state.geoSample.data,
});

const mapDispatchToProps: DispatchProps = {
    getGeoData: GeoSampleReducer.actions.fetchGeoJSON,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPrimary);