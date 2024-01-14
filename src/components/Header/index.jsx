import { Button } from "../Button";
import { Input } from "../Input";
import { Container, SignOut } from "./styles";
import { PiReceipt, PiSignOut } from "react-icons/pi";
import { FiSearch } from "react-icons/fi";

import { useAuth } from '../../hooks/auth';

import { useEffect, useState } from 'react';

import { useDishes } from '../../hooks/dishes';

export function Header(){
    const { signOut } = useAuth();
    const { fetchDishes } = useDishes();

    const [search, setSearch] = useState("");

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

            <SignOut onClick={signOut}>
                <PiSignOut/>
            </SignOut>
        </Container>
    );
}