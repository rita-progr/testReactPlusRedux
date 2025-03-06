import cls from './InfoPage.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface InfoPageProps{
    className?: string;
}

export const InfoPage = ({className}:InfoPageProps) => {
    return (
        <div className={classNames(cls.InfoPage, {},[className])}>

        </div>
    )
}