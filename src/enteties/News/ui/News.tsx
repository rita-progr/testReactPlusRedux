import {useDispatch, useSelector} from "react-redux";
import {getErrorNews, getNews, getStatusNews} from "enteties/News";
import {useCallback, useEffect, useRef} from "react";
import {fetchNews, startNewsPolling} from "enteties/News/model/asyncThunk/fetchNews";
import cls from './News.module.scss';
import {Loader} from "shared/ui/Loader/Loader";
import {Link} from "react-router-dom";
import {ThunkDispatch} from "redux-thunk";

import {UnknownAction} from "redux";
import {StateSchema} from "app/providers/StoreProvider";;
import {CustomButton} from "shared/ui/CustomButton/CustomButton";


const News = () => {
    const dispatch = useDispatch<ThunkDispatch<StateSchema, unknown, UnknownAction>>();
    const listRef = useRef<HTMLDivElement>(null);


    const news = useSelector(getNews);
    const status = useSelector(getStatusNews);
    const error = useSelector(getErrorNews);

    useEffect(() => {
        dispatch(fetchNews());
    },[dispatch])

    useEffect(() => {

        const stopPolling = startNewsPolling(dispatch, () => ({newsState: { news },} as StateSchema));


        return () => stopPolling();
    }, [dispatch, news]);

    const handleScroll = useCallback(() => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 100) {
            dispatch(fetchNews());
        }
    }, [dispatch]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);


    if (status === 'failed') {
        return <div>Ошибка: {error}</div>;
    }
    return (
        <div className={cls.NewsContainer}>
            {Object.entries(news).map(([date, newsItems])=>(
                <>
            <h2 className={cls.title}>News for {date}</h2>
            <div className={cls.NewsCont} ref={listRef}>
                {newsItems?.map((item, i) => (
                        <Link to = {item.web_url}>
                        <div className={cls.News}>
                            <div className={cls.img} >
                                {item.multimedia && item.multimedia.length > 0 ? (
                                    <img src={`https://static01.nyt.com/${item.multimedia[0]?.url}`} alt="Новость" />
                                ):(
                                    <div className = {cls.Squere}></div>
                                )}
                            </div>
                            <div className={cls.titles}>
                                <h3 className={cls.CNN}>CNN</h3>
                                <p className={cls.Title}>{item.abstract}</p>
                                <p className={cls.Data}>
                                    {item.pub_date}</p>
                            </div>
                        </div>
                        </Link>
                    ))
                }
            </div>
                </>
        ))}
            {status === 'loading' && <div><Loader/></div>}
            <div className={cls.NewsCont}>
            <div className={cls.links}>
                <a href="#">Log in</a>
                <a href="#">About Us</a>
                <a href="#">Publishers</a>
                <a href="#">Sitemap</a>
            </div>
            <p>Powered by</p>
                <CustomButton >
                    <div className={cls.btn}>
                        <span className={cls.btnNews}>NEWS</span>
                        <span className={cls.btnAPI}>API</span>
                    </div>
                </CustomButton>
                <p className={cls.descr}>© 2023 Besider. Inspired by Insider</p>
            </div>

        </div>

    )
}
export default News;