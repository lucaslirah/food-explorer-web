import { PiX, PiPlus } from "react-icons/pi"
import { Container } from "./styles";

export function DishItem({ value, $isNew, onClick, ...rest}){
    return(
        <Container $isNew={$isNew}>
            <input
                type="text"
                value={value}
                readOnly={!$isNew}
                {...rest}
            />

            <button
                type="button"
                onClick={onClick}
                className={$isNew ? "button_add" : "button_delete"}
            >
            
            {$isNew ? <PiPlus/> : <PiX/>}
            </button>

        </Container>
    )
}