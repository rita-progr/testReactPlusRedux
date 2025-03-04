import {CustomButton} from "shared/ui/CustomButton/CustomButton";
import {useEffect, useState} from "react";


export const ThrowErrorButton = () => {
    const [error, setError] = useState(false);

    const onThrow = () => {
        setError(true);
    }

    useEffect(() => {
        if(error){
            throw new Error
        }
    }, [error]);


    return (
        <CustomButton onClick={onThrow}>
            Выбросить ошибку
        </CustomButton>
    )
}