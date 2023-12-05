import { Container } from './styles.js';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

export function DishDetails(){

  return(
  <Container>
    <Header/>
    
    <Button title="Incluir - R$ valor"/>
  </Container>
  )
}