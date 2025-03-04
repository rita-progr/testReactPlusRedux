import cls from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Burger} from "shared/ui/Burger/Burger";

interface NavbarProps{
    className?: string;
}

export const Navbar = ({className}:NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {},[className])}>
            <div className={cls.burger}><Burger/></div>
            <h1>BESIDER</h1>
        </div>
    )
}