import { Container } from './styles';
import { PiCaretDown } from 'react-icons/pi'

export function Select({ children, ...rest }){
    return(
        <Container>
            <PiCaretDown/>
            <select
            {...rest}
            >{children}</select>
        </Container>
    )
}