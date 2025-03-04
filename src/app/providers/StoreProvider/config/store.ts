import {configureStore} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {},
        devTools:__IS_DEV__,
        preloadedState: initialState
    })
}

export default createReduxStore;