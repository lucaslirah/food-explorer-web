import { Container } from "./styles";

export function ButtonText({ Icon:Icon, title, ...rest}){
    return(
        <Container
            {...rest}
        >
            {Icon && <Icon/>}
            {title}
        </Container>
    )
}