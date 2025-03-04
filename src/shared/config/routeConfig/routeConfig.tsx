import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {NotFoundPage} from "pages/NotFoundPage";


export enum RouteType{
    MAIN='main',
    NOT_FOUND = 'notFound',
}
export const RoutePath:Record<RouteType,string> ={
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
}
}