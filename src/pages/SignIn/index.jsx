import { Container, Form } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth'

export function SignIn(){

    const data = useAuth();
    console.log("meu contexto =>", data);

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
                    />
                </label>

                <label htmlFor="password">
                    <span>Senha</span>
                    <Input
                        type="password"
                        placeholder="No mínimo 6 caracteres"
                        $isLogin
                    />
                </label>

                <Button
                    title="Entrar"
                />

                <Link to='/register'>
                    <ButtonText title="Criar uma conta"/>
                </Link>
            </Form>
        </Container>
    )
}