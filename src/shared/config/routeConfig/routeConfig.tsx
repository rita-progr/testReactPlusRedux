import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {NotFoundPage} from "pages/NotFoundPage";
import {InfoPage} from "pages/IngoPage";


export enum RouteType{
    MAIN='main',
    NOT_FOUND = 'notFound',
    INFO = 'info',
}
export const RoutePath:Record<RouteType,string> ={
    [RouteType.INFO]:'/info/:id',
    [RouteType.MAIN]:'/',
    [RouteType.NOT_FOUND]:'*',
}

export const RouteConfig:Record<RouteType,RouteProps> = {
    [RouteType.MAIN]:{
        path:RoutePath.main,
        element:<MainPage/>
    },
    [RouteType.NOT_FOUND]:{
        path:RoutePath.notFound,
        element:<NotFoundPage/>
},
    [RouteType.INFO]:{
        path:RoutePath.info,
        element:<InfoPage/>
    }
}