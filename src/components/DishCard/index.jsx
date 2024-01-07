import { Container } from './styles';
import { Button } from '../Button';
import { PiMinus, PiPlus } from 'react-icons/pi';
import { useState } from 'react';

export function DishCard({ data, ...rest }){
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
        <Container {...rest}>
            <img src={data.picture}/>
            <h1>{data.name} &gt;</h1>
            <p className='description'>{data.description}</p>
            <p className='price'>R$ {data.price}</p>

            <div className='order_control'>
              <button className='control'>
                <PiMinus onClick={decrease}/>
              </button>
              <span>{order}</span>
              <button className='control'>
                <PiPlus onClick={increase}/>
              </button>

            <Button title="Incluir"/>
          </div>
        </Container>
    )
}