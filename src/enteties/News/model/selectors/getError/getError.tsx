import {StateSchema} from "app/providers/StoreProvider";

export const getErrorNews = (state: StateSchema)=> state.newsState.error;