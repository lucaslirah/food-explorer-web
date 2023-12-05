import { Button } from "../Button";
import { Input } from "../Input";
import { Container } from "./styles";
import { PiReceipt, PiSignOut } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";

export function Header(){
    return(
        <Container>
            <div>
                <img src="/src/assets/logo-food-explorer.svg"/>
            </div>

            <Input placeholder="Busque por pratos ou ingredientes" icon={FiSearch}/>

            <Button title="Pedidos(n)" icon={PiReceipt}/>

            <div>
                <PiSignOut/>
            </div>
        </Container>
    );
}