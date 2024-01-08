import { Container, Form } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignIn(){
    return(
        <Container>
            <div>
                <img src="/src/assets/logo-food-explorer.svg"/>
            </div>


            <Form>
                <h1>Faça login</h1>
                <Input
                    label="Email"
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    isLogin
                />
                <Input
                    label="Senha"
                    placeholder="No mínimo 6 caracteres"
                    isLogin
                />

                <Button
                    title="Entrar"
                />

                <ButtonText title="Criar uma conta"/>
            </Form>
        </Container>
    )
}