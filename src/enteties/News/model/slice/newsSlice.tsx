import {createSlice} from "@reduxjs/toolkit";
import {NewsSchema} from "enteties/News";
import {fetchNews} from "enteties/News/model/asyncThunk/fetchNews";

const initialState: NewsSchema = {
    news: {},
    status: 'idle',
    error: null,
    currentMonth: new Date().getMonth() + 1, // Текущий месяц
    currentYear: new Date().getFullYear(), // Текущий год
};



const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        resetNews: (state) => {
            state.news = {};
            state.status = 'idle';
            state.error = null;
            state.currentMonth = new Date().getMonth() + 1;
            state.currentYear = new Date().getFullYear();
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchNews.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchNews.fulfilled, (state, action) => {
                state.status = 'succeeded';
                for (const [date, newsItems] of Object.entries(action.payload)) {
                    if (!state.news[date]) {
                        state.news[date] = [];
                    }
                    state.news[date].push(...newsItems);
                }

                let newMonth = state.currentMonth - 1;
                let newYear = state.currentYear;
                if (newMonth < 1) {
                    newMonth = 12;
                    newYear -= 1;
                }
                state.currentMonth = newMonth;
                state.currentYear = newYear;
            })
            .addCase(fetchNews.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Произошла ошибка при загрузке новостей';
            });
    },
});
export const { resetNews } = newsSlice.actions;
export const {reducer:newsReducer} = newsSlice;