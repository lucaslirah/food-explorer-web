import { Container } from "./styles";

export function Input({ icon: Icon, label, isLogin, ...rest }){
    return(
        <Container isLogin={isLogin}>
            <h2>{label}</h2>
            <div>
                {Icon && <Icon/>}
                <input {...rest}/>
            </div>
        </Container>
    )
}