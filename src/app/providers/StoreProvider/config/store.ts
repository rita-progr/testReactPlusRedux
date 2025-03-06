import {configureStore} from "@reduxjs/toolkit";
import {StateSchema} from "app/providers/StoreProvider/config/StateSchema";
import {toggleReducer} from "enteties/Toggle";
import {newsReducer} from "enteties/News";
// import {thunk} from 'redux-thunk';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            toggleState: toggleReducer,
            newsState: newsReducer,
        },
        devTools:__IS_DEV__,
        preloadedState: initialState,
    })
}

export default createReduxStore;