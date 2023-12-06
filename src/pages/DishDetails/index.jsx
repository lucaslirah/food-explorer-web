import { Container, DishInfo } from './styles.js';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';
import { PiMinus, PiPlus } from 'react-icons/pi'
import { useState } from 'react';

export function DishDetails(){
  const [order, setOrder] = useState('00');

  function increase(){
    let orderNumber;

    if(order < '10'){
      orderNumber = Number(order) + 1;

      let orderString = orderNumber.toString().padStart(2, '0');
    
      setOrder(orderString);
      return
    }
    orderNumber = Number(order) + 1;
    setOrder(orderNumber);
  }

  function decrease(){
    let orderNumber;

    if(order > 0 && order <= 10){
      orderNumber = Number(order) - 1;

      let orderString = orderNumber.toString().padStart(2, '0');
      
      setOrder(orderString);
    }else if(order > 10){
      orderNumber = Number(order) - 1;

      setOrder(orderNumber);
    }else{
      return
    }
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

          <div className='tags'>
            <Tag title='spaguetti'/>
            <Tag title='camarão'/>
            <Tag title='pimenta calabresa'/>
          </div>

          <div className='order_control'>
              <button className='control'>
                <PiMinus onClick={decrease}/>
              </button>
              <span>{order}</span>
              <button className='control'>
                <PiPlus onClick={increase}/>
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