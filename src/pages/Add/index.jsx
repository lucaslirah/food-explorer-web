import { useState } from 'react';
import { Container, Form, Picture } from './styles';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { PiCaretLeft, PiUploadSimple } from 'react-icons/pi';
import { Textarea } from '../../components/Textarea';
import { Select } from '../../components/Select';
import { DishItem } from '../../components/DishItem';

import { Link } from 'react-router-dom';

export function Add(){
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    function handleAddIngredients(){
        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");
    }
    function handleRemoveIngredient(deleted){
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
    }

    return(
        <Container>
            <Header/>

            <Form>
                <Link to="/">
                    <ButtonText
                    Icon={PiCaretLeft}
                    title="voltar"
                    />
                </Link>

                <h1>Adicionar prato</h1>

                <div className="inputs">
                    <div className="inputs_item_1">
                        <Picture className='item_1'>
                            <label htmlFor='dish_picture'>
                                <span>Imagem do prato</span>
                                <Input
                                    title="Selecione a imagem"
                                    id="dish_picture"
                                    type="file"
                                    icon={PiUploadSimple}
                                />
                            </label>
                        </Picture>
                        <div className="item_2">
                            <label htmlFor="dish_name">
                                <span>Nome</span>
                                <Input
                                    id="dish_name"
                                    placeholder="Ex: Salada Ceaser"
                                    type="text"
                                />
                            </label>
                        </div>
                        <div className="item_3">
                            <label htmlFor="dish_type">
                                <span>Categoria</span>
                                <Select
                                    id="dish_type"
                                    name="dish_type"
                                >
                                    <option value="meal">Refeição</option>
                                    <option value="dessert">Sobremesa</option>
                                    <option value="drink">Bebida</option>
                                </Select>
                            </label>
                        </div>
                    </div>

                    <div className="inputs_item_2">
                        <div className="item_4">
                            <label>
                                <span>Ingredientes</span>
                                <div className="ingredients">
                                    {
                                        ingredients.map((ingredient, index) => (
                                            <DishItem
                                                key={String(index)}
                                                value={ingredient}
                                                onClick={() => handleRemoveIngredient(ingredient)}
                                            />
                                        ))
                                    }
                                    <DishItem
                                        placeholder="Adicionar"
                                        $isNew
                                        value={newIngredient}
                                        onChange={e => setNewIngredient(e.target.value)}
                                        onClick={handleAddIngredients}
                                    />
                                </div>
                            </label>
                        </div>
                        
                        <div className="item_5">
                            <label htmlFor="dish_price">
                                <span>Preço</span>
                                <Input
                                    id="dish_price"
                                    type="number"
                                    placeholder="R$ 00,00"
                                />
                            </label>
                        </div>
                    </div>
                    
                    <div className="item_6">
                        <label htmlFor="dish_description">
                            <span>Descrição</span>
                            <Textarea
                                id="dish_description"
                                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                            />
                        </label>
                    </div>
                </div>

                <Button
                    title="Salvar alterações"
                />
            </Form>

            <Footer/>
        </Container>
    )
}