import React from "react";
import DMBarChart from "../charts/DMBarChart";
import GeoChart from "../charts/GeoChart";
import ScatterFitChart from "../charts/ScatterFitChart";

const DashboardPrimary = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-6 gap-y-9">
                <div className="col-span-2 mt-5"><GeoChart /></div>
                <div><DMBarChart /></div>
                <div><ScatterFitChart /></div>
            </div>
            <div>



            </div>
        </>
    );
}
export default DashboardPrimary;