import {NewsSchema} from "enteties/News/model/types/newsSchema";
import {newsReducer} from "enteties/News/model/slice/newsSlice";
import {getNews} from "enteties/News/model/selectors/getNews/getNews";
import {getStatusNews} from "enteties/News/model/selectors/getStatus/getStatus";
import {getErrorNews} from "enteties/News/model/selectors/getError/getError";
import News from "enteties/News/ui/News";

export  {
    NewsSchema,
    newsReducer,
    getNews,
    getStatusNews,
    getErrorNews,
    News
}