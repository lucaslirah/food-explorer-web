import { Link, useParams, useNavigate } from 'react-router-dom';
import { PiCaretLeft, PiUploadSimple } from 'react-icons/pi';
import { ButtonText } from '../../../components/ButtonText';
import { Container, Form, Picture, Inputs } from './styles';
import { Textarea } from '../../../components/Textarea';
import { DishItem } from '../../../components/DishItem';
import { Header } from '../../../components/Header';
import { Footer } from '../../../components/Footer';
import { Button } from '../../../components/Button';
import { Select } from '../../../components/Select';
import { Input } from '../../../components/Input';

import { api } from '../../../services/api';
import { useEffect, useState } from 'react';

export function Edit(){
    const navigate = useNavigate();
    const [data, setData] = useState(null);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [price, SetPrice] = useState(0);

    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState([]);

    const [pictureFile, setPictureFile] = useState(null);

    const { id } = useParams();

    function handleRemoveIngredient(deleted) {
        setIngredients((prevState) =>
          prevState.filter((ingredient) => ingredient !== deleted)
        );
    }
    function handleAddIngredients() {
        setIngredients((prevState) => [...prevState, newIngredient]);
        setNewIngredient("");
    }
    function handlePicture(event) {
        const file = event.target.files[0];
        setPictureFile(file);
    }
    
    async function handleUpdateDish() {

        const updateConfirm = confirm("Tem certeza que deseja atualizar o prato?");

        if(updateConfirm){
            if (!name) {
                return alert("Digite o nome do prato!");
            }
    
            if (newIngredient) {
                return alert(
                "Você esqueceu de adicionar um ingrediente, clique em adicionar ou deixe o campo vazio."
                );
            }
    
            const data = new FormData();
    
            data.append("picture", pictureFile);
            data.append("name", name);
            data.append("description", description);
            data.append("price", price);
            data.append("type", type);
            data.append("ingredients", ingredients);
    
            try {
                await api.post("/dishes/create", data, {
                headers: {
                    "Content-type": `multipart/form-data`,
                },
                });
            } catch (error) {
                alert(error);
            }
    
            alert("Prato Atualizado!");
            navigate("/");
        }
    }

    async function handleDeleteDish() {
        const deleteConfirm = confirm("Tem certeza que deseja excluir o prato?");

        if(deleteConfirm){
            try {
                await api.delete(`/dishes/${id}`);
            } catch (error) {
                alert(error);
            }

            alert("Prato excluído");
            navigate("/");
        }
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

            <Form>
                <Link to="/">
                    <ButtonText
                    Icon={PiCaretLeft}
                    title="voltar"
                    />
                </Link>

                <h1>Editar prato</h1>

                {data && 
                    <Inputs>
                        <div className="inputs_wrapper">
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
                                </label>
                                <Input
                                    id="dish_name"
                                    type="text"
                                    placeholder={data.name}
                                    />
                            </div>
                            <div className="item_3">
                                <label htmlFor="dish_type">
                                    <span>Categoria</span>
                                    <Select
                                        id="dish_type"
                                        name="dish_type"
                                        onChange={e => setType(e.target.value)}
                                    >
                                        <option value="meal">Refeição</option>
                                        <option value="dessert">Sobremesa</option>
                                        <option value="drink">Bebida</option>
                                    </Select>
                                </label>
                            </div>
                        </div>

                        <div className="inputs_wrapper">
                            <div className="item_4">
                                <label>
                                    <span>Ingredientes</span>
                                        <div className="ingredients">
                                            <DishItem
                                                className="dish_ingredients"
                                                placeholder="Adicionar"
                                                value={newIngredient}
                                                onChange={(e) => setNewIngredient(e.target.value)}
                                                onClick={handleAddIngredients}
                                                $isNew
                                            />
                                        {ingredients.map((ingredient, index) => (
                                            <DishItem
                                            key={String(index)}
                                            value={ingredient}
                                            onClick={() => handleRemoveIngredient(ingredient)}
                                            />
                                        ))}
                                        </div>
                                </label>
                            </div>
                            
                            <div className="item_5">
                                <label htmlFor="dish_price">
                                    <span>Preço</span>
                                    <Input
                                        id="dish_price"
                                        type="number"
                                        placeholder={data.price}
                                        onChange={e => SetPrice(e.target.value)}
                                    />
                                </label>
                            </div>
                        </div>
                        
                        <div className="item_6">
                            <label htmlFor="dish_description">
                                <span>Descrição</span>
                                <Textarea
                                    id="dish_description"
                                    placeholder={data.description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </label>
                        </div>
                    </Inputs>
                }

                <div className="form_buttons">
                    <Button
                        title="Exluir prato"
                        onClick={handleDeleteDish}
                    />
                    <Button
                        title="Salvar alterações"
                        onClick={handleUpdateDish}
                    />
                </div>
            </Form>

            <Footer/>
        </Container>
    )
}