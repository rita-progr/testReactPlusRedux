import cls from './Burger.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface BurgerProps{
    className?: string;
    onClick?: () => void;
}

export const Burger = ({className, onClick}:BurgerProps) => {
    return (
        <div className={classNames(cls.Burger, {},[className])} onClick={onClick}>
            <div className={cls.firstLine}></div>
            <div className={cls.secondLine}></div>
            <div className={cls.thirdLine}></div>
        </div>
    )
}