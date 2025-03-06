import {createAsyncThunk} from "@reduxjs/toolkit";
import {NewsItem} from "enteties/News/model/types/newsSchema";
import {StateSchema} from "app/providers/StoreProvider";
import {formatDate} from "shared/ui/FormatDate/formatDate";

const groupNewsByDate = (news: NewsItem[]) => {
    return news.reduce((acc, item) => {
        const dateKey = formatDate(item.pub_date)
        if (!acc[dateKey]) {
            acc[dateKey] = [];
        }
        acc[dateKey].push(item);
        return acc;
    }, {} as Record<string, NewsItem[]>);
};

export const fetchNews = createAsyncThunk<Record<string, NewsItem[]>, void, { state: StateSchema }>(
    'news/fetchNews',
    async (_, { getState }) => {
        const state = getState();
        const { currentMonth, currentYear } = state.newsState;

        try {
            const response = await fetch(
                `/api/svc/archive/v1/${currentYear}/${currentMonth}.json?api-key=6LDBpwvh0PAONqBhRFXesvbJG380QJaY&limit=10`
            );
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();


            const newsItems: NewsItem[] = data.response.docs
                .map((item: any) => {
                    const pubDate = new Date(item.pub_date);
                    const formattedDate = pubDate.toLocaleString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true,
                    });

                    return {
                        id: item._id,
                        abstract: item.abstract,
                        pub_date: formattedDate,
                        multimedia: item.multimedia,
                        web_url: item.web_url,
                        source: item.source,
                        rawDate: pubDate.getTime(),
                    };
                })
                .sort((a: NewsItem, b: NewsItem) => b.rawDate - a.rawDate);
            const groupedNews = groupNewsByDate(newsItems);
            console.log(groupedNews);
            return groupedNews;
        } catch (error) {
            console.error('Ошибка при получении новостей:', error);
            throw error;
        }
    }
);
// export const startNewsPolling = (dispatch: any, getState: any) => {
//     const interval = setInterval(async () => {
//         const resultAction = await dispatch(fetchNews());
//         if (fetchNews.fulfilled.match(resultAction)) {
//             const currentNews = getState().news.newsItems;
//             const newNews = resultAction.payload;
//
//
//             const hasNewContent = newNews.some(
//                 (newItem: NewsItem) => !currentNews.find((item: NewsItem) => item.id === newItem.id)
//             );
//
//             if (hasNewContent) {
//                 console.log('Обнаружены новые новости:', newNews);
//
//             } else {
//                 console.log('Новых новостей нет');
//             }
//         } else {
//             console.error('Ошибка при обновлении новостей:', resultAction.payload);
//         }
//     }, 30000);
//
//
//     return () => clearInterval(interval);
// };

