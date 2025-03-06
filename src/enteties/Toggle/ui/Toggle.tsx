import {Burger} from "shared/ui/Burger/Burger";
import {useDispatch} from "react-redux";
import {toggleActions} from "enteties/Toggle/model/slice/toggleSlice";


interface ToggleProps{
    className?: string;
}

export const Toggle = ({className}:ToggleProps) => {
    const dispatch = useDispatch();

    const onToggle = () => {
        dispatch(toggleActions.toggleState())
    }
    return (
        <div>
            <Burger onClick={()=>{onToggle()}}/>
        </div>
    )
}