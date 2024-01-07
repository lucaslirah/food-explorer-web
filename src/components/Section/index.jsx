import { Container } from './styles';

export function Section({ title, children }){
    return(
        <Container>
            <h2>{title}</h2>
            <div className='dish_cards'>
                {children}
            </div>
        </Container>
    )
}