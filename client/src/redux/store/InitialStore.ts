interface InitialState {
    GeoSample: {
        data: string[][],
        loading: boolean;
        error: boolean;
    };
}

const storeInitialState: InitialState = {
    GeoSample: {
        data: [],
        loading: false,
        error: false
    }
}

export default storeInitialState;