import { PiMinus, PiPlus, PiCaretLeft } from 'react-icons/pi';
import { ButtonText } from '../../../components/ButtonText';
import { Button } from '../../../components/Button';
import { Footer } from '../../../components/Footer';
import { Header } from '../../../components/Header';
import { useNavigate, useParams } from "react-router-dom";
import { Container, DishInfo } from './styles.js';
import { Tag } from '../../../components/Tag';
import { useEffect, useState } from 'react';

import { api } from '../../../services/api.js';

import { useAuth } from '../../../hooks/auth.jsx';
import { USER_ROLE } from '../../../utils/roles.js';

export function Details(){
  const [order, setOrder] = useState('01');
  const [data, setData] = useState(null);
  const { user } = useAuth();

  const navigate = useNavigate();

  const { id } = useParams();

  const pictureUrl = `${api.defaults.baseURL}/files/${data?.picture}`;
    
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
      setPrice(Number(price) * 2);
    }else{
      return
    }
  }

  function handleBack(){
    navigate("/");
  }

  function handleDishEdit(){
    navigate(`/dishes/edit/${id}`)
  }

  useEffect(() => {
    async function fetchDishDetails() {
        const response = await api.get(`/dishes/${id}`);
        setData(response.data);
    }

    fetchDishDetails();
  }, []);

  return(
  <Container>
    <Header/>

    {data &&
      <main>
          <ButtonText 
            Icon={PiCaretLeft} 
            title="voltar" 
            onClick={handleBack}
          />

        <DishInfo>
          <img
            src={pictureUrl}
          />
          
          <div>
            <h1>
              {data.name}
            </h1>

            <p>
              {data.description}
            </p>

            {
              data.ingredients &&            
                <div className='tags'>
                  {data.ingredients.map(ingredient => (
                    <Tag 
                      key={String(ingredient.id)}
                      title={ingredient.name}/>
                    ))
                  }
                </div>
            }

            <div className='order_control'>
                {
                  user.role === USER_ROLE.CUSTOMER &&
                  <>
                    <button className='control'>
                      <PiMinus onClick={decrease}/>
                    </button>
                    <span>{order}</span>
                    <button className='control'>
                      <PiPlus onClick={increase}/>
                    </button>

                    <Button title={`Incluir R$ ${data.price}`}/>
                  </>
              }
              {
                user.role === USER_ROLE.ADMIN &&
                <>
                  <Button title="Editar prato" onClick={handleDishEdit}/>
                </>
              }
            </div>
          </div>
        </DishInfo>
      </main>
    }
    
    <Footer/>
  </Container>
  )
}