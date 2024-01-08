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
                <Input
                    label="Seu nome"
                    placeholder="Exemplo: Maria da Silva"
                />
                <Input
                    label="Email"
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                />
                <Input
                    label="Senha"
                    placeholder="No mínimo 6 caracteres"
                />

                <Button
                    title="Entrar"
                />

                <ButtonText title="Já tenho uma conta"/>
            </Form>
        </Container>
    )
}