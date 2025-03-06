import cls from './MainPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {News} from "enteties/News";

interface MainPageProps{
    className?: string;
}

export const MainPage = ({className}:MainPageProps) => {
    return (
        <div className={classNames(cls.MainPage, {},[className])}>
            <News/>
        </div>
    )
}