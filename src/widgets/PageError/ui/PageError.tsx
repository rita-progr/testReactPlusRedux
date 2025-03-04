import cls from './PageError.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {CustomButton} from "shared/ui/CustomButton/CustomButton";

interface PageErrorProps{
    className?: string;
}

export const PageError = ({className}:PageErrorProps) => {



    const onReload = () => {
        location.reload();
    }

    return (
        <div className={classNames(cls.PageError, {},[className])}>
            <div>Something went wrong</div>
            <CustomButton
                onClick={onReload}>Reload page
            </CustomButton>
        </div>
    )
}