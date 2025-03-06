import {createSelector} from '@reduxjs/toolkit';
import {getToggle} from "./../getToggle/getToggle";
import {ToggleSchema} from "enteties/Toggle";

export const getToggleValue = createSelector(
    getToggle,
    (toggleState: ToggleSchema) => toggleState.toggle
)