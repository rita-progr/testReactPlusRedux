import { createSlice } from '@reduxjs/toolkit'
import {ToggleSchema} from "enteties/Toggle/model/types/toggleSchema";

const initialState:ToggleSchema = {
    toggle:false
}

export const toggleSlice = createSlice({
    name: 'toggleState',
    initialState,
    reducers: {
        toggleState: (state) => {
            state.toggle = !state.toggle;
        },
    },
})


export const { actions: toggleActions } = toggleSlice
export const { reducer: toggleReducer } = toggleSlice
