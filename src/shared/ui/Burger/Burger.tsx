import cls from './Burger.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface BurgerProps{
    className?: string;
}

export const Burger = ({className}:BurgerProps) => {
    return (
        <div className={classNames(cls.Burger, {},[className])}>
            <div className={cls.firstLine}></div>
            <div className={cls.secondLine}></div>
            <div className={cls.thirdLine}></div>
        </div>
    )
}