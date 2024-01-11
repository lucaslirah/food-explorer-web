import { useState } from "react";
import { Container, Form } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { Link, useNavigate } from 'react-router-dom';

import { api } from "../../services/api";

export function SignUp(){
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp(){
        if(!name || !email || !password){
            return alert("Preencha todos os campos");
        }

        api.post("/users", {name, email, password})
        .then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
        })
        .catch(error => {
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Não foi possível cadastrar");
            }
        })
    }

    return(
        <Container>
            <div>
                <img src="/src/assets/logo-food-explorer.svg"/>
            </div>


            <Form>
                <h1>Crie sua conta</h1>
                
                <label htmlFor="name">
                    <span>Seu nome</span>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Exemplo: Maria da Silva"
                        onChange={e => setName(e.target.value)}
                    />
                </label>

                <label htmlFor="email">
                    <span>Email</span>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>

                <label htmlFor="password">
                    <span>Senha</span>
                    <Input
                        id="password"
                        type="password"
                        placeholder="No mínimo 6 caracteres"
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>

                <Button
                    title="Cadastrar"
                    onClick={handleSignUp}
                />

                    <Link to="/">
                        <ButtonText title="Já tenho uma conta"/>
                    </Link>
            </Form>
        </Container>
    )
}