import { Container } from "./styles";
import logoFoodExplorerFooter from "../../assets/logo-food-explorer-footer.svg";

export function Footer() {
  return (
    <Container>
      <img src={logoFoodExplorerFooter} />
      <p>© 2023 - Todos os direitos reservados.</p>
    </Container>
  );
}
