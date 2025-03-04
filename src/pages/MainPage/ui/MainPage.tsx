import  './MainPage.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface MainPageProps{
    className?: string;
}

export const MainPage = ({className}:MainPageProps) => {
    return (
        <div className={classNames('MainPage', {},[className])}>

        </div>
    )
}