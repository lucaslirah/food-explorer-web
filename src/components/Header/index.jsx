import { Button } from "../Button";
import { Container } from "./styles";
import { PiReceipt, PiSignOut } from "react-icons/pi";

export function Header(){
    return(
        <Container>
            <img src="/src/assets/logo-food-explorer.png"/>

            <Button title="Pedidos(n)" icon={PiReceipt}/>

            <PiSignOut/>
        </Container>
    );
}