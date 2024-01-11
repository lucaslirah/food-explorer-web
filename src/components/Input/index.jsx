import { Container } from "./styles";

export function Input({ icon: Icon, title, $isLogin, ...rest }){
    return(
        <Container $isLogin={$isLogin}>
            <div>
                {Icon && <Icon/>}
                <input {...rest}/>
                <p>{title}</p>
            </div>
        </Container>
    )
}