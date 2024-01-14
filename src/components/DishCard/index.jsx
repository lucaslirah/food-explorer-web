import { PiMinus, PiPlus, PiHeartStraight, PiPencilSimple } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { Button } from '../Button';
import { useState } from 'react';

import { api } from '../../services/api';
import { USER_ROLE } from '../../utils/roles';
import { useAuth } from '../../hooks/auth';

export function DishCard({ data, ...rest }){
    const [order, setOrder] = useState('01');

    const pictureUrl = `${api.defaults.baseURL}/files/${data?.picture}`;

    const { user } = useAuth();

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
        data && <Container {...rest}>
          
          {
            user.role === USER_ROLE.CUSTOMER &&
            <>
              <PiHeartStraight size={24}/>
            </>
          }
          {
            user.role === USER_ROLE.ADMIN &&
            <>
              <Link to={`/dishes/edit/${data.id}`}>
                <PiPencilSimple size={24}/>
              </Link>
            </>
          }

          <Link to={`/dishes/details/${data.id}`}>
            <img src={pictureUrl}/>
            <h1>{data.name} &gt;</h1>
          </Link>

          <p className='description'>{data.description}</p>
          <p className='price'>R$ {data.price}</p>

          {
            user.role === USER_ROLE.CUSTOMER &&
            <>
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
            </>
          }
        </Container>
    )
}