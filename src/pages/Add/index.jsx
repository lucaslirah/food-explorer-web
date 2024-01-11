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

export function Add(){
    return(
        <Container>
            <Header/>

            <Form>
                <ButtonText 
                Icon={PiCaretLeft}
                title="voltar"
                />

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
                                    <DishItem
                                        className="dish_ingredients"
                                        value="Pão Naan"
                                    />
                                    <DishItem
                                        className="dish_ingredients"
                                        value="Pão Naan"
                                    />
                                    <DishItem
                                        className="dish_ingredients"
                                        placeholder="Adicionar"
                                        $isNew
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