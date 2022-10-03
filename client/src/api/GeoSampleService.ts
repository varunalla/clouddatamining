import { GeoJSONRequest } from "../types/reportRequest";
import axios from "axios";

function geoReportRequest(data: GeoJSONRequest): Promise<any> {
    return axios.get("/reports", {
        params: {
            report: data.reportName
        }
    });
}

const geoReportRequests = { geoReportRequest, };

export default geoReportRequests;

