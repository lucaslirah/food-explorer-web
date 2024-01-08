import { Container } from "./styles";

export function ButtonText({ Icon:Icon, title }){
    return(
        <Container>
            {Icon && <Icon/>}
            {title}
        </Container>
    )
}