import { createContext, useContext, useEffect, useState } from 'react';

import { api } from '../services/api';

const DishesContext = createContext({});

function DishesProvider({ children }){
    const [dishes, setDishes] = useState([]);

    async function fetchDishes(search){
        try{
            let response;

            if(search){
                response = await api.get(`/dishes?query=${search}`);
            }else{
                response = await api.get(`/dishes`);
            }

            setDishes(response.data);
        }catch(error){
            console.error('erro ao obter dados', error);
        }
    }

    return(
        <DishesContext.Provider value={{ 
            fetchDishes,
            dishes
            }}>
            {children}
        </DishesContext.Provider>
    )
}

function useDishes(){
    const context = useContext(DishesContext);

    return context;
}

export { DishesProvider, useDishes };