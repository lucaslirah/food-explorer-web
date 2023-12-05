import { Container, DishInfo } from './styles.js';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ButtonText } from '../../components/ButtonText';
import { PiMinus, PiPlus } from 'react-icons/pi'
import { useState } from 'react';

export function DishDetails(){
  const [useNum, setNum] = useState(0);

  function plus(){
    setNum(useNum + 1)
  }
  function sub(){
    if(useNum > 0){
      setNum(useNum - 1)
    }
    return
  }

  return(
  <Container>
    <Header/>

    <main>
      <ButtonText title="voltar"/>

      <DishInfo>
        <img
          src='/src/assets/food-explorer-dish.png'
        />
        
        <div>
          <h1>
            Spaguetti Gambe
          </h1>

          <p>
            Massa fresca com camarões e pesto. 
          </p>

          <div className='order_control'>
              <button className='control'>
                <PiMinus onClick={sub}/>
              </button>
              <span>{useNum}</span>
              <button className='control'>
                <PiPlus onClick={plus}/>
              </button>

            <Button title="Incluir - R$ valor"/>
          </div>
        </div>
      </DishInfo>
    </main>
    
    <Footer/>
    
  </Container>
  )
}