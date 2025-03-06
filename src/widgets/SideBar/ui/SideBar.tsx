import cls from './SideBar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";


import {CustomLink} from "shared/ui/CustomLink/CustomLink";
import {useDispatch, useSelector} from "react-redux";
import {getToggleValue} from "enteties/Toggle/model/selectors/getToggleValue/getToggleValue";
import {Portal} from "shared/ui/Portal/Portal";
import {toggleActions} from "enteties/Toggle/model/slice/toggleSlice";
// import {RoutePath} from "shared/config/routeConfig/routeConfig";

interface SideBarProps{
    className?: string;
}

export const SideBar = (props:SideBarProps) => {

    const dispatch = useDispatch();
    const toggle = useSelector(getToggleValue)

    const onToggle = () => {
        dispatch(toggleActions.toggleState())
    }

    const mockLinks = [
        {
            id:1,
            name:'SCIENCE',
            to:'/'
        },
        {
            id:2,
            name:'GENERAL',
            to:'/'
        },
        {
            id:3,
            name:'ENTERTAINMENT',
            to:'/'
        },
        {
            id:4,
            name:'TECHNOLOGY',
            to:'/'
        },
        {
            id:5,
            name:'BUSINESS',
            to:'/'
        },
        {
            id:6,
            name:'HEALTH',
            to:'/'
        },
        {
            id:7,
            name:'SPORTS',
            to:'/'
        },
    ]

    const {
        className,
    } = props;
    return (
        <Portal>
        <div className={classNames(cls.SideBar, {[cls.show]:toggle},[className])}>
            <div className={classNames(cls.links)}>
                {mockLinks.map((item) => (
                    <CustomLink to = {item.to} key = {item.id} onClick={onToggle}>
                        {item.name}
                    </CustomLink>
                ))}
            </div>
            <div className={cls.close} onClick = {onToggle}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L1 1M21 1L1 21" stroke="black" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
        </div>
        </Portal>
    )
}