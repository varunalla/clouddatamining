export interface GeoJSONState {
    data?: string[][];
    loading: boolean;
    error?: boolean;
}
export interface GeoJSONRequest {
    reportName: string;
}