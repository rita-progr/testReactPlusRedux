import {StateSchema} from "app/providers/StoreProvider";

export const getNews = (state: StateSchema)=> state.newsState.news;