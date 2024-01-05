import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

import { Container, Banner } from '../Home/styles.js';

export function Home(){
    return(
        <Container>
            <Header/>
                <main>
                    <Banner>
                        <div className='rec-banner'>
                            <div>
                                <h1>Sabores inigualáveis</h1>
                                <span>Sinta o cuidado do preparo com ingredientes selecionados</span>
                            </div>
                        </div>
                        <img src='/src/assets/banner-macarons.png' className='img-banner'/>
                    </Banner>
                </main>
            <Footer/>
        </Container>
    )
}