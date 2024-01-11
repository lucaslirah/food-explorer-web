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

                <label htmlFor="email">
                    <span>Email</span>
                    <Input
                        id="email"
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        isLogin
                    />
                </label>

                <label htmlFor="password">
                    <span>Senha</span>
                    <Input
                        type="password"
                        placeholder="No mínimo 6 caracteres"
                        isLogin
                    />
                </label>

                <Button
                    title="Entrar"
                />

                <ButtonText title="Criar uma conta"/>
            </Form>
        </Container>
    )
}