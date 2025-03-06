import {ToggleSchema} from "enteties/Toggle";
import {NewsSchema} from "enteties/News";


export interface StateSchema {
    toggleState: ToggleSchema;
    newsState: NewsSchema;
}