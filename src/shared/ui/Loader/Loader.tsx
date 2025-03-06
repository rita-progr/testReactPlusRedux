import './Loader.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface LoaderProps{
    className?: string;
}

export const Loader = ({className}:LoaderProps) => {
    return (
        <div className={classNames('loader-wrap')}>
             <span className={classNames('loader', {}, [className])}>
        </span>
        </div>

    )
}