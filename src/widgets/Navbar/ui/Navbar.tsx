import cls from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useState} from "react";
import {Toggle} from "enteties/Toggle";

interface NavbarProps{
    className?: string;
}

export const Navbar = ({className}:NavbarProps) => {
    const [show, setShow] =useState<boolean>(false);

    const onToggle = () => {
        setShow(!show);
    }

    return (
        <div className={classNames(cls.Navbar, {},[className])}>
            <div className={cls.burger}><Toggle/></div>
            <h1>BESIDER</h1>
        </div>
    )
}