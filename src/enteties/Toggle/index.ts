import {ToggleSchema} from "enteties/Toggle/model/types/toggleSchema";
import {toggleReducer} from "enteties/Toggle/model/slice/toggleSlice";
import {Toggle} from "enteties/Toggle/ui/Toggle";
import {getToggleValue} from "enteties/Toggle/model/selectors/getToggleValue/getToggleValue";

export {
    ToggleSchema,
    toggleReducer,
    Toggle
}