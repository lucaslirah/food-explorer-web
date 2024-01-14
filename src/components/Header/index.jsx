import { PiReceipt, PiSignOut } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useDishes } from '../../hooks/dishes';
import { Container, SignOut } from "./styles";
import { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { FiSearch } from "react-icons/fi";
import { Button } from "../Button";
import { Input } from "../Input";
import { USER_ROLE } from "../../utils/roles";

export function Header(){
    const { signOut, user } = useAuth();
    const { fetchDishes } = useDishes();

    const navigation = useNavigate()

    const [search, setSearch] = useState("");

    function handleSignOut(){
        navigation("/");
        signOut();
    }
    function handleNewDish(){
        navigation("/dishes/create");
    }

    useEffect(() => {
        fetchDishes(search);
    }, [search]);

    return(
        <Container>
            <div className="food_explorer_logo">
                <img src="/src/assets/logo-food-explorer.svg"/>
                {
                    user.role === USER_ROLE.ADMIN &&
                    <>
                        <p>admin</p>
                    </>
                }      
            </div>

            <Input 
            placeholder="Busque por pratos ou ingredientes" 
            icon={FiSearch}
            onChange={e => setSearch(e.target.value)}
            />

            {
                user.role === USER_ROLE.CUSTOMER &&
                <>
                    <Button title="Pedidos(n)" icon={PiReceipt}/>
                </>
            }
            {
                user.role === USER_ROLE.ADMIN &&
                <>
                    <Button title="Novo prato" onClick={handleNewDish}/>
                </>
            }

            <SignOut onClick={handleSignOut}>
                <PiSignOut/>
            </SignOut>
        </Container>
    );
}