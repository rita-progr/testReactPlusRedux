import cls from './CustomLink.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";


interface CustomLinkProps extends LinkProps{
    className?: string;
}

export const CustomLink:FC<CustomLinkProps> = (props) => {
    const {
        children,
        to,
        className,
        ...otherProps
    } = props;
    return (
        <Link to = {to} className={classNames(cls.CustomLink, {},[className])} {...otherProps}>
            {children}
        </Link>
    )
}