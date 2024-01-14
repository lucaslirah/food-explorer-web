import { PiReceipt, PiSignOut } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useDishes } from '../../hooks/dishes';
import { Container, SignOut } from "./styles";
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { FiSearch } from "react-icons/fi";
import { Button } from "../Button";
import { Input } from "../Input";

export function Header(){
    const { signOut } = useAuth();
    const { fetchDishes } = useDishes();

    const navigation = useNavigate()

    const [search, setSearch] = useState("");

    function handleSignOut(){
        navigation("/");
        signOut();
    }

    useEffect(() => {
        fetchDishes(search);
    }, [search]);

    return(
        <Container>
            <div>
                <img src="/src/assets/logo-food-explorer.svg"/>
            </div>

            <Input 
            placeholder="Busque por pratos ou ingredientes" 
            icon={FiSearch}
            onChange={e => setSearch(e.target.value)}
            />

            <Button title="Pedidos(n)" icon={PiReceipt}/>

            <SignOut onClick={handleSignOut}>
                <PiSignOut/>
            </SignOut>
        </Container>
    );
}