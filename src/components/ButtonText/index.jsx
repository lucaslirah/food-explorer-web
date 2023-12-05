import { Container } from "./styles";
import { PiCaretLeft } from "react-icons/pi";

export function ButtonText({ title }){
    return(
        <Container>
            <PiCaretLeft/>
            {title}
        </Container>
    )
}