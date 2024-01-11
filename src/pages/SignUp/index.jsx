import { Container, Form } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignUp(){
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
                    />
                </label>

                <label htmlFor="email">
                    <span>Email</span>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                    />
                </label>

                <label htmlFor="password">
                    <span>Senha</span>
                    <Input
                        id="password"
                        type="password"
                        placeholder="No mínimo 6 caracteres"
                    />
                </label>

                <Button
                    title="Entrar"
                />

                <ButtonText title="Já tenho uma conta"/>
            </Form>
        </Container>
    )
}