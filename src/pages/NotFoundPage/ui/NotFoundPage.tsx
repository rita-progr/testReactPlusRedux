import './NotFoundPage.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface NotFoundPageProps{
    className?: string;
}

export const NotFoundPage = ({className}:NotFoundPageProps) => {
    return (
        <div className={classNames('NotFound', {},[className])}>
            <h2>Страница не найдена</h2>
        </div>
    )
}