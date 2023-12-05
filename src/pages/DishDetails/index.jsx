import { Container } from './styles.js';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function DishDetails(){

  return(
  <Container>
    <Header/>

    <main>
      <Button title="Incluir - R$ valor"/>

      <Footer/>
    </main>
    
  </Container>
  )
}