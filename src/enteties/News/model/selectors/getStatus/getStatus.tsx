import {StateSchema} from "app/providers/StoreProvider";

export const getStatusNews = (state:StateSchema) => state.newsState.status;