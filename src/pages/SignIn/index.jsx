import { useState } from 'react';
import { Container, Form } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth'

export function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn(){
        signIn({ email, password })
    }

    return(
        <Container>
            <div>
                <img src="/src/assets/logo-food-explorer.svg"/>
            </div>


            <Form>
                <h1>Faça login</h1>

                <label htmlFor="email">
                    <span>Email</span>
                    <Input
                        id="email"
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        $isLogin
                        onChange={e => setEmail(e.target.value)}
                    />
                </label>

                <label htmlFor="password">
                    <span>Senha</span>
                    <Input
                        type="password"
                        placeholder="No mínimo 6 caracteres"
                        $isLogin
                        onChange={e => setPassword(e.target.value)}
                    />
                </label>

                <Button
                    title="Entrar" 
                    onClick={handleSignIn}
                />

                <Link to='/register'>
                    <ButtonText title="Criar uma conta"/>
                </Link>
            </Form>
        </Container>
    )
}